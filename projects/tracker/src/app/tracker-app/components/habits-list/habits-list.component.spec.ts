import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsListComponent } from './habits-list.component';

describe('HabitsListComponent', () => {
  let component: HabitsListComponent;
  let fixture: ComponentFixture<HabitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
