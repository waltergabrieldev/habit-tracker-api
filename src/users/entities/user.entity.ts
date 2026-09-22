import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { Habit } from '../../habits/entities/habit.entity.js';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Habit, (habit) => habit.user)
  habits: Relation<Habit>[];
}