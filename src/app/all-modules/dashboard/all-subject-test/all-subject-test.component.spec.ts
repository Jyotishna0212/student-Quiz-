import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubjectTestComponent } from './all-subject-test.component';

describe('AllSubjectTestComponent', () => {
  let component: AllSubjectTestComponent;
  let fixture: ComponentFixture<AllSubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSubjectTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
