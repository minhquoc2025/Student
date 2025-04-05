namespace TodoApi.Models;

public class TodoItem
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public string? address { get; set; }
    public int class_id { get; set; }
    public bool IsComplete { get; set; }
}