using TodoApi.Models;

namespace Student_API._Services.Interfaces
{
    public interface I_TodoServices
    {
        Task<List<TodoItemDTO>> GetAll();
        Task<TodoItemDTO> GetId(long id);
        Task<List<TodoItemDTO>> Getsearch(string name);
        Task<bool> Add(TodoItemDTO model);
        Task<bool> Update(TodoItemDTO model);
        Task<bool> Delete(long id);
    }
}