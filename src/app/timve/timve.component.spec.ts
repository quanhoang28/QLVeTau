import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimveComponent } from './timve.component';

describe('TimveComponent', () => {
  let component: TimveComponent;
  let fixture: ComponentFixture<TimveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimveComponent]
    });
    fixture = TestBed.createComponent(TimveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
