import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Page } from './pages/page-1/pages/page-1-page/page-1-page';
import { Page2Page } from './pages/page-2/page-2-page/page-2-page';

const routes: Routes = [
  { path: '', component: Page1Page },
  { path: 'page-1', component: Page1Page },
  { path: 'page-2', component: Page2Page }, // Page2Page
  { path: 'page-3', component: Page1Page }, // Page3Page
  { path: 'page-4', component: Page1Page }, // Page4Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
