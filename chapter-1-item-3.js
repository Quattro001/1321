let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 22,
        chapter: 1,
        title: "Себестоимость детали",
        question: "Себестоимость изготовления одной детали — 703 р. Внедрение новой технологии позволило снизить себестоимость детали на 3 %. Какой стала себестоимость детали?",
        answers: ["111", "11", "681,91", "341", "41"],
        correct:  2,
        multiple: false
      },
      {
        id: 23,
        chapter: 1,
        title: "Части прямого угла",
        question: "Выберите все четные числа:",
        answers: ["3", "4", "7", "10"],
        correct: [1, 3],
        multiple: true
      },
      {
        id: 24,
        chapter: 1,
        title: "Делимость чисел",
        question: "Отметь при каких значениях х выполняеться 30:х",
        answers: ["60", "3", "10", "23"],
        correct: [1, 2],
        multiple: true
      },
      {
        id: 25,
        chapter: 1,
        title: "Деление с остатком",
        question: "24: 5= __ (ост.__) ",
        answers: ["0", "4,8", "105", "3"],
        correct: 1,
        multiple: false
      },
      {
        id: 26,
        chapter: 1,
        title: "Нахождение рациональных чисел",
        question: "Отметь рациональные числа, которые находяться между числами 0,682 и 1,588",
        answers: ["1,587", "1,788", "1,488", "2,682", "0,782", "0,582"],
        correct: [0, 2, 4],
        multiple: true
      },
      {
        id: 27,
        chapter: 1,
        title: "Перевод в обыкновенную дробь",
        question: "Выберите все четные числа:",
        answers: ["38 = 38/10", "0,9 = 9/10", "0,0009 = 9//10000", "10 = 10/1"],
        correct: [1, 2, 3],
        multiple: true
      },
      {
        id: 28,
        chapter: 1,
        title: "Нахождение количества правильных дробей",
        question: "сколько существует положительных обыкновенных и правильных несократимых дробей со знаменателем равным 67",
        answers: ["13", "66", "77", "1"],
        correct: 1,
        multiple: false
      },
      {
        id: 29,
        chapter: 1,
        title: "Иррациональные числа",
        question: "Отметь иррациональные числа:",
        answers: ["8,(791)", "π", "√13", "181,32"],
        correct: [1, 2],
        multiple: true
      },
      {
        id: 30,
        chapter: 1,
        title: "Произведение иррациональных чисел",
        question: "Вычеслить: √13 х √52 ",
        answers: ["3", "26", "7", "10"],
        correct: 1,
        multiple: false
      },
      {
        id: 31,
        chapter: 1,
        title: "Действия с иррациональными числами",
        question: "Выберите все четные числа:",
        answers: ["рациональное число", "иррациональное число"],
        correct: 1,
        multiple: false
      },
      {
        id: 32,
        chapter: 1,
        title: " x, y — натуральные числа",
        question: "Найди все значения а(натур. число), при которых x и y являются натуральными числами: x = 26/a + 11, y = 6 x a + 52/a",
        answers: ["3", "1", "7", "13", "12", "26", "2"],
        correct: [1, 3, 5, 6],
        multiple: true
      },
      {
        id: 33,
        chapter: 1,
        title: "Возведение в степень",
        question: "На какую цифру оканчивается число 127^345",
        answers: ["3", "4", "7", "10"],
        correct: 2,
        multiple: false
      },
      {
        id: 34,
        chapter: 1,
        title: "Перевод числа в бесконечную десятичную периодическую дробь",
        question: "Запиши 1,355... в виде бесконечной десятичной периодической дроби",
        answers: ["3", "1,3(5)", "7", "10"],
        correct: 1,
        multiple: false
      },
      {
        id: 35,
        chapter: 1,
        title: "Число, равноудалённое от чисел",
        question: "Найди число, равноудаленное от чисел 41/42 и 42/41",
        answers: ["3445/3444", "3423445/342344", "3445/32444", "34422345/346744"],
        correct: 0,
        multiple: false
      },
      {
        id: 36,
        chapter: 1,
        title: "Вычиcление выражения",
        question: "Вычисли (√32 - 8)(8 + 4√2) = ",
        answers: ["32", "4", "7", "-32"],
        correct:  3,
        multiple: false
      },
      {
        id: 37,
        chapter: 1,
        title: "Интервал",
        question: "Отметьте рациональные числа, расположенные на интервале (2,2,√5)",
        answers: ["2,21", "2,189", "2,205", "√4", "√6", "2,2"],
        correct: [0, 2],
        multiple: true
      },
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