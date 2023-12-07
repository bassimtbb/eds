import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './connexion/login/login.component';
import { SignupComponent } from './connexion/signup/signup.component';
import { ForgetpComponent } from './connexion/forgetp/forgetp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StagesComponent } from './dashboard/layout/stages/stages.component';
import { SdetailleComponent } from './dashboard/layout/sdetaille/sdetaille.component';
import { BlogComponent } from './dashboard/layout/blog/blog.component';
import { BdetailleComponent } from './dashboard/layout/bdetaille/bdetaille.component';
import { IdeeComponent } from './dashboard/layout/idee/idee.component';
import { PosteIComponent } from './dashboard/layout/poste-i/poste-i.component';
import { IdetailleComponent } from './dashboard/layout/idetaille/idetaille.component';
import { ProfileComponent } from './dashboard/layout/profile/profile.component';
import { PortfolioComponent } from './dashboard/layout/portfolio/portfolio.component';
import { SecuriteComponent } from './dashboard/layout/securite/securite.component';
import { ProfileMComponent } from './dashboard/layout/profile-m/profile-m.component'; // Importez ReactiveFormsModule

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:'',component:StagesComponent},
    {path:'stage',component:StagesComponent},
    {path:'Sdetaille',component:SdetailleComponent},
    {path:'blog',component:BlogComponent},
    {path:'Bdetaille',component:BdetailleComponent},
    {path:'idee',component:IdeeComponent},
    {path:'postei',component:PosteIComponent},
    {path:'idetaille',component:IdetailleComponent},
    {path:'profile',component:ProfileComponent,
    children:[
      {path:'Compte',component:ProfileMComponent},
      {path:'portfolio',component:PortfolioComponent},
      {path:'Securite',component:SecuriteComponent}
    ]
    },
  
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
