import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Habit } from '../../store/models/habit';
import * as trackerActions from '../../store/actions/tracker.actions';
@Component({
  selector: 'app-habits-form',
  templateUrl: './habits-form.component.html',
  styleUrls: ['./habits-form.component.css']
})
export class HabitsFormComponent {

  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl('Daily'),
    description: new FormControl(''),
  });

  adding = true;
  editing = false;

  constructor(private router: Router, private store: Store) { }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;
    this.store.dispatch(trackerActions.addHabit({ habit }))
    this.router.navigateByUrl('/tracker');
  }

}
