using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskAPI.Models;

namespace TaskAPI.ViewModel
{
    public class TaskCommentNumberVM
    {
        public long Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateDeadline { get; set; }
        public ImportanceList Importance { get; set; }
        public StatusList Status { get; set; }
        public DateTime? DateClosure { get; set; }
        public long NumberOfComments { get; set; }
    }
}
