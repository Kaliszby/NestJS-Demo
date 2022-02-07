import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  todoArray: Todo[];

  addTodo(title: string, subtitle: string) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}`);
  }
}
