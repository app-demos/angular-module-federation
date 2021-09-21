import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, delay } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TrackerActions from '../actions/tracker.actions';
import { dummyHabits } from '../models/habit';


@Injectable()
export class TrackerEffects {

  loadTrackers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrackerActions.loadHabits),
      concatMap(() =>
        of(dummyHabits).pipe(
          delay(Math.random() * 2000),
          map(data => TrackerActions.loadTrackersSuccess({ data }))
        )
      ));
  });



  constructor(private actions$: Actions) { }

}
