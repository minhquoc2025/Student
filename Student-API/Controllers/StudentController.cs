using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Student_API._Services.Interfaces;
using TodoApi.Models;

namespace TodoApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StudentController : ControllerBase
{
    private readonly I_TodoServices _services;

    public StudentController(I_TodoServices services)
    {
        _services = services;
    }

    // GET: api/TodoItems
    [HttpGet]
    public async Task<ActionResult> GetTodoItems()
    {
        return Ok(await _services.GetAll());
    }

    // GET: api/TodoItems/5
    // <snippet_GetByID>
    [HttpGet("{id}")]
    public async Task<ActionResult> GetTodoItem(long id)
    {
        return Ok(await _services.GetId(id));
    }
    // </snippet_GetByID>

    // PUT: api/TodoItems/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    // <snippet_Update>
    [HttpPut("{id}")]
    public async Task<ActionResult> PutTodoItem(long id, TodoItemDTO todoDTO)
    {
        return Ok(await _services.Update(todoDTO));
    }


    //GetSearch
    [HttpGet("search")]
    public async Task<ActionResult> SearchStudents(string name)
    {
        return Ok(await _services.Getsearch(name));
    }


    // POST: api/TodoItems
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    // <snippet_Create>
    [HttpPost]
    public async Task<ActionResult> PostTodoItem(TodoItemDTO model)
    {
        return Ok(await _services.Add(model));
    }
    // </snippet_Create>

    // DELETE: api/TodoItems/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodoItem(long id)
    {
        return Ok(await _services.Delete(id));
    }
}