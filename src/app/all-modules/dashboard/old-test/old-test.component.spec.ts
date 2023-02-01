import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTestComponent } from './old-test.component';

describe('OldTestComponent', () => {
  let component: OldTestComponent;
  let fixture: ComponentFixture<OldTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
