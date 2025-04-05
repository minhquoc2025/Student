using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Students.Migrations
{
    /// <inheritdoc />
    public partial class ClassTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Secret",
                table: "TodoItems",
                newName: "address");

            migrationBuilder.AddColumn<int>(
                name: "class_id",
                table: "TodoItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ClassItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassItems", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassItems");

            migrationBuilder.DropColumn(
                name: "class_id",
                table: "TodoItems");

            migrationBuilder.RenameColumn(
                name: "address",
                table: "TodoItems",
                newName: "Secret");
        }
    }
}
