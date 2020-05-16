using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new TaskContext(serviceProvider.GetRequiredService<DbContextOptions<TaskContext>>()))
            {
                // Look for any tasks.
                if (context.Tasks.Any())
                {
                    return;   // DB table has been seeded
                }

                context.Tasks.AddRange(
                    new TaskItem
                    {
                        Title = "Dentist",
                        Description = "Baker Street 13, 12:00",
                        DateAdded = DateTime.Now,
                        DateDeadline = DateTime.Now,
                        Importance = ImportanceList.high,
                        Status = StatusList.open
                    },

                    new TaskItem
                    {
                        Title = "Presentation",
                        Description = "Conference X, 13 april 12:00",
                        DateAdded = DateTime.Now,
                        DateDeadline = DateTime.Now,
                        Importance = ImportanceList.high,
                        Status = StatusList.in_progress
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
