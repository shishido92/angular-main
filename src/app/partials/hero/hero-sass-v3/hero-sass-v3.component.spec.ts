import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSassV3Component } from './hero-sass-v3.component';

describe('HeroSassV3Component', () => {
  let component: HeroSassV3Component;
  let fixture: ComponentFixture<HeroSassV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSassV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSassV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
