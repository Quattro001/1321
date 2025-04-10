let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 75,
        chapter: 1,
        title: "Взаимное расположение прямой и плоскости в пространстве",
        question: "Определи взаимное расположение данной прямой и плоскости. Определи взаимное расположение данной прямой и плоскости AA1 и (BCD)",
        answers: ["параллельны", "пересекаются", "лежит в плоскости"],
        correct: 0,
        multiple: false
      },
      {
        id: 76,
        chapter: 1,
        title: "Прямая и плоскость",
        question: "Основание AB трапеции ABCD лежит в плоскости α. Основание CD не лежит в этой плоскости. Прямая DE проведена через точку E, через которую проходит прямая EF, параллельная плоскости α. Как расположена прямая DE относительно плоскости α?",
        answers: ["пересекает","параллельна","лежит в плоскости","скрещивается"],
        correct: 0,
        multiple: false
      },
      {
        id: 77,
        chapter: 1,
        title: "Расположение плоскостей",
        question: "На рисунке изображён куб. Определи взаимное расположение плоскостей BB₁C₁ и AA₁D₁.",
        answers: ["пересекающиеся", "параллельные"],
        correct: 1,
        multiple: false
      },
      {
        id: 78,
        chapter: 1,
        title: "Признак параллельности плоскостей",
        question: "Боковые стороны AB и CD трапеции ADCB параллельны плоскости α. Какими являются плоскость α и плоскость трапеции ADCB?",
        answers: ["пересекающимися", "параллельными"],
        correct: 1,
        multiple: false
      },
      {
        id: 79,
        chapter: 1,
        title: "Взаимное расположение прямых в тетраэдре",
        question: "Дан тетраэдр DABC. Определи, какие рёбра скрещиваются с ребром AB.",
        answers: ["BC", "DB", "DA", "AC", "DC"],
        correct: 4,
        multiple: false
      },
      {
        id: 80,
        chapter: 1,
        title: "Взаимное расположение прямых в параллелепипеде",
        question: "На рёбрах BB₁ и CC₁ параллелепипеда ABCD A₁B₁C₁D₁ даны точки K и L. Прямая KL пересекает прямые, содержащие рёбра в верхнем и нижнем основаниях. Назови эти рёбра в верхнем основании.",
        answers: ["D₁A₁", "C₁D₁", "A₁B₁", "B₁C₁"],
        correct: 2,
        multiple: false
      },
      {
        id: 81,
        chapter: 1,
        title: "Понятие сечения",
        question: "Есть ли сечение параллелепипеда в ABCDA1B1C1D1.",
        answers: ["Да", "Нет"],
        correct: 0,
        multiple: false
      },
      {
        id: 82,
        chapter: 1,
        title: "Параллельность прямой и плоскости",
        question: "Дан треугольник ABC. На сторонах AB и AC отложены точки D и E так, что DE = 5 см и отношение AD/BD = 9/2. Через точки B и C проведена плоскость α, параллельная отрезку DE. Найдите длину стороны BC.",
        answers: ["55/9см", "13см", "181,32см"],
        correct: 0,
        multiple: false
      },
      {
        id: 83,
        chapter: 1,
        title: "Взаимное расположение прямых и плоскостей в кубе и сечении куба",
        question: "Определи взаимное расположение прямой DD₁ и плоскости (ABC).",
        answers: ["пересекаются", "параллельны", "прямая лежит в плоскости"],
        correct: 0,
        multiple: false
      },
      {
        id: 84,
        chapter: 1,
        title: "Длина отрезка, параллельность прямых в пространстве",
        question: "Точка C принадлежит отрезку AB. Через точку A проведена плоскость, через точки B и C проведены параллельные прямые, пересекающие плоскость в точках B₁ и C₁. Вычислите длину отрезка CC₁, если AC:BC = 3:4 и BB₁ = 2 см.",
        answers: ["6/10 см", "6/7 см", "4/7 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 85,
        chapter: 1,
        title: "Периметр пространственного четырёхугольника",
        question: "Точки M, N, P и Q — середины отрезков AD, CD, BC и AB соответственно. Вычислите периметр четырёхугольника MNPQ, если AC = 14 см и BD = 17 см.",
        answers: ["3см", "1см", "7см", "31 см", "12см", "26см", "2см"],
        correct: 3,
        multiple: false
      },
      {
        id: 86,
        chapter: 1,
        title: "Площадь треугольника, параллельность прямых в пространстве",
        question: "Точка O не находится в плоскости треугольника ABC. Точки D, E, F — середины отрезков AO, BO и CO соответственно. Вычислите площадь треугольника DEF, если площадь треугольника ABC равна 184 см².",
        answers: ["3см²", "4см²", "46 см²", "10см²"],
        correct: 2,
        multiple: false
      },
      {
        id: 87,
        chapter: 1,
        title: "Прямая, параллельная плоскости трапеции",
        question: "Трапеция ABCD с основанием BC = 51,2 см лежит в плоскости α. Точка M вне этой плоскости. Точка K делит отрезок MB в соотношении MK:KB = 1:3. Плоскость ADK пересекает отрезок MC в точке N. Определите длину отрезка KN.",
        answers: ["3см", "12,8см", "7см", "10см"],
        correct: 1,
        multiple: false
      },
      {
        id: 88,
        chapter: 1,
        title: "Угол между прямыми в параллельных плоскостях",
        question: "Даны три параллельные плоскости a, b и y. В каждой из них проведены прямые a, b и c не параллельные друг другу. Угол между прямыми a и b равен 50°, а между b и c — 62°. Определите наименьший возможный угол между прямыми a и c.",
        answers: ["12°", "44°", "34°", "23°"],
        correct: 0,
        multiple: false
      },
      {
        id: 89,
        chapter: 1,
        title: "Параллельные плоскости, пересекающие стороны угла",
        question: "Дан угол AOD и две параллельные плоскости α и β. Плоскость α пересекает стороны угла OA и OD в точках A и D, плоскость β — в точках B и C. Дано: OB = 9, AB = 4, BC = 4, CD = 3. Найдите AD и OD.",
        answers: ["AD = 2; OD = 11", "AD = 1; OD = 1", "AD = 19; OD = 29", "AD = 12; OD = 21"],
        correct:  3,
        multiple: false
      },
      {
        id: 90,
        chapter: 1,
        title: "Взаимное расположение прямых и плоскостей",
        question: "Как могут быть расположены две плоскости α и β, если прямая находится в плоскости α, но не находится в плоскости β?",
        answers: ["Параллельные", "Пересекающиеся", "Параллельны или Пересекаются"],
        correct:  2,
        multiple: false
      },
      {
        id: 91,
        chapter: 1,
        title: "Свойства параллельных плоскостей",
        question: "Через точку O между параллельными плоскостями α и β проведены прямые c и d, пересекающие плоскости в точках A, B (α) и C, D (β). Дано: AB = 18 см, DO = 32 см, AC = 3·AO. Вычислите BD и CD.",
        answers: ["BD = 24 см; CD = 48 см", "BD = 4 см; CD = 8 см", "BD = 2 см; CD = 4 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 92,
        chapter: 1,
        title: "Параллельные плоскости",
        question: "Стороны угла ∠N пересекают параллельные плоскости α и β в точках A, B и C, D. Вычислите длину отрезка AB, если NA = 15 см, NC = 20 см и CD = 55 см.",
        answers: ["41,25 см", "165/4 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 93,
        chapter: 1,
        title: "Сечение параллельных плоскостей",
        question: "Дан параллелепипед ABCDA₁B₁C₁D₁. На рёбрах A₁D₁, BC и B₁C₁ расположены точки M, N и L. Объясни шаги построения сечения плоскостью через эти точки. Если плоскости имеют хотя бы одну общую точку, то они ______. Плоскость сечения пересекает ______ граней.",
        answers: ["пересекаются; 4", "не пересекаются; 8"],
        correct: 0,
        multiple: false
      },
      {
        id: 94,
        chapter: 1,
        title: "Свойства параллелепипедов",
        question: "Отметь свойства наклонного параллелепипеда с основанием-ромбом.",
        answers: ["четырёхугольники в основаниях одинаковые",
    "все диагонали параллелепипеда пересекаются в одной точке",
    "все боковые грани — одинаковые четырёхугольники",
    "все рёбра одинаковые",
    "все грани — одинаковые четырёхугольники",
    "все диагонали параллелепипеда одинаковые",
    "все боковые рёбра одинаковые",
    "стороны четырёхугольника в основании одинаковые"],
    correct: [0, 7],
    multiple: true
      },
      {
        id: 95,
        chapter: 1,
        title: "Свойства рёбер параллелепипеда",
        question: "Сумма всех рёбер параллелепипеда ABCDA₁B₁C₁D₁ равна 120 см. Определи длины рёбер AB, BC и BB₁, если отношения AB/BC = 2/3 и BC/BB₁ = 3/5.",
        answers: ["AB = 9 см; BC = 1 см; BB₁ = 5 см", "AB = 6 см; BC = 9 см; BB₁ = 15 см", "AB = 4 см; BC = 3 см; BB₁ = 19 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 96,
        chapter: 1,
        title: "Поверхность тетраэдра",
        question: "Дан тетраэдр DABC, у которого три ребра с общей вершиной D перпендикулярны. Определите общую площадь боковых граней, если DA = 9, DB = 10, DC = 10.",
        answers: ["140", "256", "7", "252"],
        correct: 0,
        multiple: false
      },
      {
        id: 97,
        chapter: 1,
        title: "Пересечение прямых в тетраэдре",
        question: "На рёбрах DA и DC тетраэдра DABC расположены точки M и N. В какой плоскости находится прямая MN?",
        answers: ["DAC", "DBC", "DAB"],
        correct: 0,
        multiple: false
      }
    ];
    
    function initializeCourse() {
      const chapters = [...new Set(tasks.map(task => task.chapter))];
      const content = document.getElementById('courseContent');
      content.innerHTML = "";
    
      chapters.forEach(chapter => {
        const chapterTasks = tasks.filter(task => task.chapter === chapter);
        content.innerHTML += `
          <div class="chapter" onclick="toggleSubitems(this)">
            <div class="chapter-title">
              Задания
              <div class="status">${getChapterProgress(chapter)}</div>
            </div>
            <ul class="subitems">
              ${chapterTasks.map(task => `
                <li data-task-id="${task.id}" onclick="showTask(${task.id}, event)"
                    class="${localStorage.getItem('task-' + task.id) ? 'solved' : ''}">
                  ${task.title}
                  <span class="status">
                    ${localStorage.getItem('task-' + task.id) ? '1/1' : '0/1'}
                  </span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      });
    }
    
    function toggleSubitems(chapterElement) {
      const subitems = chapterElement.querySelector('.subitems');
      subitems.classList.toggle('show');
    }
    
    function getChapterProgress(chapter) {
      const tasksInChapter = tasks.filter(t => t.chapter === chapter);
      const solved = tasksInChapter.filter(t => localStorage.getItem('task-' + t.id)).length;
      return `${solved}/${tasksInChapter.length}`;
    }
    
    function showTask(taskId, event) {
      event.stopPropagation();
      const task = tasks.find(t => t.id === taskId);
      
      document.getElementById('task-title').textContent = task.title;
      document.getElementById('task-content').textContent = task.question;
      
      if (task.multiple) {
        currentTask = task;
        currentSelectedAnswers = [];
        let answersHtml = "";
        task.answers.forEach((answer, index) => {
          answersHtml += `<button class="answer-btn" onclick="toggleAnswer(this, ${index})">${answer}</button>`;
        });
        answersHtml += `<button class="submit-btn" onclick="submitMultipleAnswer(${task.id})">Отправить ответ</button>`;
        document.getElementById('answers-container').innerHTML = answersHtml;
      } else {
        let answersHtml = "";
        task.answers.forEach((answer, index) => {
          answersHtml += `<button onclick="checkAnswer(${task.id}, ${index})">${answer}</button>`;
        });
        document.getElementById('answers-container').innerHTML = answersHtml;
      }
      
      let resultMsg = "";
      if (wrongCounter > 0) {
        resultMsg = `Неправильных ответов: ${wrongCounter}`;
      }
      document.getElementById('result-message').textContent = resultMsg;
      
      document.getElementById('modal').style.display = "flex";
    }
    
    function checkAnswer(taskId, selectedIndex) {
      const task = tasks.find(t => t.id === taskId);
      const resultDisplay = document.getElementById('result-message');
      
      if (selectedIndex === task.correct) {
        resultDisplay.textContent = "Правильно!";
        localStorage.setItem('task-' + task.id, "true");
        setTimeout(() => {
          hideModal();
          initializeCourse();
        }, 1000);
      } else {
        wrongCounter++;
        localStorage.setItem('wrongCounter', wrongCounter);
        resultDisplay.textContent = `Неправильно! Попробуйте ещё раз. Неправильных ответов: ${wrongCounter}`;
      }
    }
    
    function toggleAnswer(button, index) {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        currentSelectedAnswers = currentSelectedAnswers.filter(i => i !== index);
      } else {
        button.classList.add('selected');
        currentSelectedAnswers.push(index);
      }
    }
    
    function submitMultipleAnswer(taskId) {
      const task = tasks.find(t => t.id === taskId);
      const resultDisplay = document.getElementById('result-message');
      
      let selected = currentSelectedAnswers.slice().sort((a, b) => a - b);
      let correctAnswers = task.correct.slice().sort((a, b) => a - b);
      let isCorrect = (selected.length === correctAnswers.length) &&
                      selected.every((val, idx) => val === correctAnswers[idx]);
      
      if (isCorrect) {
        resultDisplay.textContent = "Правильно!";
        localStorage.setItem('task-' + task.id, "true");
        setTimeout(() => {
          hideModal();
          initializeCourse();
        }, 1000);
      } else {
        wrongCounter++;
        localStorage.setItem('wrongCounter', wrongCounter);
        resultDisplay.textContent = `Неправильно! Попробуйте ещё раз. Неправильных ответов: ${wrongCounter}`;
      }
    }
    
    function hideModal() {
      document.getElementById('modal').style.display = "none";
    }
    
    window.onload = initializeCourse;