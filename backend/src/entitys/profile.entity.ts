import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    membername: string;

    @Column({ nullable: true })
    photo: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    membergroup: string;

    @Column({ nullable: true })
    department: string;

    @Column()
    memberstatus: string;
}