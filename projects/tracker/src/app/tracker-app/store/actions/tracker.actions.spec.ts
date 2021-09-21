import * as fromTracker from './tracker.actions';

describe('tRACKERTrackers', () => {
  it('should return an action', () => {
    expect(fromTracker.loadTrackers().type).toBe('[Tracker] TRACKER Trackers');
  });
});
