import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonlistComponent } from './components/lessonlist/lessonlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrormessageComponent } from './components/errormessage/errormessage.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lessons', component: LessonlistComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'error', component: ErrormessageComponent },
  { path: '**', component: ErrormessageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonlistComponent,
    DashboardComponent,
    ErrormessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
