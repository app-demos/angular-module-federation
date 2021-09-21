import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Habit } from '../../store/models/habit';

import * as trackerSelectors from '../../store/selectors/tracker.selectors';
import * as trackerActions from '../../store/actions/tracker.actions';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.css']
})
export class HabitsListComponent {

  habits$: Observable<Habit[]>;

  constructor(private router: Router, private store: Store) {
    this.habits$ = this.store.select(trackerSelectors.selectHabits);
    this.store.dispatch(trackerActions.loadHabits())
  }

  editClick(habit: Habit, index: number) {
    this.router.navigateByUrl('/add');
  }

  deleteClick(index: number) {
    this.store.dispatch(trackerActions.deleteHabit({ index }));
  }

}
