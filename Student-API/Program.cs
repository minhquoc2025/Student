using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Student_API._Services.Interfaces;
using Student_API._Services.Services;
using StudentAPI._Services.Interfaces;
using StudentAPI._Services.Services;
using TodoApi.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();



builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAngular",
            PolicyServiceCollectionExtensions => PolicyServiceCollectionExtensions.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());
    });

// builder.Services.AddDbContext<TodoContext>(opt =>
//     //opt.UseInMemoryDatabase("TodoList"));
//     opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<I_TodoServices, S_TodoServices>();
builder.Services.AddScoped<I_Class, S_Class>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUi(options =>
    {
        options.DocumentPath = "/openapi/v1.json";
    });
}

// exception

// HSTS

app.UseCors("AllowAngular");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
