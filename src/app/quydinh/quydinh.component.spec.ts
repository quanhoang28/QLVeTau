import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuydinhComponent } from './quydinh.component';

describe('QuydinhComponent', () => {
  let component: QuydinhComponent;
  let fixture: ComponentFixture<QuydinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuydinhComponent]
    });
    fixture = TestBed.createComponent(QuydinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
