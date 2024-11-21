import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report_status_history } from './report_status_history';
import { Reports } from '../reports/reports'; // Adjust the path as needed
import { ReportStatusHistoryService } from './report_status_history.service';
import { ReportStatusHistoryController } from './report_status_history.controller';
import { ReportsModule } from '../reports/reports.module'; // Import ReportsModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Report_status_history]),
    forwardRef(() => ReportsModule), // Resolve circular dependency
  ],
  providers: [ReportStatusHistoryService],
  controllers: [ReportStatusHistoryController],
  exports: [TypeOrmModule, ReportStatusHistoryService],
})
export class ReportStatusHistoryModule { }
