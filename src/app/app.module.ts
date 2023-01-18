import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footers/footer/footer.component';
import { FooterShopComponent } from './partials/footers/footer-shop/footer-shop.component';
import { FooterSaasComponent } from './partials/footers/footer-saas/footer-saas.component';
import { FooterPortfolioComponent } from './partials/footers/footer-portfolio/footer-portfolio.component';
import { FooterBlogComponent } from './partials/footers/footer-blog/footer-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterShopComponent,
    FooterSaasComponent,
    FooterPortfolioComponent,
    FooterBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
