using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskAPI.ViewModel;

namespace TaskAPI.Models.Validators
{
    public class TaskValidator : AbstractValidator<TaskCreateVM>
    {
        public TaskValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("mandatory field");
            RuleFor(x => x.Description)
                .Length(5, 20).WithMessage("Description should be from 5-20 characters");
            RuleFor(x => x.DateDeadline)
                .GreaterThanOrEqualTo(DateTime.Now).WithMessage("Deadline should not be below date added");
            RuleFor(x => x.DateDeadline)
                .LessThanOrEqualTo(DateTime.Now.AddDays(7)).WithMessage("High importance task should be completed within 7 days")
                .When(x => x.Importance == ImportanceList.high);
        }
    }
}
