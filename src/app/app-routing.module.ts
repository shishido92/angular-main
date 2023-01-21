import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSigninComponent } from './pages/auth/account-signin/account-signin.component';
import { BlogListSidebarComponent } from './pages/blogs/blog-list-sidebar/blog-list-sidebar.component';
import { HomepageSaasV3Component } from './pages/homepages/homepage-saas-v3/homepage-saas-v3.component';
import { ListViewV1Component } from './pages/portfolios/list-view-v1/list-view-v1.component';

const routes: Routes = [
  { path: '', component: HomepageSaasV3Component },
  { path: 'portfolio/list-view-v1', component: ListViewV1Component },
  { path: 'blogs/blog-list-sidebar', component: BlogListSidebarComponent },
  { path: 'signin', component: AccountSigninComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
