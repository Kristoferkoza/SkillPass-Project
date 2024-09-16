import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donut } from './enitities/donut.entity';

@Injectable()
export class DonutsService {
  constructor(
    @InjectRepository(Donut)
    private donutsRepository: Repository<Donut>
  ) {}

  async findAll() {
    return this.donutsRepository.find();
  }
}
