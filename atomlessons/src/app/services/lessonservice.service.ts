import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson';
import { map } from 'rxjs/operators';

@Injectable()
export class LessonserviceService {

  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    const apiUrl = './assets/data/channel.json';

    return this.http.get<Lesson[]>(apiUrl).pipe(
      map((lesson: Array<any>) => {
        const result: Array<Lesson> = [];
        if (lesson) {
          lesson.forEach((lsn: any) => {
            result.push(new Lesson(lsn.title, lsn.description, lsn.instructorName, lsn.instructorPhotoUrl, lsn.subjectPhotoUrl, lsn.time));
          });
        }
        return result;
      }));
  }
}
