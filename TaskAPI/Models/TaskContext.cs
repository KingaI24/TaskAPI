using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TaskAPI.Models
{
    public class TaskContext : IdentityDbContext
    {
        public DbSet<TaskItem> Tasks { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public TaskContext(DbContextOptions<TaskContext> options)
            : base(options)
        {
        }
    }
}
