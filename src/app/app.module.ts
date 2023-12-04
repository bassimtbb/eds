import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './connexion/login/login.component';
import { SignupComponent } from './connexion/signup/signup.component';
import { ForgetpComponent } from './connexion/forgetp/forgetp.component';
import { HeaderComponent } from './acceuil/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { StagesComponent } from './dashboard/layout/stages/stages.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { BlogComponent } from './dashboard/layout/blog/blog.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SdetailleComponent } from './dashboard/layout/sdetaille/sdetaille.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    SignupComponent,
    ForgetpComponent,
    HeaderComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    StagesComponent,
    BlogComponent,
    SdetailleComponent
    ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
