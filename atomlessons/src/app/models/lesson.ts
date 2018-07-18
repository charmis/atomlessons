export class Lesson {
    Title: string;
    Description: string;
    InstructorName: string;
    InstructorPhotoUrl: string;
    SubjectPhotoUrl: string;
    Time: Date;
    LessonEndTime: Date;

    constructor(title: string, description: string, instructor: string,
        instructorPhoto: string, subjectPhoto: string,
        lessonDate: Date
    ) {
        const HOUR_IN_MILLISECONDS = 3600000;

        this.Title = title;
        this.Description = description;
        this.InstructorName = instructor;
        this.InstructorPhotoUrl = instructorPhoto;
        this.SubjectPhotoUrl = subjectPhoto;
        this.Time = lessonDate;
        this.LessonEndTime = new Date();
        this.LessonEndTime.setTime(new Date(this.Time).getTime() + HOUR_IN_MILLISECONDS);
    }
}
