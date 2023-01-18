import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSaasV3Component } from './homepage-saas-v3.component';

describe('HomepageSaasV3Component', () => {
  let component: HomepageSaasV3Component;
  let fixture: ComponentFixture<HomepageSaasV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSaasV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSaasV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
