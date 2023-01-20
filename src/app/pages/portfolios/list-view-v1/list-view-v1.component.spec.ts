import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewV1Component } from './list-view-v1.component';

describe('ListViewV1Component', () => {
  let component: ListViewV1Component;
  let fixture: ComponentFixture<ListViewV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
