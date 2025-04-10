let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 62,
        chapter: 1,
        title: "Вопросы по введению в стереометрию",
        question: "Закончи предложение, вписав пропущенное слово. Все множество точек, изучаемое стереометрией, называется...",
        answers: ["плоскостью", "Пространством"],
        correct: 1,
        multiple: false
      },
      {
        id: 63,
        chapter: 1,
        title: "Аксиомы стереометрии. Практическая задача",
        question: "Точки K,L,C,N не лежат в одной плоскости. Верно ли, что плоскости, проходящие через точку K, L, C и через точки L, N, K, пересекаются по прямой KL?",
        answers: ["Да", "Нет"],
        correct: 1,
        multiple: false
      },
      {
        id: 64,
        chapter: 1,
        title: "Число прямых, проходящих через данную точку",
        question: "Сколько прямых, которые не пересекают плоскость a, можно провести в пространстве через точку S, если известно, что S∈/a",
        answers: ["Ни одной", "Две", "Три", "Бесконечное множество"],
        correct: 3,
        multiple: false
      },
      {
        id: 65,
        chapter: 1,
        title: "Bзаимноe расположение рёбер куба",
        question: "Дан куб ABCDA1B1C1D1. Определи взаимное расположение данных прямых CD и C1D1.",
        answers: ["пересекающиеся", "параллельны", "скрещивающиеся"],
        correct: 1,
        multiple: false
      },
      {
        id: 66,
        chapter: 1,
        title: "Построение рисунка с данным расположением прямых",
        question: "Прямые KM и NP параллельны, прямые MR и NP скрещивающиеся. Найти угол между прямыми MR и NP, если угол RMK=35°",
        answers: ["58", "88°", "35°"],
        correct: 2,
        multiple: false
      },
      {
        id: 67,
        chapter: 1,
        title: "Вопросы по основным понятиям стереометрии",
        question: "Объёмы равных тел...",
        answers: ["равны", "различны", "отличаются", "подобны"],
        correct: 0,
        multiple: false
      },
      {
        id: 68,
        chapter: 1,
        title: "Вопросы на аксиомы стереометрии",
        question: "Через две пересекающиеся прямые можно провести...",
        answers: ["две или больше плоскостей", "одну-единственную плоскость", "бесконечное множество плоскостей", "ни одну плоскость"],
        correct: 1,
        multiple: false
      },
      {
        id: 69,
        chapter: 1,
        title: "Три точки в плоскости",
        question: "Четыре точки - A, D, B, C - не находятся в одной плоскости. Верно ли, что любые три точки из данных четырёх находятся на одной прямой?",
        answers: ["Нет", "Да"],
        correct: 0,
        multiple: false
      },
      {
        id: 70,
        chapter: 1,
        title: "Расположение точек и прямых в плоскости",
        question: "Две плоскости — β и α — пересекаются по прямой m. Прямая b находится в плоскости β, а прямая a находится в плоскости α. Прямые a и b пересекаются в точке A. Верно ли утверждение, что точка A принадлежит прямой m?",
        answers: ["Нет", "Да"],
        correct: 1,
        multiple: false
      },
      {
        id: 71,
        chapter: 1,
        title: "Bзаимноe расположениe прямых и плоскостей в пирамиде",
        question: "Правильная пирамида SABCD пересечена плоскостью KLNM, параллельной основанию. Каково взаимное расположение прямых: BS и CS?",
        answers: ["Пересекаются", "Скрещиваются", "Параллельны"],
        correct: 0,
        multiple: false
      },
      {
        id: 72,
        chapter: 1,
        title: "Bзаимноe расположениe прямых",
        question: "В плоскости лежит треугольник ABC, а точка D не находится в этой плоскости. Точки M, N и K — серединные точки отрезков DA, DB и DC. Определи взаимное расположение прямых AD и BD.",
        answers: ["пересекаются", "скрещивающиеся", "параллельны"],
        correct: 0,
        multiple: false
      },
      {
        id: 73,
        chapter: 1,
        title: "Квадрат и прямая вне плоскости квадрата",
        question: "Прямая EF не лежит в плоскости квадрата ABCD, но параллельна стороне квадрата BC. Какой угол образуют прямые EF и AD?",
        answers: ["0°", "13°", "8°"],
        correct: 0,
        multiple: false
      },
      {
        id: 74,
        chapter: 1,
        title: "Bзаимноe расположениe прямых в призме шестиугольника",
        question: "Определи взаимное расположение прямых в правильной шестиугольной призме. Определи взаимное расположение прямых FE и CC₁",
        answers: ["пересекаются", "скрещиваются", "параллельны"],
        correct: 1,
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