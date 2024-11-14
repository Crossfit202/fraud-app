import { Module } from '@nestjs/common';
import { ReportAnnotationsService } from './report_annotations.service';
import { ReportAnnotationsController } from './report_annotations.controller';

@Module({
  controllers: [ReportAnnotationsController],
  providers: [ReportAnnotationsService],
})
export class ReportAnnotationsModule {}
