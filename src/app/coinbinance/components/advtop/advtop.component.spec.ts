import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvtopComponent } from './advtop.component';

describe('AdvtopComponent', () => {
  let component: AdvtopComponent;
  let fixture: ComponentFixture<AdvtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
