import { Controller, Param, Body, Get, Post, Put } from '@nestjs/common';
import { AppService, Todo } from './app.service';

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
}
