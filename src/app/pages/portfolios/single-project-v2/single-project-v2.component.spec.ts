import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectV2Component } from './single-project-v2.component';

describe('SingleProjectV2Component', () => {
  let component: SingleProjectV2Component;
  let fixture: ComponentFixture<SingleProjectV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
