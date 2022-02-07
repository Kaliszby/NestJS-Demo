import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return [1, 2, 3, 4];
  }

  @Post()
  postTodos(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.todoService.addTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteTodoByID(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return `id: ${id}`;
  }
}
