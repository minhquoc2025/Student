import { ComponentFixture, TestBed } from '@angular/core/testing';

import { classComponent } from './class.component';

describe('ClassComponent', () => {
  let component: classComponent;
  let fixture: ComponentFixture<classComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [classComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(classComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
