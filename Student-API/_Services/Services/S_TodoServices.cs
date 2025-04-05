
using System.Data.Common;
using Microsoft.CodeAnalysis.CSharp.Syntax;
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
                    IsComplete = x.IsComplete,
                    address = x.address,
                    class_id = x.class_id
                })
                .ToListAsync();

                return data;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<TodoItemDTO> GetId(long id)
        {
            try{
                var todoItem = await _context.TodoItems.FindAsync(id);
                if(todoItem == null) return null;
                var data = new TodoItemDTO
                {
                    Id = todoItem.Id,
                    Name = todoItem.Name,
                    IsComplete = todoItem.IsComplete,
                    address = todoItem.address,
                    class_id = todoItem.class_id
                };
                return  data;
            }
            catch (Exception){
                throw;
            }
        }

        public async Task<List<TodoItemDTO>> Getsearch(string name)
        {
            try{
                var searchname = await _context.TodoItems.Where(x => x.Name.ToLower().Contains(name.ToLower())).Select(x => new TodoItemDTO
                {
                    Id = x.Id,
                    Name =x.Name,
                    IsComplete = x.IsComplete,
                    address = x.address,
                    class_id = x.class_id
                }).ToListAsync();
                return searchname;
            } catch{
                throw;
            }
        }


        public async Task<bool> Update(TodoItemDTO model)
        {
            var todoItem = await _context.TodoItems.FindAsync(model.Id);
            if (todoItem == null)
                return false;

            todoItem.Name = model.Name;
            todoItem.IsComplete = model.IsComplete;
            todoItem.address = model.address;
            todoItem.class_id = model.class_id;
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }
    }
}