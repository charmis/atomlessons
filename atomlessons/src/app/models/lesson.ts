export class Lesson {
    Title: string;
    Description: string;
    InstructorName: string;
    InstructorPhotoUrl: string;
    SubjectPhotoUrl: string;
    Time: Date;

    constructor(lesson: any) {
        this.Title = lesson.Title;
    }
}
