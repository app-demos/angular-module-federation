import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTracker from '../reducers/tracker.reducer';

export const selectTrackerState = createFeatureSelector<fromTracker.State>(
  fromTracker.trackerFeatureKey
);


export const selectHabits = createSelector(
  selectTrackerState,
  (state) => state.habits
);