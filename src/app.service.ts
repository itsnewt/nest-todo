import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('TODO_MODEL')
    private readonly todos: Model<Todo>
  ) {}

  async getTodos(): Promise<Todo[]> {
    return await this.todos.find(null, '-_id');
  }

  async getTodo(id: number): Promise<Todo> {
    return await this.todos.findOne({ id }, '-_id');
  }

  async createTodo(todo: Todo): Promise<Todo> {
    // @ts-ignore
    let finalTodo: Todo = {
      id: await this.todos.find().exec().then(todos => todos.length+1),
      title: todo.title
    };

    if (todo.description) {
      finalTodo['description'] = todo.description;
    }
    
    await this.todos.create(finalTodo);
    return finalTodo;
  }

  async updateTodo(todo: Todo): Promise<Object> {
    const todoData = await this.todos.findOne({ id: todo.id }, '-_id');

    await this.todos.updateOne({ id: todo.id }, {...todo});

    return {
      message: 'Successfully updated.',
      oldData: todoData,
      newData: todo
    };
  }

  async deleteTodo(id: number): Promise<Object> {
    const todo = await this.todos.findOne({ id }, '-_id');
    await todo.remove();

    return {
      message: 'Successfully deleted.',
      todo
    };
  }
}
