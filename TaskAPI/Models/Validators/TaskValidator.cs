using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models.Validators
{
    public class TaskValidator : AbstractValidator<TaskItem>
    {
        public TaskValidator()
        {
            RuleFor(x => x.Id)
                .NotNull().WithMessage("mandatory field");
            RuleFor(x => x.Description)
                .Length(0, 50).WithMessage("Description should be from 0-10 characters");
            RuleFor(x => x.DateAdded)
                .LessThan(DateTime.Now).WithMessage("Trying to add past date");
            RuleFor(x => x.DateDeadline)
                .GreaterThanOrEqualTo(x => x.DateAdded).WithMessage("Deadline should not be below date added");
           //RuleFor(x => x.DateClosure)
           //     .NotNull().WithMessage("DateClosure should be set for closed tasks")
           //     .When(x => x.Status == StatusList.closed);
           // RuleFor(x => x.DateClosure)
           //     .Null().WithMessage("DateClosure is not set when task still open/in progress")
           //    .When(x => x.Status == StatusList.open || x.Status == StatusList.in_progress);
        }
    }
}
