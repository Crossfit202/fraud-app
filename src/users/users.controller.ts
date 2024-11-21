import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users';
import { Reports } from 'src/reports/reports';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { } // Use "userService"

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

  // Get all reports assigned to a user
  @Get(':id/assigned')
  async getReportsAssignedToUser(@Param('id') id: number): Promise<Reports[]> {
    return await this.userService.findReportsAssignedToUser(id); // Corrected from usersService to userService
  }

  // Get all reports created by a user
  @Get(':id/created')
  async getReportsCreatedByUser(@Param('id') id: number): Promise<Reports[]> {
    return await this.userService.findReportsCreatedByUser(id); // Corrected from usersService to userService
  }
}
