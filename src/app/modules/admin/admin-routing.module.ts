import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BusinessComponent } from './components/business/business.component';
import { CategoryComponent } from './components/category/category.component';
import { DetailsComponent } from './components/business/details/details.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'business/:id', component: DetailsComponent, runGuardsAndResolvers: 'always' },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryComponent, runGuardsAndResolvers: 'always' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
