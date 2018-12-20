import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WildcardComponentComponent } from './wildcard-component/wildcard-component.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    StudentComponent,
    LoginComponent,
    StudentDetailsComponent,
    WildcardComponentComponent,
    DepartmentDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    routingComponents
  ],
  providers:[AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }