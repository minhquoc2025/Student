
using Microsoft.EntityFrameworkCore;
using Student_API._Services.Interfaces;
using TodoApi.Models;

namespace Student_API._Services.Services
{
    public class S_TodoServices : I_TodoServices
    {
        private readonly TodoContext _context;

        public S_TodoServices(TodoContext context)
        {
            _context = context;
        }

        public async Task<bool> Add(TodoItemDTO model)
        {
            var todoItem = new TodoItem
            {
                IsComplete = model.IsComplete,
                Name = model.Name
            };

            _context.TodoItems.Add(todoItem);
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }

        public async Task<bool> Delete(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
                return false;

            _context.TodoItems.Remove(todoItem);
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }

        public async Task<List<TodoItemDTO>> GetAll()
        {
            try
            {
                var data = await _context.TodoItems
                .Select(x => new TodoItemDTO
                {
                    Id = x.Id,
                    Name = x.Name,
                    IsComplete = x.IsComplete
                })
                .ToListAsync();

                return data;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<TodoItemDTO> GetId(TodoItemDTO model)
        {
            var todoItem = await _context.TodoItems.FindAsync(model.Id);
            if(todoItem == null)
                return null;
            return new TodoItemDTO{
                ID = todoItem.Id,
                Name = todoItem.Name,
                Iscomplete = todoItem.IsComplete
            };
        }
        public async Task<bool> Update(TodoItemDTO model)
        {
            var todoItem = await _context.TodoItems.FindAsync(model.Id);
            if (todoItem == null)
                return false;

            todoItem.Name = model.Name;
            todoItem.IsComplete = model.IsComplete;
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }
    }
}