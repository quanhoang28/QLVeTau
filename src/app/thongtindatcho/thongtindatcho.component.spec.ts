import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtindatchoComponent } from './thongtindatcho.component';

describe('ThongtindatchoComponent', () => {
  let component: ThongtindatchoComponent;
  let fixture: ComponentFixture<ThongtindatchoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongtindatchoComponent]
    });
    fixture = TestBed.createComponent(ThongtindatchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
