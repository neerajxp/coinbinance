import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvrightComponent } from './advright.component';

describe('AdvrightComponent', () => {
  let component: AdvrightComponent;
  let fixture: ComponentFixture<AdvrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
