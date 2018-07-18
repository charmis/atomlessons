using System;

namespace AtomLessonsAPI.DTO
{
    public class Lesson
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string InstructorName { get; set; }
        public string InstructorPhotoUrl { get; set; }
        public string SubjectPhotoUrl { get; set; }
        public DateTime Time { get; set; }
    }
}
