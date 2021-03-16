using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitsController : ControllerBase
    {
        private readonly HabitsContext _context;

        public HabitsController(HabitsContext context)
        {
            _context = context;
        }

        // GET: api/Habits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Habits>>> GetHabits()
        {
            return await _context.Habits.ToListAsync();
        }

        // GET: api/Habits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Habits>> GetHabits(int id)
        {
            var habits = await _context.Habits.FindAsync(id);

            if (habits == null)
            {
                return NotFound();
            }

            return habits;
        }

        // PUT: api/Habits/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHabits(int id, Habits habits)
        {
            if (id != habits.Id)
            {
                return BadRequest();
            }

            _context.Entry(habits).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HabitsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Habits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Habits>> PostHabits(Habits habits)
        {
            _context.Habits.Add(habits);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHabits", new { id = habits.Id }, habits);
        }

        // DELETE: api/Habits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabits(int id)
        {
            var habits = await _context.Habits.FindAsync(id);
            if (habits == null)
            {
                return NotFound();
            }

            _context.Habits.Remove(habits);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HabitsExists(int id)
        {
            return _context.Habits.Any(e => e.Id == id);
        }
    }
}
