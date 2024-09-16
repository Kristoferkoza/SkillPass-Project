import { Module } from '@nestjs/common';
import { DonutsController } from './donuts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donut } from './enitities/donut.entity';
import { DonutsService } from './donuts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Donut])],
  controllers: [DonutsController],
  providers: [DonutsService],
})
export class DonutsModule {}
