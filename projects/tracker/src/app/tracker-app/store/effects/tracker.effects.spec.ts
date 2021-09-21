import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TrackerEffects } from './tracker.effects';

describe('TrackerEffects', () => {
  let actions$: Observable<any>;
  let effects: TrackerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrackerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TrackerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
