using AtomLessonsAPI.DTO;
using AtomLessonsAPI.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace AtomLessonsAPI.Controllers
{
    public class LessonController : ApiController
    {
        // GET: api/Lesson
        public async Task<IEnumerable<Lesson>> Get()
        {
            LessonRepository repository = new LessonRepository();
            return await repository.Get();
        }
    }
}
