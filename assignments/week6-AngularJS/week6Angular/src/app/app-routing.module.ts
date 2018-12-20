import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { WildcardComponentComponent } from './wildcard-component/wildcard-component.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  //here i used redirect so that it 
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'departments',canActivate:[AuthGuard],component:DepartmentListComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent},
  {path: 'students', canActivate:[AuthGuard],component:StudentComponent },
  //using lazy loading
  {path:'welcome',canActivate:[AuthGuard],loadChildren:'./welcome/welcome.module#WelcomeModule'},
  {path:'students/:id',component:StudentDetailsComponent},
  {path:'**',component:WildcardComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=RouterModule.forRoot(routes);