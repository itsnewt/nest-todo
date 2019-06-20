import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './interfaces/todo.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: number) {
    return this.appService.getTodo(id);
  }

  @Post()
  createTodo(@Body() todo: Todo) {
    return this.appService.createTodo(todo);
  }

  @Put()
  updateTodo(@Body() todo: Todo) {
    return this.appService.updateTodo(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.appService.deleteTodo(id);
  }
}
