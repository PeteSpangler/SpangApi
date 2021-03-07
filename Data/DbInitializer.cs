using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class DbInitializer
    {
        public static void Initialize(HabitsContext context)
        {
            context.Database.EnsureCreated();

            if (context.Habits.Any())
            {
                return;
            }

            var habits = new Habits[]
            {
                new Habits{Created=DateTime.Parse("2021-01-01"),DailyHabit="Meditate for at least 10 minutes",Intention="This is a positive habit",Feedback="I have not done this before and will stack it with my morning coffee routine."},
                new Habits{Created=DateTime.Parse("2021-01-07"),DailyHabit="Go for a 5k run.",Intention="This is a positive habit",Feedback="I have not done this before and will stack it with putting my shoes by the door."},
                new Habits{Created=DateTime.Parse("2021-01-02"),DailyHabit="Watched 2 hours of YouTube",Intention="This is a negative habit",Feedback="I need to stop myself from watching trash."},
                new Habits{Created=DateTime.Parse("2021-02-03"),DailyHabit="Make lunch instead of buying it.",Intention="This is a positive habit",Feedback="I have not done this before and will stack it with putting bread out on the counter with PB."},
                new Habits{Created=DateTime.Parse("2021-02-05"),DailyHabit="Checking Twitter for American Politic news!",Intention="This is a negative habit",Feedback="I can't be spending all this time doing this."},
                new Habits{Created=DateTime.Parse("2021-02-11"),DailyHabit="Only drinking 3 bottles of water a day.",Intention="This is a neutral habit",Feedback="I need to drink more, should reward myself for doing so."},
                new Habits{Created=DateTime.Parse("2021-02-13"),DailyHabit="Yoga for 30 minutes a day!",Intention="This is a positive habit",Feedback="I have not done this before and will stack it with my after lunch routine."},
                new Habits{Created=DateTime.Parse("2021-02-21"),DailyHabit="Not helping with the dishes.",Intention="This is a negative habit",Feedback="I need to be better about this and will stack my dishes in the sink after each meal."},
                new Habits{Created=DateTime.Parse("2021-02-22"),DailyHabit="Turn off all screens and read a book until bedtime.",Intention="This is a positive habit",Feedback="I have not done this before and will stack it with my evening post dinner routine."},
            };
            foreach (Habits h in habits)
            {
                context.Habits.Add(h);
            }
            context.SaveChanges();
        }
    }
}
