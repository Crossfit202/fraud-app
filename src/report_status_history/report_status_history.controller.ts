import { Controller } from '@nestjs/common';
import { ReportStatusHistoryService } from './report_status_history.service';

@Controller('report-status-history')
export class ReportStatusHistoryController {
  constructor(private readonly reportStatusHistoryService: ReportStatusHistoryService) {}
}
