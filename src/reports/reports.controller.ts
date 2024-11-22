import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Reports } from 'src/reports/reports';


@Controller('reports')
export class ReportsController {
  constructor(private readonly ReportsService: ReportsService) { }

  // POST /users - Create a new user
  @Post()
  async create(@Body() data: Partial<Reports>): Promise<Reports> {
    return await this.ReportsService.create(data);
  }

  // GET /users - Retrieve all users
  @Get()
  async findAll(): Promise<Reports[]> {
    return await this.ReportsService.findAll();
  }

  // GET /users/:id - Retrieve a single user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Reports> {
    return await this.ReportsService.findOne(id);
  }

  @Get('ticket/:id')
  async findOneByTicket(@Param('id') id: string): Promise<Reports> {
    return await this.ReportsService.findOneByTicket(id);
  }

  // PUT /users/:id - Update a user by ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Reports>): Promise<Reports> {
    return await this.ReportsService.update(id, data);
  }

  // DELETE /users/:id - Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.ReportsService.remove(id);
  }
}
