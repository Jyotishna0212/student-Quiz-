import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuetionPaperComponent } from './quetion-paper.component';

describe('QuetionPaperComponent', () => {
  let component: QuetionPaperComponent;
  let fixture: ComponentFixture<QuetionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuetionPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuetionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
