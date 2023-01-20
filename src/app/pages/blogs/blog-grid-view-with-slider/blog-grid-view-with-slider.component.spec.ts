import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridViewWithSliderComponent } from './blog-grid-view-with-slider.component';

describe('BlogGridViewWithSliderComponent', () => {
  let component: BlogGridViewWithSliderComponent;
  let fixture: ComponentFixture<BlogGridViewWithSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridViewWithSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridViewWithSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
