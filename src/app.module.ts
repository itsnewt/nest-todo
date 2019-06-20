import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { todoProviders } from './todo.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...todoProviders],
})
export class AppModule {}
