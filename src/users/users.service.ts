import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users'; // Replace with the correct path to your entity
import { Audit_log } from 'src/audit_log/audit_log';
import { Reports } from 'src/reports/reports';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,

        @InjectRepository(Audit_log)
        private readonly auditLogRepository: Repository<Audit_log>,

        @InjectRepository(Reports)
        private readonly reportsRepository: Repository<Reports>,
    ) { }

    // CREATE
    async create(data: Partial<Users>): Promise<Users> {
        const newUser = this.userRepository.create(data); // Creates a new entity instance
        return await this.userRepository.save(newUser); // Persists it to the database
    }

    // READ ALL
    async findAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }

    // READ ONE
    async findOne(id: number): Promise<Users> {
        const user = await this.userRepository.findOne({ where: { user_id: id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    // UPDATE
    async update(id: number, data: Partial<Users>): Promise<Users> {
        const user = await this.findOne(id); // Ensure the user exists
        Object.assign(user, data); // Merge updates into the existing entity
        return await this.userRepository.save(user);
    }

    // DELETE
    async remove(id: number): Promise<void> {
        const user = await this.findOne(id); // Ensure the user exists
        await this.userRepository.remove(user); // Delete the user from the database
    }

    // GET ALL AUDIT LOGS FOR A USER
    async findAuditLogsForUser(userId: number): Promise<Audit_log[]> {
        return await this.auditLogRepository.find({ where: { user_id: userId } });
    }

    // Method to fetch reports assigned to a user
    async findReportsAssignedToUser(userId: number): Promise<Reports[]> {
        return await this.reportsRepository.find({
            where: { users: { user_id: userId } },
            relations: ['users'], // Ensures the user relationship is loaded
        });
    }


    // GET ALL REPORTS CREATED BY A USER
    async findReportsCreatedByUser(userId: number): Promise<Reports[]> {
        return await this.reportsRepository.find({
            where: { created_by: userId },
            relations: ['users'], // Ensures the user relationship is loaded
        });
    }

}