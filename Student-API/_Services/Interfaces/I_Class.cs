using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StudentAPI.Models;

namespace StudentAPI._Services.Interfaces
{
    public interface I_Class
    {
        Task<bool> Add(ClassItemDTO model);
        Task<bool> Delete(int id);
        Task<bool> Update(ClassItemDTO model);
        Task<List<ClassItemDTO>> GetAll();
        Task<ClassItemDTO> GetbyId(int id);
    }
}