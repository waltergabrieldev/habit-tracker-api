import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity.js';
import { HabitLog } from './entities/habit-log.entity.js';
import { HabitsService } from './habits.service.js';
import { HabitsController } from './habits.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Habit, HabitLog])],
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}