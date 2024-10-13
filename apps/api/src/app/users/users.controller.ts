import { Body, Controller, Get, Post, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './enitities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('find-by-email')
  async findByEmail(@Query('email') email: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    return user;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
