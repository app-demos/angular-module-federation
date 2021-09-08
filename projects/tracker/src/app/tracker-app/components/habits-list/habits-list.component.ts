import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitsService } from '../../services/habits.service';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.css']
})
export class HabitsListComponent {

  constructor(public habitService: HabitsService, private router: Router) { }

  editClick(habit: Habit, index: number) {
    this.router.navigateByUrl('/add');
    // this.habitForm.patchValue({
    //   name: habit.name,
    //   frequency: habit.frequency,
    //   description: habit.description,
    // });
    // this.editing = true;
    // this.editingIndex = index;
  }

  deleteClick(index: number) {
    this.habitService.delete(index);
  }

}
