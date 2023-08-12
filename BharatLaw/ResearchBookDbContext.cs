using BharatLaw.Models;
using Microsoft.EntityFrameworkCore;

namespace BharatLaw
{
    public class ResearchBookDbContext: DbContext
    {
        public ResearchBookDbContext(DbContextOptions<ResearchBookDbContext> options)
           : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<ResearchBook> ResearchBooks { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<ResearchBook>()
        //        .HasOne(rb => rb.User)
        //        .WithMany(u => u.ResearchBooks)
        //        .HasForeignKey(rb => rb.UserId);
        //}
    }
}
   