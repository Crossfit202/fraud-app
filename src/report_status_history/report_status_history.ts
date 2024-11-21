import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(() => Reports, (report) => report.report_status_history)
    @JoinColumn({ name: "report_id" }) // Explicitly define the foreign key column
    reports: Reports;
}
