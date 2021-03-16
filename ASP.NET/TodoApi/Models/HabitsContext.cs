using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace TodoApi.Models
{
    public class HabitsContext : DbContext
    {
        public HabitsContext(DbContextOptions<HabitsContext> options)
            : base(options)
        {

        }
        public DbSet<Habits> Habits { get; set; }
    }
}
