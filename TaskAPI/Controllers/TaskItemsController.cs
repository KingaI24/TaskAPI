using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;
using TaskAPI.ViewModel;
using TaskAPI.ViewModel.Collections;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly TaskContext _context;
        private readonly IMapper _mapper;

        public TaskItemsController(TaskContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/TaskItems
        /// <summary>
        /// Show all tasks with optional filters based on deadline date. 
        /// </summary>
        /// <param name="from">From date. Leave empty for no limit.</param>
        /// <param name="to">To date. Leave empty for no limit.</param>
        /// <param name="page">The page of results, starting from 0..</param>
        /// <param name="itemsPerPage">Number of items to display.</param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetTasks(
            [FromQuery]DateTime? from = null,
            [FromQuery]DateTime? to = null,
            [FromQuery]int page = 0,
            [FromQuery]int itemsPerPage = 3)
        {
            IQueryable<TaskItem> result = _context.Tasks;
            if (from != null)
            {
                result = result.Where(f => from <= f.DateDeadline);
            }
            if (to != null)
            {
                result = result.Where(f => f.DateDeadline <= to);
            }

            var tasksRepo = await result
                .Include(t => t.Comments)
                .Skip(page*itemsPerPage)
                .Take(itemsPerPage)
                .ToListAsync();

            var returnTasks = _mapper.Map<IEnumerable<TaskCommentNumberVM>>(tasksRepo);
            var paginatedList = new PaginatedList<TaskCommentNumberVM>(page, await result.CountAsync(), itemsPerPage);
            paginatedList.Items.AddRange(returnTasks); //addrange -> to add collections

            return Ok(paginatedList);
        }

        // GET: api/TaskItems/5
        /// <summary>
        /// Find Task based on id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTaskItem(long id)
        {
            var taskItem = await _context.Tasks.Include(t => t.Comments).FirstOrDefaultAsync(t => t.Id == id);

            if (taskItem == null)
            {
                return NotFound();
            }

            return taskItem;
        }

        // PUT: api/TaskItems/5
        /// <summary>
        /// Update task. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="taskDto"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(long id, TaskCreateVM taskDto)
        {
            if (id != taskDto.Id)
            {
                return BadRequest();
            }

            var taskItem = _mapper.Map<TaskItem>(taskDto);

            taskItem.DateAdded = DateTime.Now;

            if (taskItem.Status.Equals(StatusList.closed))
            {
                taskItem.DateClosure = DateTime.Now;
            }
            else
            {
                taskItem.DateClosure = default;
            }

            _context.Entry(taskItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TaskItems
        /// <summary>
        /// Insert new task.
        /// </summary>
        /// <param name="taskDto"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TaskCommentNumberVM>> PostTaskItem(TaskCreateVM taskDto)
        {
            var taskItem = _mapper.Map<TaskItem>(taskDto);

            taskItem.DateAdded = DateTime.Now;

            if (taskItem.Status.Equals(StatusList.closed))
            {
                taskItem.DateClosure = DateTime.Now;
            }
            else
            {
                taskItem.DateClosure = default;
            }

            _context.Tasks.Add(taskItem);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskItem", new { id = taskItem.Id }, taskItem);
        }

        // DELETE: api/TaskItems/5
        /// <summary>
        /// Delete task by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskCommentNumberVM>> DeleteTaskItem(long id)
        {
            var taskItem = await _context.Tasks.Include(t => t.Comments).FirstAsync(t => t.Id == id);
            if (taskItem == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(taskItem);
            await _context.SaveChangesAsync();

            var taskToReturn = _mapper.Map<TaskCommentNumberVM>(taskItem);
            return taskToReturn;
        }

        private bool TaskItemExists(long id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}
