import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent, LoginComponent } from './auth/components';
import { HomeReditComponent } from './compoenents/home-redit/home-redit.component';


const routes: Routes = [
  {
    path: '',
    component: HomeReditComponent
  },
  {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
