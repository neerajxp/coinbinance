import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliototalComponent } from './portfoliototal.component';

describe('PortfoliototalComponent', () => {
  let component: PortfoliototalComponent;
  let fixture: ComponentFixture<PortfoliototalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliototalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliototalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
