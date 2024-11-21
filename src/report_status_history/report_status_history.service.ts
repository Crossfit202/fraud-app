import { Injectable, NotFoundException } from '@nestjs/common';
import { Report_status_history } from './report_status_history';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reports } from '../reports/reports'; // Adjust the path based on your project structure

@Injectable()
export class ReportStatusHistoryService {
    constructor(
        @InjectRepository(Report_status_history)
        private readonly reportStatusHistoryRepository: Repository<Report_status_history>,
        @InjectRepository(Reports)
        private readonly reportsRepository: Repository<Reports>, // Add repository for Reports
    ) { }

    // CREATE
    async create(data: Partial<Report_status_history>): Promise<Report_status_history> {
        const newStatus = this.reportStatusHistoryRepository.create(data); // Creates a new entity instance
        return await this.reportStatusHistoryRepository.save(newStatus); // Persists it to the database
    }

    // READ ALL
    // Service
    async findAll(): Promise<Report_status_history[]> {
        return await this.reportStatusHistoryRepository.find({
            relations: ['report'], // Load the related report entity
        });
    }


    // READ ONE
    async findOne(id: number): Promise<Report_status_history> {
        const status = await this.reportStatusHistoryRepository.findOne({ where: { status_id: id } });
        if (!status) {
            throw new NotFoundException(`Status with ID ${id} not found`);
        }
        return status;
    }

    async findAllByReportId(report_id: number): Promise<Report_status_history[]> {
        return await this.reportStatusHistoryRepository.find({
            where: { report: { report_id } }, // Correctly reference the report relationship
            relations: ['report'], // Load the related report if needed
        });
    }


    // UPDATE
    async update(id: number, data: Partial<Report_status_history>): Promise<Report_status_history> {
        const status = await this.findOne(id);
        Object.assign(status, data);
        return await this.reportStatusHistoryRepository.save(status);
    }

    // DELETE
    async remove(id: number): Promise<void> {
        const status = await this.findOne(id);
        await this.reportStatusHistoryRepository.remove(status);
    }
}
