import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditLogModule } from './audit_log/audit_log.module';
import { ReportAnnotationsModule } from './report_annotations/report_annotations.module';
import { ReportStatusHistoryModule } from './report_status_history/report_status_history.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit_log } from './audit_log/audit_log';
import { Report_annotations } from './report_annotations/report_annotations';
import { Report_status_history } from './report_status_history/report_status_history';
import { Reports } from './reports/reports';
import { Users } from './users/users';
import { AuditLogController } from './audit_log/audit_log.controller';
import { ReportAnnotationsController } from './report_annotations/report_annotations.controller';
import { ReportStatusHistoryController } from './report_status_history/report_status_history.controller';
import { ReportsController } from './reports/reports.controller';
import { UsersController } from './users/users.controller';
import { AuditLogService } from './audit_log/audit_log.service';
import { ReportAnnotationsService } from './report_annotations/report_annotations.service';
import { ReportStatusHistoryService } from './report_status_history/report_status_history.service';
import { ReportsService } from './reports/reports.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'quokka-db-instance-1.cls8gcae0v9f.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Cro$$57jon',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [Audit_log, Report_annotations, Report_status_history, Reports, Users],
      synchronize: true
    }),

    AuditLogModule, ReportAnnotationsModule, ReportStatusHistoryModule, ReportsModule, UsersModule],
  controllers: [AppController, AuditLogController, ReportAnnotationsController, ReportStatusHistoryController, ReportsController, UsersController],
  providers: [AppService, AuditLogService, ReportAnnotationsService, ReportStatusHistoryService, ReportsService, UsersService],
})
export class AppModule { }
