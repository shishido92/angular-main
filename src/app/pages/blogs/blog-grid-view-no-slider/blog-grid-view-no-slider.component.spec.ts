import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridViewNoSliderComponent } from './blog-grid-view-no-slider.component';

describe('BlogGridViewNoSliderComponent', () => {
  let component: BlogGridViewNoSliderComponent;
  let fixture: ComponentFixture<BlogGridViewNoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridViewNoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridViewNoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
