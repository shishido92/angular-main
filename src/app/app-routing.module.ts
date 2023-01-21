import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageSaasV3Component } from './pages/homepages/homepage-saas-v3/homepage-saas-v3.component';
import { ListViewV1Component } from './pages/portfolios/list-view-v1/list-view-v1.component';

const routes: Routes = [
  { path: '', component: HomepageSaasV3Component },
  { path: 'portfolio/list-view-v1', component: ListViewV1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
