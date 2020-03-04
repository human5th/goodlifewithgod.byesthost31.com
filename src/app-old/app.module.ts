import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoTemplateComponent } from './components/logo-template/logo-template.component';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { WorksComponent } from './layouts/works/works.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { SkillComponent } from './components/cards/skill/skill.component';
import { AlertComponent } from './components/cards/alert/alert.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    LogoTemplateComponent,
    HomeComponent,
    BlogComponent,
    WorksComponent,
    ContactComponent,
    SkillComponent,
    AlertComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
