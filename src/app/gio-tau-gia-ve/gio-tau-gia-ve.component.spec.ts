import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioTauGiaVeComponent } from './gio-tau-gia-ve.component';

describe('GioTauGiaVeComponent', () => {
  let component: GioTauGiaVeComponent;
  let fixture: ComponentFixture<GioTauGiaVeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GioTauGiaVeComponent]
    });
    fixture = TestBed.createComponent(GioTauGiaVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
