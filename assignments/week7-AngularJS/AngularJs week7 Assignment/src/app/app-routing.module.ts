import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //making a default sign-in route upon opening or nothing is done
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'HomePage',
    component:HomePageComponent
  },
  {
    path:'movie/:episode_id',
    component:MovieDetailsComponent
  },
  //making a route navigated to homepage if any other unexpected route was needed
  {
  
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
