let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 311,
        chapter: 1,
        title: "Предел функции при стремлении х к бесконечности",
        question: "Дано: lim_{x → ∞} f(x) = 10, lim_{x → ∞} g(x) = -4, lim_{x → ∞} h(x) = -6. Вычислите lim_{x → ∞} (2f(x) + 3h(x)) / (g(x) + 17).",
        answers: ["22/1", "20/3", "10/13", "2/13"],
        correct: 3,
        multiple: false
      },
      {
        id: 312,
        chapter: 1,
        title: "Скорость изменения функции",
        question: "Вычисли скорость изменения функции y = -5x + 8  в точке  x .",
        answers: ["-5", "4"],
        correct: 0,
        multiple: false
      },
      {
        id: 313,
        chapter: 1,
        title: "Доказательство с применением производной",
        question: "Докажи: если y =10/x, то y' = - 10/x^2.",
        answers: ["1.f(x) = 10/x^-1;",
    "2. f'(x) = 10-1/x^-2;",
    "3. f'(x) = -10/x^-2;",
    "4. f'(x) = - 10/x^2."],
        correct: 0,
        multiple: false
      },
      {
        id: 314,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 315,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 316,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 317,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 318,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 319,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
        multiple: false
      },
      {
        id: 320,
        chapter: 1,
        title: "Вычисление производной",
        question: "Найди производную функции y = 2x^2 + 5x в точке  x, используя определение производной.",
        answers: ["1. f(x + h) = 2(x + h)^2 + 5(x + h) = 2x^2 + 4xh + 2h^2 + 5x + 5h ",
    "2. f(x + h) - f(x) = 4xh + 2h^2 + 5h ",
    "3. f(x + h) - f(x){h} = 4x + 2h + 5 ",
    "4. y' = h0 (4x + 2h + 5) = 4x + 5"],
        correct: 3,
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