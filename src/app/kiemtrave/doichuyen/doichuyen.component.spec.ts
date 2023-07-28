import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoichuyenComponent } from './doichuyen.component';

describe('DoichuyenComponent', () => {
  let component: DoichuyenComponent;
  let fixture: ComponentFixture<DoichuyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoichuyenComponent]
    });
    fixture = TestBed.createComponent(DoichuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
