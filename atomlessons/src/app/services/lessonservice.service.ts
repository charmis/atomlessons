import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson'

@Injectable()
export class LessonserviceService {

  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    let apiUrl = './assets/data/channel.json';
    return this.http.get<Lesson[]>(apiUrl);
  }
}