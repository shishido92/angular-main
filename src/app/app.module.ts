import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
