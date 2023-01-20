import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListingsComponent } from './catalog-listings.component';

describe('CatalogListingsComponent', () => {
  let component: CatalogListingsComponent;
  let fixture: ComponentFixture<CatalogListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
