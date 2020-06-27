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
                if (context.Tasks.Count() >= 50)
                {
                    return;   // DB table has been seeded
                }

                for (int i = 1; i<=50; i++)
                {
                    context.Tasks.Add(
                    new TaskItem
                    {
                        Title = $"Title-{i}",
                        Description = $"Description-{i}",
                        DateAdded = DateTime.Now,
                        DateDeadline = DateTime.Now,
                        Importance = ImportanceList.low,
                        Status = StatusList.open
                    });
                }
                context.SaveChanges();
            }
        }
    }
}
