import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlearnComponent } from './headerlearn.component';

describe('HeaderlearnComponent', () => {
  let component: HeaderlearnComponent;
  let fixture: ComponentFixture<HeaderlearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
