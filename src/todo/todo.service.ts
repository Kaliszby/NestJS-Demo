import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  addTodo(title: string, subtitle: string) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}`);
  }
}
