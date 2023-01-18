import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageSaasV3Component } from './pages/homepages/homepage-saas-v3/homepage-saas-v3.component';

const routes: Routes = [
  { path: '', component: HomepageSaasV3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
