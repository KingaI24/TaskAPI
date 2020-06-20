using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskAPI.ViewModel;

namespace TaskAPI.Models
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<TaskItem, TaskCommentNumberVM>()
                .ForMember(task => task.NumberOfComments, opt => opt.MapFrom(src => src.Comments.Count()));

            CreateMap<TaskCreateVM,TaskItem>();
        }
    }
}
