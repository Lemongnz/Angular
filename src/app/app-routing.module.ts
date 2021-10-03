import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', component: EmptyComponent },
  { path: 'categoria-1', component: EmptyComponent },
  { path: 'categoria-2', component: EmptyComponent },
  { path: 'categoria-3', component: EmptyComponent },
  { path: 'categoria-4', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
