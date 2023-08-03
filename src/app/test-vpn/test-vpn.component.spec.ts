import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVPNComponent } from './test-vpn.component';

describe('TestVPNComponent', () => {
  let component: TestVPNComponent;
  let fixture: ComponentFixture<TestVPNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestVPNComponent]
    });
    fixture = TestBed.createComponent(TestVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
