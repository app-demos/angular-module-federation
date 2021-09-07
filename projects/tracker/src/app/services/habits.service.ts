import { Injectable } from "@angular/core";

import { Habit } from "../models/habit";

@Injectable({ providedIn: 'root' })
export class HabitsService {
  private _habits: Habit[] = [{
    name: '15 Minute Walk',
    frequency: 'Daily',
    description:
      'Getting outside and enjoying the fresh air helps me clear my head and improves my mood.',
  },
  {
    name: 'Weed the Garden',
    frequency: 'Weekly',
    description:
      'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
  }];

  list(): Habit[] {
    return this._habits;
  }

  create(habit: Habit): void {
    this._habits.push(habit);
  }

  update(habit: Habit): void {
    throw new Error('Not implemented');
  }

  delete(index: number): void {
    this._habits.splice(index, 1);
  }
}