import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKinuComponent } from './header-kinu.component';

describe('HeaderKinuComponent', () => {
  let component: HeaderKinuComponent;
  let fixture: ComponentFixture<HeaderKinuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderKinuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderKinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
