import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getTodos() {
    return [1, 2, 3, 4];
  }

  @Post()
  postTodos(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
  }
}
