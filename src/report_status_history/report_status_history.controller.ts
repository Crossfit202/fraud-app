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

  // GET 
  // Controller
  @Get()
  async findAll(): Promise<Report_status_history[]> {
    return await this.ReportStatusHistoryService.findAll();
  }


  // GET 
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Report_status_history> {
    return await this.ReportStatusHistoryService.findOne(id);
  }

  // PUT 
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Report_status_history>): Promise<Report_status_history> {
    return await this.ReportStatusHistoryService.update(id, data);
  }

  // DELETE
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.ReportStatusHistoryService.remove(id);
  }


  // GET /history/report/:report_id - Retrieve all report status history entries for a specific report ID
  @Get('report/:report_id')
  async getStatusHistoryByReportId(
    @Param('report_id') report_id: number,
  ): Promise<Report_status_history[]> {
    return await this.ReportStatusHistoryService.findAllByReportId(report_id);
  }



}
