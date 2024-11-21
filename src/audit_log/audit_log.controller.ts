import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuditLogService } from './audit_log.service';
import { Audit_log } from './audit_log';

@Controller('audit')
export class AuditLogController {
  reportAnnotationsService: any;
  constructor(private readonly auditLogService: AuditLogService) { }

  // POST /audit - Create a new audit log
  @Post()
  async create(@Body() data: Partial<Audit_log>): Promise<Audit_log> {
    return await this.auditLogService.create(data);
  }

  // GET /audit - Retrieve all audit logs
  @Get()
  async findAll(): Promise<Audit_log[]> {
    return await this.auditLogService.findAll();
  }

  // GET /audit/:id - Retrieve a single audit log by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Audit_log> {
    return await this.auditLogService.findOne(id);
  }

  // PUT /audit/:id - Update a audit log by ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Audit_log>): Promise<Audit_log> {
    return await this.auditLogService.update(id, data);
  }

  // DELETE /audit/:id - Delete a audit by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.auditLogService.remove(id);
  }

  @Get('/user/:id')
  async findAllByUserId(@Param('id') id: string): Promise<Audit_log[]> {
    const userId = parseInt(id, 10); // Convert string to number
    if (isNaN(userId)) {
      throw new BadRequestException('Invalid user ID');
    }
    return await this.auditLogService.findAllByUserId(userId);
  }

}
