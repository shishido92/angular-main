import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewV1Component } from './grid-view-v1.component';

describe('GridViewV1Component', () => {
  let component: GridViewV1Component;
  let fixture: ComponentFixture<GridViewV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridViewV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
