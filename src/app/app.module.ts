import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContentService } from './shared/services/content.service';
import { DataService } from './shared/services/data.service'
import { FullpageDirective } from './shared/directives/fullpage.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';

import { MomentModule } from 'ngx-moment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MoodDisplayPipe } from './mood-display.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    CvComponent,
    HomeComponent,
    MoodDisplayPipe,
    AboutComponent,
    ClassesComponent
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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ContentService, Title, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
