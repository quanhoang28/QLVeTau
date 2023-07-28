import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaveComponent } from './muave.component';

describe('MuaveComponent', () => {
  let component: MuaveComponent;
  let fixture: ComponentFixture<MuaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuaveComponent]
    });
    fixture = TestBed.createComponent(MuaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
