import { Body, Controller, Get, Post } from '@nestjs/common';
import { DonutsService } from './donuts.service';

@Controller('donuts')
export class DonutsController {
  constructor(private readonly donutsService: DonutsService) {}

  @Get()
  findAll() {
    return this.donutsService.findAll();
  }
}
