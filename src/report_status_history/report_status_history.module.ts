import { forwardRef, Module } from '@nestjs/common';
import { ReportStatusHistoryService } from './report_status_history.service';
import { ReportStatusHistoryController } from './report_status_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report_status_history } from './report_status_history';
import { AuditLogModule } from 'src/audit_log/audit_log.module';
import { ReportAnnotationsModule } from 'src/report_annotations/report_annotations.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Report_status_history]),
    AuditLogModule,
    ReportStatusHistoryModule,
  ],
  exports: [TypeOrmModule],
  controllers: [ReportStatusHistoryController],
  providers: [ReportStatusHistoryService],
})
export class ReportStatusHistoryModule { }
