using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskItemsController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/TaskItems
        /// <summary>
        /// Show all tasks with optional filters based on deadline date. 
        /// </summary>
        /// <param name="from">From date. Leave empty for no limit.</param>
        /// <param name="to">To date. Leave empty for no limit.</param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks(
            [FromQuery]DateTime? from = null,
            [FromQuery]DateTime? to = null)
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

            return await result.Include(t => t.Comments).ToListAsync();
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
        /// <param name="taskItem"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(long id, TaskItem taskItem)
        {
            if (id != taskItem.Id)
            {
                return BadRequest();
            }

            /*var entry = await _context.Tasks.FindAsync(id);

            if (taskItem.Title != null) entry.Title = taskItem.Title;
            if (taskItem.Description != null) entry.Description = taskItem.Description;
            if (taskItem.DateAdded != null) entry.DateAdded = taskItem.DateAdded;
            if (taskItem.DateClosure != null) entry.DateClosure = taskItem.DateClosure;
            if (taskItem.Importance != NoContent) entry.Importance = taskItem.Importance;

            if (taskItem.Status.Equals(StatusList.closed))
            {
                entry.Status = taskItem.Status;
                entry.DateClosure = DateTime.Now;
            }

            if (taskItem.Status.Equals(StatusList.open) || taskItem.Status.Equals(StatusList.in_progress))
            {
                entry.Status = taskItem.Status;
                entry.DateClosure = default;
            }*/

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
        /// <param name="taskItem"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TaskItem>> PostTaskItem(TaskItem taskItem)
        {
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
        public async Task<ActionResult<TaskItem>> DeleteTaskItem(long id)
        {
            var taskItem = await _context.Tasks.FindAsync(id);
            if (taskItem == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(taskItem);
            await _context.SaveChangesAsync();

            return taskItem;
        }

        private bool TaskItemExists(long id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}
