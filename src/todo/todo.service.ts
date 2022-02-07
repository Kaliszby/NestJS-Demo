import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuidv4();
    todo.title = title;
    todo.subtitle = subtitle;

    this.todoArray.push(todo);
  }

  getTodos() {
    return this.todoArray;
  }

  removeTodoByID(id: string) {
    const searchById = this.todoArray.find((item) => item.id === id);
    if (!searchById) {
      throw new NotFoundException(`Todo with ${id} not found!`);
    }
    this.todoArray = this.todoArray.filter((item) => {
      return item.id !== id;
    });
    return this.todoArray;
  }
}
