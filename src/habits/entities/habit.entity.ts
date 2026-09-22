import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { User } from '../../users/entities/user.entity.js';
import { HabitLog } from './habit-log.entity.js';


export enum HabitFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  CUSTOM = 'custom',
}

@Entity('habits')
export class Habit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: HabitFrequency, default: HabitFrequency.DAILY })
  frequency: HabitFrequency;

  @Column({ default: 1 })
  targetCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.habits, { onDelete: 'CASCADE' })
  user: Relation<User>;

  @OneToMany(() => HabitLog, (log) => log.habit)
  logs: Relation<HabitLog>[];
}