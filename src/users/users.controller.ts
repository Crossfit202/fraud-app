import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service'; // Replace with the correct path to your service
import { Users } from './users'; // Replace with the correct path to your entity

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  // POST /users - Create a new user
  @Post()
  async create(@Body() data: Partial<Users>): Promise<Users> {
    return await this.userService.create(data);
  }

  // GET /users - Retrieve all users
  @Get()
  async findAll(): Promise<Users[]> {
    return await this.userService.findAll();
  }

  // GET /users/:id - Retrieve a single user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Users> {
    return await this.userService.findOne(id);
  }

  // PUT /users/:id - Update a user by ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Users>): Promise<Users> {
    return await this.userService.update(id, data);
  }

  // DELETE /users/:id - Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.userService.remove(id);
  }
}
