using AtomLessonsAPI.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AtomLessonsAPI.Tests.Controllers
{
    [TestClass]
    public class LessonControllerTest
    {
        [TestMethod]
        public void it_should_return_data_for_get()
        {
            // Arrange
            LessonController controller = new LessonController();
            // Act
            var result = controller.Get().Result;
            // Assert
            Assert.IsNotNull(result);
        }
    }
}
