using Microsoft.EntityFrameworkCore;
using StudentAPI.Models;

namespace TodoApi.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {
        }
        public DbSet<TodoItem> TodoItems { get; set; } = null!;
        public DbSet<ClassItem> ClassItems { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>(x => x.HasKey(x => x.Id));
            base.OnModelCreating(modelBuilder);
        }
    }
}