import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinwatchComponent } from './coinwatch.component';

describe('CoinwatchComponent', () => {
  let component: CoinwatchComponent;
  let fixture: ComponentFixture<CoinwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
