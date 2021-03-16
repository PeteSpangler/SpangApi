using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class Habits
    {
        public int Id { get; set; }

        [DataType(DataType.Date)]
        public DateTime Created { get; set; }
        [Display(Name = "Daily Habit")]
        public string DailyHabit { get; set; }
        [Display(Name = "Is the intention of this habit positive, negative or neutral?")]
        public string Intention { get; set; }
        public string Feedback { get; set; }
    }
}
