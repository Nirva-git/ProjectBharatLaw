using Microsoft.EntityFrameworkCore;
using BharatLaw.Models;

namespace BharatLaw.Services
{
    public class ResearchBookService
    {
        private readonly ResearchBookDbContext _context;

        public ResearchBookService(ResearchBookDbContext context)
        {
            _context = context;
        }

        //public void CreateResearchBook(User user, ResearchBook researchBook)
        //{
        //    user.ResearchBooks.Add(researchBook);
        //    _context.SaveChanges();
        //}
    }
}
