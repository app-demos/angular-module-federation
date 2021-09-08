import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitsService } from '../../services/habits.service';

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

  constructor(private habitService: HabitsService, private router: Router) { }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;
    this.habitService.create(habit);
    this.router.navigateByUrl('/tracker');
  }

}
