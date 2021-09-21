import * as fromTracker from '../reducers/tracker.reducer';
import { selectTrackerState } from './tracker.selectors';

describe('Tracker Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTrackerState({
      [fromTracker.trackerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
