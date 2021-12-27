import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'knowmore',component:KnowmoreComponent
  },
  {
    path:'about',component:AboutmeComponent
  },
  {
    path:'nav',component:NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
