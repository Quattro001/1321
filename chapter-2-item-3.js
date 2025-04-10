let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 98,
        chapter: 1,
        title: "Применение признака перпендикулярности прямой и плоскости",
        question: "Дан куб. Определи, какая из данных прямых перпендикулярна плоскости (ABB₁).",
        answers: ["BD", "AB", "AC₁", "B₁C₁", "AC", "AA₁", "BD₁"],
        correct: 5,
        multiple: false
      },
      {
        id: 99,
        chapter: 1,
        title: "Две прямые, перпендикулярные одной плоскости",
        question: "Прямая PQ параллельна плоскости α. От точек P и Q к плоскости проведены перпендикуляры PP₁ и QQ₁. Известно, что PQ = PP₁ = 11,2 см. Определи вид четырёхугольника PP₁Q₁Q и рассчитай его периметр.",
        answers: ["прямоугольник; 44,8 см", "непрямоугольник; 40 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 100,
        chapter: 1,
        title: "Перпендикулярность прямой к плоскости",
        question: "Проведённая к плоскости перпендикулярная прямая пересекает плоскость в точке O. Отрезок AD имеет середину в точке O. Определи вид и периметр треугольника ABD, если AD = 17 см, а OB = 10 см.",
        answers: ["равнобедренный; 43,3 см", "неравнобедренный; 33 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 101,
        chapter: 1,
        title: "Расстояние от точки до плоскости",
        question: "К плоскости α проведена наклонная длиной 100 см, проекция которой на плоскость равна 60 см. На каком расстоянии от плоскости находится точка?",
        answers: ["50 см", "80 см", "89 см", "10 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 102,
        chapter: 1,
        title: "Проекция наклонной",
        question: "Прямая a пересекает плоскость β в точке C и образует с ней угол 30°. Точка P ∈ a, а точка R — проекция P на β. Известно, что PC = 14 см. Найдите PR.",
        answers: ["1 см", "7 см", "8 см", "2 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 103,
        chapter: 1,
        title: "Прямые, перпендикулярные плоскости",
        question: "Проведены прямые KN и LM, перпендикулярные плоскости α. KN = 42,5 см, LM = 27,5 см. Определи расстояние NM, если KL = 17 см.",
        answers: ["√514 см", "22,7 см"],
        correct: 1,
        multiple: false
      },
      {
        id: 104,
        chapter: 1,
        title: "Расстояние от точки до плоскости",
        question: "К плоскости α проведена наклонная AB (A ∈ α). Длина наклонной 16 см, угол с плоскостью — 60°. Вычислите расстояние от точки B до плоскости.",
        answers: ["8√8 см", "2√3 см", "3√9 см", "8√3 см"],
        correct: 3,
        multiple: false
      },
      {
        id: 105,
        chapter: 1,
        title: "Перпендикуляр к плоскости квадрата",
        question: "К плоскости квадрата ABCD со стороной 11 см через центр O проведена перпендикулярная прямая с отрезком OK = 5 см. Рассчитайте расстояние от точки K до вершин квадрата.",
        answers: ["KA ≈ 9,2 см; KB ≈ 9,2 см; KC ≈ 9,2 см; KD ≈ 9,2 см", "KA ≈ 2 см; KB ≈ 9 см ;KC ≈ 2 см; KD ≈ 3 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 106,
        chapter: 1,
        title: "Наклонные",
        question: "Наклонные AD и DC образуют с плоскостью α углы 30° и 45° соответственно. Длина перпендикуляра DB равна 4 см. Вычислите длины наклонных AD.",
        answers: ["8 см", "4√2 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 107,
        chapter: 1,
        title: "Доказательство перпендикулярности скрещивающихся прямых",
        question: "В тетраэдре DABC ребро DC перпендикулярно AB. На рёбрах DA и DB расположены середины U и V. Докажите, что DC перпендикулярно UV. UV — ______ треугольника ABD.",
        answers: ["начальная линия", "средняя линия", "конечная линия"],
        correct: 1,
        multiple: false
      },
      {
        id: 108,
        chapter: 1,
        title: "Сравнение проекций наклонных",
        question: "Дано, что BD перпендикулярен плоскости α, ∠BAD = 30°, ∠BCD = 45°. Определите меньшую из проекций наклонных (AB, BC, DC, AD) на плоскость α.",
        answers: ["AB", "BC", "DC", "AD"],
        correct: 2,
        multiple: false
      },
      {
        id: 109,
        chapter: 1,
        title: "Признак перпендикулярности прямой к плоскости",
        question: "В тетраэдре DABC точка M делит ребро AB пополам. Дано: CA = CB, DA = DB. Докажите, что прямая AB перпендикулярна плоскости (CDM). Определите вид треугольников ABC и DAB.",
        answers: ["равнобедренный", "неравнобедренный", "равностароний"],
        correct: 0,
        multiple: false
      },
      {
        id: 110,
        chapter: 1,
        title: "Угол между наклонной и плоскостью",
        question: "Отрезок VB длиной 7√2 м пересекает плоскость в точке O. Расстояния от концов отрезка до плоскости равны 5 м и 2 м. Найдите острый угол между отрезком VB и плоскостью.",
        answers: ["3°", "45°", "7°", "10°"],
        correct: 1,
        multiple: false
      },
      {
        id: 111,
        chapter: 1,
        title: "Свойство прямой, перпендикулярной к плоскости",
        question: "Через вершину прямого угла C треугольника ABC проведён перпендикуляр KC = 11 мм. Точка D — середина гипотенузы AB. Катеты AC = 72 мм, BC = 96 мм. Найдите расстояние KD.",
        answers: ["61 мм", "34 мм", "44 мм", "45 мм"],
        correct: 0,
        multiple: false
      },
      {
        id: 112,
        chapter: 1,
        title: "Расстояние между концами проекций",
        question: "Проекции наклонных AD и DC на плоскость α равны 4 см и 9 см. Угол между проекциями — 120°. Вычислите расстояние между концами проекций.",
        answers: ["√32 см", "√4 см", "√7 см", "√133 см"],
        correct:  3,
        multiple: false
      },
      {
        id: 113,
        chapter: 1,
        title: "Теорема о трёх перпендикулярах, расстояние от точки до стороны треугольника",
        question: "Равнобедренный треугольник ABE с боковыми сторонами 17 см и основанием AE = 16 см лежит в плоскости α. К плоскости проведён перпендикуляр CB = 5 см и наклонные CA, CE. Найдите расстояние от точки C до стороны AE.",
        answers: ["5√10 см", "√250 см"],
        correct:  1,
        multiple: false
      },
      {
        id: 114,
        chapter: 1,
        title: "Теорема о трёх перпендикулярах, прямоугольный треугольник",
        question: "Прямоугольный треугольник MBE (∠M = 90°) находится в плоскости α. BE = 17 см, ME = 8 см. К плоскости проведён перпендикуляр CB = 8 см. Вычислите расстояние от точки C до стороны ME.",
        answers: ["√289 см", "17 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 115,
        chapter: 1,
        title: "Доказательство от противного",
        question: "Прямая f перпендикулярна плоскости α и прямой t, которая не находится в плоскости α. Докажите, что прямая t параллельна плоскости α.",
        answers: ["параллельна", "пересекает"],
        correct: 0,
        multiple: false
      },
      {
        id: 116,
        chapter: 1,
        title: "Признак перпендикулярности прямой в расчётах расстояния до вершин квадрата",
        question: "От вершины K к плоскости квадрата ABCD проведена прямая KB так, что углы KBA и KBC равны 90°. Сторона квадрата 9 см, KB = 18 см. Рассчитайте расстояния от K до вершин A, C и D.",
        answers: ["KA ≈ 20,1 см; KC ≈ 20,1 см; KD ≈ 22,0 см", "KA ≈ 15 см; KC ≈ 13 см; KD ≈ 2 см"],
        correct: 0,
        multiple: false
      },
      {
        id: 117,
        chapter: 1,
        title: "Свойство точки на одинаковых расстояниях от вершин фигуры",
        question: "Точка K находится на расстоянии 21 см от плоскости прямоугольника ABCD и равноудалена от всех вершин. Стороны прямоугольника: 24 см и 32 см. Найдите расстояние от K до вершин.",
        answers: ["9 см", "29 см", "7 см", "25 см"],
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