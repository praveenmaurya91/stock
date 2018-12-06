import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrainComponent } from './brain/brain.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'brain', component: BrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
