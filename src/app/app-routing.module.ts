import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ShowAllComponent } from './views/show-all/show-all.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'show-all', component: ShowAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
