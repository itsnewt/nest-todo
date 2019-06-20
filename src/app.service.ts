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

  getTodo(id: number) {
    return this.todos.filter(todo => todo.id == id);
  }

  createTodo(todo: Todo): Array<Todo> {
    return this.todos = [...this.todos, {...todo}];
  }

  updateTodo(todo: Todo) {
    return this.todos = this.todos.map(t => t.id === todo.id ? {...todo} : t);
  }
}
