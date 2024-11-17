import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportAnnotationsService } from './report_annotations.service';
import { Report_annotations } from './report_annotations';

@Controller('annotations')
export class ReportAnnotationsController {
  constructor(private readonly reportAnnotationsService: ReportAnnotationsService) { }

  // POST /users - Create a new user
  @Post()
  async create(@Body() data: Partial<Report_annotations>): Promise<Report_annotations> {
    return await this.reportAnnotationsService.create(data);
  }

  // GET /users - Retrieve all users
  @Get()
  async findAll(): Promise<Report_annotations[]> {
    return await this.reportAnnotationsService.findAll();
  }

  // GET /users/:id - Retrieve a single user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Report_annotations> {
    return await this.reportAnnotationsService.findOne(id);
  }

  // PUT /users/:id - Update a user by ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Report_annotations>): Promise<Report_annotations> {
    return await this.reportAnnotationsService.update(id, data);
  }

  // DELETE /users/:id - Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.reportAnnotationsService.remove(id);
  }
}
