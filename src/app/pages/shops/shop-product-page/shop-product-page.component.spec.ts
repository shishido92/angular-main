import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductPageComponent } from './shop-product-page.component';

describe('ShopProductPageComponent', () => {
  let component: ShopProductPageComponent;
  let fixture: ComponentFixture<ShopProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
