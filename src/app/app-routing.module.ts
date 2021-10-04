import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Page } from './pages/page-1/pages/page-1-page/page-1-page';

const routes: Routes = [
  { path: '', component: Page1Page },
  { path: 'page_1', component: Page1Page },
  { path: 'page_2', component: Page1Page },
  { path: 'page_3', component: Page1Page },
  { path: 'page_4', component: Page1Page },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
