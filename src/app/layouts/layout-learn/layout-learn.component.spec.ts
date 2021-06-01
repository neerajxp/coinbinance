import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLearnComponent } from './layout-learn.component';

describe('LayoutLearnComponent', () => {
  let component: LayoutLearnComponent;
  let fixture: ComponentFixture<LayoutLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
