import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonlistComponent } from './components/lessonlist/lessonlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
