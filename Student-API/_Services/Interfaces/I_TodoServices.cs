using TodoApi.Models;

namespace Student_API._Services.Interfaces
{
    public interface I_TodoServices
    {
        Task<List<TodoItemDTO>> GetAll();
        Task<List<TodoItemDTO>> GetId();
        Task<bool> Add(TodoItemDTO model);
        Task<bool> Update(TodoItemDTO model);
        Task<bool> Delete(long id);
    }
}