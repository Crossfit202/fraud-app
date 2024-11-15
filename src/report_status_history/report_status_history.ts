import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Reports } from "src/reports/reports";

@Entity()
export class Report_status_history {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    status_id: number;

    @Column()
    old_status: string;

    @Column()
    new_status: string;

    @Column()
    changed_by: number;

    @Column()
    changed_date: Date;

    @ManyToOne(() => Reports, report => report.report_status_history)
    reports: Reports
}
