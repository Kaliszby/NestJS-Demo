import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = '1';
    todo.title = title;
    todo.subtitle = subtitle;

    this.todoArray.push(todo);
  }

  getTodos() {
    return this.todoArray;
  }
}
