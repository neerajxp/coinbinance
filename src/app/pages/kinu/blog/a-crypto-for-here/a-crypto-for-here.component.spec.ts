import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACryptoForHereComponent } from './a-crypto-for-here.component';

describe('ACryptoForHereComponent', () => {
  let component: ACryptoForHereComponent;
  let fixture: ComponentFixture<ACryptoForHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACryptoForHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACryptoForHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
