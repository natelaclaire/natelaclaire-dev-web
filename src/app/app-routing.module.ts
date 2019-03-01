import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {
    page: 'home'
  }},
  {path: 'about', component: PageComponent, data: {
    page: 'about'
  }},
  {path: 'contact', component: PageComponent, data: {
    page: 'contact'
  }},
  {path: 'cv', component: CvComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
