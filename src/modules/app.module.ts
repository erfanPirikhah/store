import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'src/config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig()), ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
