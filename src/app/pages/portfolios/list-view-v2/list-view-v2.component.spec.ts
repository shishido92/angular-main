import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewV2Component } from './list-view-v2.component';

describe('ListViewV2Component', () => {
  let component: ListViewV2Component;
  let fixture: ComponentFixture<ListViewV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
