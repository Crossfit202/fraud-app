import { Module } from '@nestjs/common';
import { ReportStatusHistoryService } from './report_status_history.service';
import { ReportStatusHistoryController } from './report_status_history.controller';

@Module({
  controllers: [ReportStatusHistoryController],
  providers: [ReportStatusHistoryService],
})
export class ReportStatusHistoryModule {}
