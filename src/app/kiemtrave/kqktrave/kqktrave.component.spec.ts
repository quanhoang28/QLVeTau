import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KqktraveComponent } from './kqktrave.component';

describe('KqktraveComponent', () => {
  let component: KqktraveComponent;
  let fixture: ComponentFixture<KqktraveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KqktraveComponent]
    });
    fixture = TestBed.createComponent(KqktraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
