using AtomLessonsAPI.DTO;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Web;

namespace AtomLessonsAPI.Repository
{
    public class LessonRepository
    {
        public async Task<IEnumerable<Lesson>> Get()
        {
            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath(@"~/DummyData/channel.json")))
            {
                string json = await r.ReadToEndAsync();
                List<Lesson> lessons = JsonConvert.DeserializeObject<List<Lesson>>(json);
                return lessons;
            }
        }
    }
}
