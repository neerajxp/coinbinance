import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutKinuComponent } from './layout-kinu.component';

describe('LayoutKinuComponent', () => {
  let component: LayoutKinuComponent;
  let fixture: ComponentFixture<LayoutKinuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutKinuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutKinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
