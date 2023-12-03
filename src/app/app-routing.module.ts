import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './connexion/login/login.component';
import { SignupComponent } from './connexion/signup/signup.component';
import { ForgetpComponent } from './connexion/forgetp/forgetp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StagesComponent } from './dashboard/layout/stages/stages.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:'',component:StagesComponent},
 
   
  ]},

  {path:'acceuil',component:AcceuilComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget',component:ForgetpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
