import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { FullpageDirective } from './shared/directives/fullpage.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatToolbarModule,
    FontAwesomeModule
  ],
  providers: [ContentService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
