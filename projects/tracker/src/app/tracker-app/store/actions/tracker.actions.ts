import { createAction, props } from '@ngrx/store';
import { Habit } from '../models/habit';

export const loadHabits = createAction(
  '[Tracker] LOAD HABITS'
);

export const loadTrackersSuccess = createAction(
  '[Tracker] LOAD HABITS SUCCESS',
  props<{ data: any }>()
);

export const loadTrackersFailure = createAction(
  '[Tracker] LOAD HABITS FAILURE',
  props<{ error: any }>()
);

export const deleteHabit = createAction(
  '[Tracker] DELETE HABIT',
  props<{ index: number }>()
);

export const addHabit = createAction(
  '[Tracker] ADD HABIT',
  props<{ habit: Habit }>()
);


