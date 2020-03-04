import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { WorksComponent } from './layouts/works/works.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AboutComponent } from './layouts/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'works', component: WorksComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'dashboard', component: DashboardComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
