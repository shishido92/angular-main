import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewV2Component } from './grid-view-v2.component';

describe('GridViewV2Component', () => {
  let component: GridViewV2Component;
  let fixture: ComponentFixture<GridViewV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridViewV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
