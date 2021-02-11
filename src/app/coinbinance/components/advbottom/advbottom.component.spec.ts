import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvbottomComponent } from './advbottom.component';

describe('AdvbottomComponent', () => {
  let component: AdvbottomComponent;
  let fixture: ComponentFixture<AdvbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvbottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
