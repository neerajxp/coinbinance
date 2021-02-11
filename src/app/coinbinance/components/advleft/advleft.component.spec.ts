import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvleftComponent } from './advleft.component';

describe('AdvleftComponent', () => {
  let component: AdvleftComponent;
  let fixture: ComponentFixture<AdvleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
