import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class LessonserviceService {

  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    //const apiUrl = './assets/data/channel.json';
    const apiUrl = 'http://localhost:64549/api/Lesson';
    
    return this.http.get<Lesson[]>(apiUrl).pipe(
      map((lesson: Array<any>) => {
        const result: Array<Lesson> = [];
        if (lesson) {
          debugger;
          lesson.forEach((lsn: any) => {
            result.push(new Lesson(lsn.Title, lsn.Description, lsn.InstructorName, lsn.InstructorPhotoUrl, lsn.SubjectPhotoUrl, lsn.Time));
          });
        }
        return result;
      }),
    catchError(err => Observable.throw(err)));
  }
}
