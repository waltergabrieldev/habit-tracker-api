import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { Habit } from './habit.entity.js';

@Entity('habit_logs')
export class HabitLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  completedAt: Date;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => Habit, (habit) => habit.logs, { onDelete: 'CASCADE' })
  habit: Relation<Habit>;
}