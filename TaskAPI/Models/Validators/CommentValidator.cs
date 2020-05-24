using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models.Validators
{
    public class CommentValidator : AbstractValidator<Comment>
    {
        public CommentValidator()
        {
            RuleFor(x => x.Id)
                .NotNull().WithMessage("mandatory field");
            RuleFor(x => x.Text)
                .NotEmpty().WithMessage("Text should be empty");
        }
    }
}
