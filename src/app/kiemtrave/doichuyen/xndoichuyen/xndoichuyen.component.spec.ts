import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XndoichuyenComponent } from './xndoichuyen.component';

describe('XndoichuyenComponent', () => {
  let component: XndoichuyenComponent;
  let fixture: ComponentFixture<XndoichuyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XndoichuyenComponent]
    });
    fixture = TestBed.createComponent(XndoichuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
