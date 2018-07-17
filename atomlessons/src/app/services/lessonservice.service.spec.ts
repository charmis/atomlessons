import { TestBed, inject, async } from '@angular/core/testing';
import { LessonserviceService } from './lessonservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('LessonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LessonserviceService]
    });
  });

  it('should be created', inject([LessonserviceService], (service: LessonserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('retrieves all the lessons', async(inject([LessonserviceService], (service) => {
    service.getLessons().subscribe(result => expect(result.length).toBeGreaterThan(0));
  })));

});
