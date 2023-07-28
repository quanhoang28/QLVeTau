import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtrakhuyenmaiComponent } from './ktrakhuyenmai.component';

describe('KtrakhuyenmaiComponent', () => {
  let component: KtrakhuyenmaiComponent;
  let fixture: ComponentFixture<KtrakhuyenmaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KtrakhuyenmaiComponent]
    });
    fixture = TestBed.createComponent(KtrakhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
