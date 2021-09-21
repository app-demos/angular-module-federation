import { Action, createReducer, on } from '@ngrx/store';
import { Habit } from '../models/habit';
import * as TrackerActions from '../actions/tracker.actions';

export const trackerFeatureKey = 'tracker';

export interface State {
  habits: Habit[];
}

export const initialState: State = {
  habits: []
};


export const reducer = createReducer(
  initialState,
  on(TrackerActions.loadHabits, (state, action) => {
    return state;
  }),
  on(TrackerActions.loadTrackersSuccess, (state, action) => {
    return !state.habits.length ? { ...state, habits: action.data } : state;
  }),
  on(TrackerActions.loadTrackersFailure, (state, action) => state),
  on(TrackerActions.deleteHabit, (state, action) => {
    const habits = [...state.habits];
    habits.splice(action.index, 1);
    return { ...state, habits };
  }),
  on(TrackerActions.addHabit, (state, action) => {
    const habits = [...state.habits];
    habits.push(action.habit);
    return { ...state, habits };
  }),
);

