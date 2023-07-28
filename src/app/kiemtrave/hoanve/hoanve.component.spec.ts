import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanveComponent } from './hoanve.component';

describe('HoanveComponent', () => {
  let component: HoanveComponent;
  let fixture: ComponentFixture<HoanveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoanveComponent]
    });
    fixture = TestBed.createComponent(HoanveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
