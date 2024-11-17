import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from './reports';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { AuditLogModule } from '../audit_log/audit_log.module'; // Adjust path if needed
import { ReportAnnotationsModule } from '../report_annotations/report_annotations.module'; // Adjust path if needed
import { UsersModule } from '../users/users.module'; // Adjust path if needed
import { ReportStatusHistoryModule } from '../report_status_history/report_status_history.module'; // Adjust path if needed

@Module({
  imports: [
    TypeOrmModule.forFeature([Reports]),
    AuditLogModule,
    forwardRef(() => ReportAnnotationsModule),
    forwardRef(() => UsersModule), // Wrap UsersModule in forwardRef to handle circular dependency
    ReportStatusHistoryModule,
  ],
  exports: [TypeOrmModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule { }
