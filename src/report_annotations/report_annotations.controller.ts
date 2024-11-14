import { Controller } from '@nestjs/common';
import { ReportAnnotationsService } from './report_annotations.service';

@Controller('report-annotations')
export class ReportAnnotationsController {
  constructor(private readonly reportAnnotationsService: ReportAnnotationsService) {}
}
