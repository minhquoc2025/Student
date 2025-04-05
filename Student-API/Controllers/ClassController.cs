using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentAPI._Services.Interfaces;
using StudentAPI.Models;

namespace StudentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : Controller
    {
        private readonly I_Class _services;
        public ClassController(I_Class service)
        {
            _services = service;
        }
        [HttpPost]
        public async Task<ActionResult> AddIteam(ClassItemDTO model)
        {
            return Ok(await _services.Add(model));
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(int id)
        {
            return Ok(await _services.Delete(id));
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem( ClassItemDTO model)
        {
            return Ok( await _services.Update(model));
        }
        [HttpGet]
        public async Task<ActionResult> GetAllItem()
        {
            return Ok(await _services.GetAll());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetIdItem(int id)
        {
            return Ok(await _services.GetbyId(id));
        }
    }
}