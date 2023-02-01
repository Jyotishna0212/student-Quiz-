import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuetionsComponent } from './student-quetions.component';

describe('StudentQuetionsComponent', () => {
  let component: StudentQuetionsComponent;
  let fixture: ComponentFixture<StudentQuetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQuetionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
