import { Component, OnInit } from '@angular/core';
import { LessonserviceService } from '../../services/lessonservice.service';
import { Lesson } from '../../models/lesson';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css'],
  providers:[LessonserviceService]
})
export class LessonlistComponent implements OnInit {

  lessons$:Observable<Lesson[]>;

  constructor(private lessonService:LessonserviceService) { }

  ngOnInit() {
    this.lessons$ = this.lessonService.getLessons();
  }
}
