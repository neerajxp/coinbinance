import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTradingComponent } from './layout-trading.component';

describe('LayoutTradingComponent', () => {
  let component: LayoutTradingComponent;
  let fixture: ComponentFixture<LayoutTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
