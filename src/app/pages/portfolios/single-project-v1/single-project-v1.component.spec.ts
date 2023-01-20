import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectV1Component } from './single-project-v1.component';

describe('SingleProjectV1Component', () => {
  let component: SingleProjectV1Component;
  let fixture: ComponentFixture<SingleProjectV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
