import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

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
}
