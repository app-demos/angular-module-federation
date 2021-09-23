import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, delay } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TodoActions from '../actions/todos.actions';
import { dummyTodos } from '../models/todo';


@Injectable()
export class TodosEffects {

  loadTrackers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() =>
        of(dummyTodos).pipe(
          delay(Math.random() * 2000),
          map(data => TodoActions.loadTodosSuccess({ data }))
        )
      ));
  });



  constructor(private actions$: Actions) { }

}
