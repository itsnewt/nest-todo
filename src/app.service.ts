import { Injectable } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}

@Injectable()
export class AppService {
  todos: Array<Todo> = [
    {
      id: 1,
      title: 'Woohoo'
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'This is utilizing all of the fields!'
    }
  ]

  getTodos() {
    return this.todos;
  }

  getTodo(id: number): Todo {
    return this.todos.filter(todo => todo.id == id);
  }
}
