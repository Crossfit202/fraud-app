import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportStatusHistoryService } from './report_status_history.service';
import { Report_status_history } from './report_status_history';


@Controller('history')
export class ReportStatusHistoryController {
  constructor(private readonly ReportStatusHistoryService: ReportStatusHistoryService) { }

  // POST /users - Create a new user
  @Post()
  async create(@Body() data: Partial<Report_status_history>): Promise<Report_status_history> {
    return await this.ReportStatusHistoryService.create(data);
  }

  // GET /users - Retrieve all users
  @Get()
  async findAll(): Promise<Report_status_history[]> {
    return await this.ReportStatusHistoryService.findAll();
  }

  // GET /users/:id - Retrieve a single user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Report_status_history> {
    return await this.ReportStatusHistoryService.findOne(id);
  }

  // PUT /users/:id - Update a user by ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Report_status_history>): Promise<Report_status_history> {
    return await this.ReportStatusHistoryService.update(id, data);
  }

  // DELETE /users/:id - Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.ReportStatusHistoryService.remove(id);
  }
}
