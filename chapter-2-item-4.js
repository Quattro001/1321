let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 123,
        chapter: 1,
        title: "Проекция наклонной",
        question: "Прямая α пересекает плоскость β в точке C и образует с ней угол 30°. Точка P ∈ α, а точка R — проекция P на β. Известно, что PR = 5 см. Найдите PC.",
        answers: ["-11 см", "10/√3 см", "10√3/3 см", "√12 см", "-121 см"],
        correct:  2,
        multiple: false
      },
      {
        id: 124,
        chapter: 1,
        title: "Расстояние от точки до ребра двугранного угла",
        question: "Двугранный угол равен 120°. Точка A находится на расстоянии 15 см от обеих граней угла. Найдите расстояние от точки A до ребра двугранного угла.",
        answers: [ "10√3 см", "10 см", "10/√3 см", "10√3/3 см", "√12 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 125,
        chapter: 1,
        title: "Двугранный угол, расстояние от точки до грани",
        question: "Двугранный угол равен 30°. Точка B находится на одной из граней, расстояние от неё до ребра угла — 24 см. Найдите расстояние от точки B до второй грани.",
        answers: ["10√3 см", "10 см", "10/√3 см", "10√3/3 см", "12 см"],
        correct: 4,
        multiple: false
      },
      {
        id: 126,
        chapter: 1,
        title: "Расстояние от точки до плоскости",
        question: "К плоскости α проведена наклонная длиной 10 см, проекция которой на плоскость равна 6 см. На каком расстоянии от плоскости находится точка?",
        answers: ["0", "8", "105", "3"],
        correct: 1,
        multiple: false
      },
      {
        id: 127,
        chapter: 1,
        title: "Определение двугранного угла",
        question: "Если точка K, лежащая в грани двугранного угла, удалена от другой грани на 12 см, а от ребра — на 8√3 см.",
        answers: ["20°", "60°", "30°", "50°"],
        correct: 1,
        multiple: false
      },
      {
        id: 128,
        chapter: 1,
        title: "Расстояние от точки до плоскости",
        question: "К плоскости α проведена наклонная AB (A ∈ α). Длина наклонной 24 см, угол с плоскостью — 45°. Вычислите расстояние от точки B до плоскости.",
        answers: ["10 см", "12√2 см", "10 см", "10/√3 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 129,
        chapter: 1,
        title: "Величина двугранного угла",
        question: "Дан куб. Определи величину угла между плоскостями (A₁B₁C₁) и (ABC).",
        answers: ["невозможно определить", "0°", "90°", "45°"],
        correct: 1,
        multiple: false
      },
      {
        id: 130,
        chapter: 1,
        title: "Наклонные",
        question: "Наклонные AD и DC образуют с плоскостью α углы 30° и 45° соответственно. Длина перпендикуляра DB равна 10 см. Вычислите длины наклонных AD и DC.",
        answers: ["8", "13", "20", "32"],
        correct: 2,
        multiple: false
      },
      {
        id: 131,
        chapter: 1,
        title: "ПТочка в прямом двугранном угле",
        question: "В двугранном угле с перпендикулярными гранями дана точка A. Расстояния от точки до граней: AA₁ = 11 см и AB₁ = 60 см. Определите расстояние AB до общей прямой граней.",
        answers: ["50 см", "55 см", "61 см", "65 см"],
        correct: 2,
        multiple: false
      },
      {
        id: 132,
        chapter: 1,
        title: "Сравнение проекций наклонных",
        question: "Дано, что BD перпендикулярен плоскости α, ∠BAD = 30°, ∠BCD = 60°. Определите меньшую из проекций наклонных (AD, AB, DC, BC) на плоскость α.",
        answers: ["AD", "AB", "DC", "BC"],
        correct: 2,
        multiple: false
      },
      {
        id: 133,
        chapter: 1,
        title: "Точки в двугранном угле",
        question: "На одной из граней двугранного угла даны точки A и B. Расстояния от точек до ребра: 5 см (A) и 10 см (B). Расстояние от A до второй грани — 3 см. Определите расстояние от B до второй грани.",
        answers: ["3 см", "6 см", "9 см", "15 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 134,
        chapter: 1,
        title: "Угол между наклонной и плоскостью",
        question: "Отрезок VB длиной 20 м пересекает плоскость в точке O. Расстояния от концов отрезка до плоскости: 4 м и 6 м. Найдите острый угол между отрезком VB и плоскостью.",
        answers: ["30°", "45°", "60°", "90°"],
        correct: 0,
        multiple: false
      },
      {
        id: 135,
        chapter: 1,
        title: "Расчёты в прямом двугранном угле",
        question: "В прямом двугранном угле дан отрезок AB. Расстояния от точек A и B до ребра угла: AA₁ = 16 см, BB₁ = 12 см. Длина A₁B₁ = 21 см. Определите длину отрезка AB.",
        answers: ["25 см", "29 см", "35 см", "37 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 136,
        chapter: 1,
        title: "Расстояние между концами проекций",
        question: "Проекции наклонных AD и DC на плоскость α равны 8 см и 7 см. Угол между проекциями — 60°. Вычислите расстояние между концами проекций.",
        answers: ["√57 см", "√7 см", "√5 см", "√40 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 137,
        chapter: 1,
        title: "Определение двугранного угла и нахождение величины линейного угла",
        question: "К плоскости квадрата ABCD через вершину B проведён отрезок KB, перпендикулярный AB и BC. Сторона квадрата — 11 см, KB = 60 см. Найдите синус угла α между плоскостью квадрата и плоскостями KAD и KCD.",
        answers: ["60/61", "60/√3721", "11/61", "√3721/60"],
        correct:  0,
        multiple: false
      },
      {
        id: 138,
        chapter: 1,
        title: "Теорема о трёх перпендикулярах, расстояние от точки до стороны треугольника",
        question: "Равнобедренный треугольник ABE с боковыми сторонами 10 см и основанием AE = 16 см лежит в плоскости α. К плоскости проведён перпендикуляр CB = 8 см и наклонные CA, CE. Найдите расстояние от точки C до стороны AE.",
        answers: ["10 см", "1 см", "0 см", "100 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 139,
        chapter: 1,
        title: "Теорема о трёх перпендикулярах, прямоугольный треугольник",
        question: "Прямоугольный треугольник MBE (∠M = 90°) находится в плоскости α. BE = 10 см, ME = 6 см. К плоскости проведён перпендикуляр CB длиной T см. Вычислите расстояние от точки C до стороны ME.",
        answers: ["7.21 см", "6 см", "10 см", "√100 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 140,
        chapter: 1,
        title: "Фигуры в перпендикулярных плоскостях",
        question: "Даны точки K, A, B, C, где KA = KB = CA = 24 см, CB = 32 см, AB = 40 см. Определите расстояние CK.",
        answers: ["24 см", "32 см", "40 см", "√176 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 141,
        chapter: 1,
        title: "Не прямой двугранный угол",
        question: "На каждой из граней двугранного угла, линейный угол которого 60°, расположены равнобедренные прямоугольные треугольники ABC и DBC с общей гипотенузой BC, лежащей на ребре угла. BC = 7 см. Найти расстояние между вершинами A и D.",
        answers: ["7 см", "6.06 см", "8 см", "3.5 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 142,
        chapter: 1,
        title: "Свойство точки на одинаковых расстояниях от вершин фигуры",
        question: "Точка K находится на расстоянии 8 см от плоскости прямоугольника ABCD и на равных расстояниях от вершин прямоугольника. Определи, на каком расстоянии от вершин прямоугольника находится точка K, если стороны прямоугольника 24 см и 18 см.",
        answers: ["25 см", "17 см", "15 см", "20 см"],
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