using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudentAPI._Services.Interfaces;
using StudentAPI.Models;
using TodoApi.Models;

namespace StudentAPI._Services.Services
{
    public class S_Class : I_Class
    {
        public TodoContext _context;
        public S_Class(TodoContext context)
        {
            _context = context;
        }

        public async Task<bool> Add(ClassItemDTO model)
        {
            var classItem = new ClassItem
            {
                Name = model.Name
            };
            _context.ClassItems.Add(classItem);
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }
        public async Task<bool> Delete(int id)
        {
            var classItem = await _context.ClassItems.FindAsync(id);
            if (classItem == null) return false;
            _context.ClassItems.Remove(classItem);
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }
        public async Task<bool> Update(ClassItemDTO model)
        {
            var classItem = await _context.ClassItems.FindAsync(model.Id);
            if (classItem == null) return false;
            classItem.Name = model.Name;
            int result = await _context.SaveChangesAsync();
            return result > 0 ? true : false;
        }
        public async Task<List<ClassItemDTO>> GetAll()
        {
            try
            {
                var data = await _context.ClassItems
                .Select(x => new ClassItemDTO
                {
                    Id = x.Id,
                    Name = x.Name,
                })
                .ToListAsync();
                return data;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task<ClassItemDTO> GetbyId(int id)
        {
            try
            {
                var classItem = await _context.ClassItems.FindAsync(id);
                var data = new ClassItemDTO
                {
                    Id = classItem.Id,
                    Name = classItem.Name
                };
                return data;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}