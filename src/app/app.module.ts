import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { DataService } from './shared/services/data.service'
import { FullpageDirective } from './shared/directives/fullpage.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    CvComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatToolbarModule,
    FontAwesomeModule,
    MomentModule,
    HttpClientModule
  ],
  providers: [ContentService, Title, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
