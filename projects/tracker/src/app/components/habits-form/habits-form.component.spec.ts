import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsFormComponent } from './habits-form.component';

describe('HabitsFormComponent', () => {
  let component: HabitsFormComponent;
  let fixture: ComponentFixture<HabitsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
