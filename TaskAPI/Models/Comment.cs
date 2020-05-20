using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models
{
    public class Comment
    {
        public long Id { get; set; }
        [MinLength(5, ErrorMessage = "Text must have at most 5 characters.")]
        public string Text { get; set; }
        public bool Important { get; set; }
        public TaskItem Task { get; set; }
        public long TaskId { get; set; }

    }
}
