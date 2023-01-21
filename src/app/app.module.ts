import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footers/footer/footer.component';
import { FooterShopComponent } from './partials/footers/footer-shop/footer-shop.component';
import { FooterSaasComponent } from './partials/footers/footer-saas/footer-saas.component';
import { FooterPortfolioComponent } from './partials/footers/footer-portfolio/footer-portfolio.component';
import { FooterBlogComponent } from './partials/footers/footer-blog/footer-blog.component';
import { SpinnerComponent } from './partials/spinner/spinner/spinner.component';
import { NavbarWhiteComponent } from './partials/navbar/navbar-white/navbar-white.component';
import { HeroSassV3Component } from './partials/hero/hero-sass-v3/hero-sass-v3.component';
import { HomepageSaasV3Component } from './pages/homepages/homepage-saas-v3/homepage-saas-v3.component';
import { FeaturesComponent } from './partials/components/features/features.component';
import { TestimonialsComponent } from './partials/components/testimonials/testimonials.component';
import { ListViewV1Component } from './pages/portfolios/list-view-v1/list-view-v1.component';
import { ListViewV2Component } from './pages/portfolios/list-view-v2/list-view-v2.component';
import { GridViewV2Component } from './pages/portfolios/grid-view-v2/grid-view-v2.component';
import { GridViewV1Component } from './pages/portfolios/grid-view-v1/grid-view-v1.component';
import { SliderViewComponent } from './pages/portfolios/slider-view/slider-view.component';
import { SingleProjectV1Component } from './pages/portfolios/single-project-v1/single-project-v1.component';
import { SingleProjectV2Component } from './pages/portfolios/single-project-v2/single-project-v2.component';
import { CatalogListingsComponent } from './pages/shops/catalog-listings/catalog-listings.component';
import { ShopProductPageComponent } from './pages/shops/shop-product-page/shop-product-page.component';
import { ShopCheckoutComponent } from './pages/shops/shop-checkout/shop-checkout.component';
import { BlogGridViewWithSliderComponent } from './pages/blogs/blog-grid-view-with-slider/blog-grid-view-with-slider.component';
import { BlogGridViewNoSliderComponent } from './pages/blogs/blog-grid-view-no-slider/blog-grid-view-no-slider.component';
import { AboutAgencyComponent } from './pages/abouts/about-agency/about-agency.component';
import { AboutProductComponent } from './pages/abouts/about-product/about-product.component';
import { ServicesV1Component } from './pages/services/services-v1/services-v1.component';
import { ServicesV2Component } from './pages/services/services-v2/services-v2.component';
import { ServicesV3Component } from './pages/services/services-v3/services-v3.component';
import { BlogListSidebarComponent } from './pages/blogs/blog-list-sidebar/blog-list-sidebar.component';
import { AccountSigninComponent } from './pages/auth/account-signin/account-signin.component';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterShopComponent,
    FooterSaasComponent,
    FooterPortfolioComponent,
    FooterBlogComponent,
    SpinnerComponent,
    NavbarWhiteComponent,
    HeroSassV3Component,
    HomepageSaasV3Component,
    FeaturesComponent,
    TestimonialsComponent,
    ListViewV1Component,
    ListViewV2Component,
    GridViewV2Component,
    GridViewV1Component,
    SliderViewComponent,
    SingleProjectV1Component,
    SingleProjectV2Component,
    CatalogListingsComponent,
    ShopProductPageComponent,
    ShopCheckoutComponent,
    BlogGridViewWithSliderComponent,
    BlogGridViewNoSliderComponent,
    AboutAgencyComponent,
    AboutProductComponent,
    ServicesV1Component,
    ServicesV2Component,
    ServicesV3Component,
    BlogListSidebarComponent,
    AccountSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
