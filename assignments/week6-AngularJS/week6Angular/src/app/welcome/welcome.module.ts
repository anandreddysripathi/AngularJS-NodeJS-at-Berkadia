import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { Routes , RouterModule} from '@angular/router';

const routes: Routes = [
  {
    // Allways set to empty
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
