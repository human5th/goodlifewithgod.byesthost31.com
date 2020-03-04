import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoTemplateComponent } from './components/logo-template/logo-template.component';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { WorksComponent } from './layouts/works/works.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { SkillComponent } from './components/cards/skill/skill.component';
import { AlertComponent } from './components/cards/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './layouts/about/about.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './modules/products/products.module';
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
    FooterComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeesModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
