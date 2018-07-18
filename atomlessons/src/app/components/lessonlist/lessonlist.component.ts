import { Component, OnInit } from '@angular/core';
import { LessonserviceService } from '../../services/lessonservice.service';
import { Lesson } from '../../models/lesson';
import { Observable } from 'rxjs/Observable';
import { groupBy, mergeMap, reduce, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css'],
  providers: [LessonserviceService]
})
export class LessonlistComponent implements OnInit {

  lessons$: Observable<any>;

  constructor(private lessonService: LessonserviceService) {
  }

  ngOnInit() {
    this.lessons$ = this.lessonService.getLessons().pipe(
      map((s) => s.sort(function (a, b) {
        const c = new Date(a.Time);
        const d = new Date(b.Time);
        return +c - +d;
      })),
      mergeMap(val => val),
      groupBy(ls => this.getFormattedDate(ls.Time)),
      mergeMap(go => {
        return go.pipe(reduce((acc, lesson: Lesson) => { acc.push(lesson); return acc; }, []),
          map(lessons => ({ title: go.key, lessons })));
      }),
      toArray()
    );
  }

  getFormattedDate(courseDate) {
    const lessonDate = new Date(courseDate);    
    const year = lessonDate.getFullYear();
    
    let month = (1 + lessonDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = lessonDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return year + '-' + month + '-' + day;
  }
}
