using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BharatLaw.Models;
using BharatLaw.Services;

namespace BharatLaw
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResearchBooksController : ControllerBase
    {
        private readonly ResearchBookDbContext _context;
        private readonly ResearchBookService _researchBookService;

        public ResearchBooksController(ResearchBookDbContext context, ResearchBookService researchBookService)
        {
            _context = context;
            _researchBookService = researchBookService; // Inject the service
        }

        // GET: api/ResearchBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResearchBook>>> GetResearchBooks()
        {
            return await _context.ResearchBooks.ToListAsync();
        }

        // GET: api/ResearchBooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ResearchBook>> GetResearchBook(int id)
        {
            var researchBook = await _context.ResearchBooks.FindAsync(id);

            if (researchBook == null)
            {
                return NotFound();
            }

            return researchBook;
        }

        // PUT: api/ResearchBooks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResearchBook(int id, ResearchBook researchBook)
        {
            if (id != researchBook.id)
            {
                return BadRequest();
            }

            _context.Entry(researchBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResearchBookExists(id))
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

        // POST: api/ResearchBooks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{userId}")]
        public async Task<ActionResult<ResearchBook>> PostResearchBook(int userId, [FromBody] ResearchBook researchBook)
        {
            var user = await _context.Users.FindAsync(userId);

            if (user == null)
            {
                return NotFound(new { Message = "User not found!" });
            }

            // Use the service to create the research book
            _researchBookService.CreateResearchBook(user, researchBook);

            return CreatedAtAction("GetResearchBook", new { id = researchBook.id }, researchBook);
        }



        // DELETE: api/ResearchBooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResearchBook(int id)
        {
            var researchBook = await _context.ResearchBooks.FindAsync(id);
            if (researchBook == null)
            {
                return NotFound();
            }

            _context.ResearchBooks.Remove(researchBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ResearchBookExists(int id)
        {
            return _context.ResearchBooks.Any(e => e.id == id);
        }

        
    }
}
