import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemtraveComponent } from './kiemtrave.component';

describe('KiemtraveComponent', () => {
  let component: KiemtraveComponent;
  let fixture: ComponentFixture<KiemtraveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiemtraveComponent]
    });
    fixture = TestBed.createComponent(KiemtraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
