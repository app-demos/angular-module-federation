import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Habit } from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  public adding = true;
  public editing = false;
  editingIndex: number;

  ngOnInit(): void { }

  // public onSubmit() {
  //   const habit = this.habitForm.value as Habit;

  //   if (this.editing) {
  //     this.habits.splice(this.editingIndex, 1, habit);
  //   } else {
  //     this.habits.push(this.habitForm.value as Habit);
  //   }
  //   this.exitForm();
  // }

  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    this.editing = true;
    this.editingIndex = index;
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.habitForm.reset();
  }

  public onDelete(index: number) {
    // this.habits.splice(index, 1);
  }
}
