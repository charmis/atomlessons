import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
