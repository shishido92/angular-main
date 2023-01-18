import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSaasComponent } from './footer-saas.component';

describe('FooterSaasComponent', () => {
  let component: FooterSaasComponent;
  let fixture: ComponentFixture<FooterSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSaasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
