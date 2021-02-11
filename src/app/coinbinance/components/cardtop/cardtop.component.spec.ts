import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtopComponent } from './cardtop.component';

describe('CardtopComponent', () => {
  let component: CardtopComponent;
  let fixture: ComponentFixture<CardtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
