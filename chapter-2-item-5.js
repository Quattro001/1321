let wrongCounter = localStorage.getItem('wrongCounter') ? parseInt(localStorage.getItem('wrongCounter')) : 0;
    let currentSelectedAnswers = [];
    let currentTask = null;
    
    const tasks = [
      {
        id: 143,
        chapter: 1,
        title: "Вопросы по векторам в пространстве",
        question: "Сумму трёх некомпланарных векторов изображает ___ параллелепипеда, построенного на этих векторах. Выбери правильное пропущенное слово:",
        answers: ["медиана", "биссектриса", "диагональ", "перпендикуляр"],
        correct: 2,
        multiple: false
      },
      {
        id: 144,
        chapter: 1,
        title: "Координаты вектора суммы",
        question: "Даны векторы a ={-6;-4;3}, b ={4;-10;5}, c ={7;-7;-10} и d ={8;5;-3}. Вычисли координаты следующих векторных сумм: a + c, a + b + d, a + b + c + d.",
        answers: ["{-1;-2;-3}", "{6;9;5}", "{1;-11;-7}", "{13;-16;5}", "{13;-16;-5}", "{6;-9;5}", "{0;0;0}", "{1;2;3}"],
        correct: [2, 5, 4],
        multiple: true
      },
      {
        id: 145,
        chapter: 1,
        title: "Выражение, содержащее векторы",
        question: "Упрости выражение 2 i +4(4 k -4 i )-2(2 i -2 k +2 j ) и выбери правильный вариант ответа:",
        answers: ["-17 i +21 k -4 j", "-17 i +21 k -3 j", "-17 i +20 k -4 j", "-18 i +20 k -4 j"],
        correct: 3,
        multiple: false
      },
      {
        id: 146,
        chapter: 1,
        title: "Скалярное произведение векторов, данных в координатах",
        question: "Определи скалярное произведение векторов a ={-8;1;-2} и b ={-6;-6;3}.",
        answers: ["42", "30", "24", "36"],
        correct: 3,
        multiple: false
      },
      {
        id: 147,
        chapter: 1,
        title: "Коллинеарные векторы",
        question: "Отметь рациональные числа, которые находяться между числами 0,682 и 1,588",
        answers: ["Противоположно направленные", "Сонаправленные", "Противоположные", "Коллинеарные"],
        correct: [0, 2, 3],
        multiple: true
      },
      {
        id: 148,
        chapter: 1,
        title: "Скалярное произведение векторов, если дан угол",
        question: "Даны векторы a и b, где |a| =3, |b| =8, ∠(a, b) =120°. Определи скалярное произведение a·b.",
        answers: ["-12√1", "12√2", "-10√3", "15√1"],
        correct: 0,
        multiple: false
      },
      {
        id: 149,
        chapter: 1,
        title: "Координаты вектора разности",
        question: "Даны векторы a ={-5;-3;1}, b ={4;-2;2}, c ={9;-2;-2} и d ={5;6;-6}. Вычисли координаты данных векторов:",
        answers: ["{-14;-1;3}","{-1;-2;-3}", "{6;9;5}", "{1;-11;-7}", "{-6;-11;9}", "{-15;-9;11}"],
        correct: [0, 4, 5],
        multiple: true
      },
      {
        id: 150,
        chapter: 1,
        title: "Основные определения",
        question: "Дан параллелепипед ABCDA1B1C1D1. Какие векторы равны?",
        answers: ["В1А1 и D1C1", "D1C1 и AB", "AB и D1C"],
        correct: [0, 1],
        multiple: true
      },
      {
        id: 151,
        chapter: 1,
        title: "Координаты произведения вектора на число",
        question: "Даны векторы a{-4;-8;8}, b{1;-2;3}, c{5;-4;-10}. Вычисли координаты вектора p = 4a + 3b - 3c.",
        answers: ["{-28;-26;71}", "{28;26;-71}", "{-16;-32;32}", "{3;-6;9}"],
        correct: 0,
        multiple: false
      },
      {
        id: 152,
        chapter: 1,
        title: "Сумма и разность векторов",
        question: "Есть тетраэдр ABCD. Назови вектор, который является суммой векторов AB и BD.",
        answers: ["AC", "AD", "BC", "CD"],
        correct: 1,
        multiple: false
      },
      {
        id: 153,
        chapter: 1,
        title: "Компланарные векторы в параллелепипеде",
        question: "Определи, компланарны ли данные три вектора: BA1, DC1, A1C1.",
        answers: ["нет", "да"],
        correct: 0,
        multiple: false
      },
      {
        id: 154,
        chapter: 1,
        title: "Знание теоретических основ",
        question: "Вектор, сонаправленный любому вектору — это...",
        answers: ["равный по длине вектор", "нулевой вектор", "равный ему вектор"],
        correct: 1,
        multiple: false
      },
      {
        id: 155,
        chapter: 1,
        title: "Координаты середины отрезка",
        question: "Точка M — середина отрезка AB. Дана точка A(2; 4; 2) и точка B(8; 8; 6). Найди координаты точки M.",
        answers: ["(5; 6; 4)", "(4; 6; 3)", "(6; 5; 4)", "(5; 4; 6)"],
        correct: 0,
        multiple: false
      },
      {
        id: 156,
        chapter: 1,
        title: "Сложение и вычитание векторов (1)",
        question: "Дан параллелепипед ABCDA1B1C1D1. Точки M и K — середины рёбер A1D1 и B1C1 соответственно. Найди: A1M + MA =",
        answers: ["A1A", "AA1", "AD", "AB"],
        correct: 0,
        multiple: false
      },
      {
        id: 157,
        chapter: 1,
        title: "Длина вектора",
        question: "Векторы |a и b| перпендикулярны. Вычислите длину вектора |a} + b| и вектора |a - b|, если |a| = 9 см и |b| = 40 см.",
        answers: ["40 см", "41 см", "49 см", "81 см"],
        correct:  1,
        multiple: false
      },
      {
        id: 158,
        chapter: 1,
        title: "Координаты конечной точки отрезка",
        question: "Точка M — середина отрезка AB. Даны координаты точки A(4; 3; 1) и точки M(6; 7; 4). Найдите координаты точки B.",
        answers: ["B(8; 11; 7)", "B(5; 5; 3)", "B(2; 7; 7)", "B(6; 7; 4)"],
        correct: 0,
        multiple: false
      },
      {
        id: 159,
        chapter: 1,
        title: "Арифметические операции с векторами",
        question: "На плоскости α лежит прямоугольник ABCD. Через вершины проведены перпендикуляры. Точки F и K — середины сторон AB и DC. Определите, каким векторам соответствуют выражения: 0,5·CD + KJ.",
        answers: ["KF", "FC", "DK", "FD"],
        correct: 0,
        multiple: false
      },
      {
        id: 160,
        chapter: 1,
        title: "Понятие компланарности векторов",
        question: "В параллелепипеде даны векторы KM и L1N1. Какой из предложенных векторов образует с ними тройку компланарных?",
        answers: ["KL", "NL1"],
        correct: 0,
        multiple: false
      },
      {
        id: 161,
        chapter: 1,
        title: "Определение векторов заданного типа",
        question: "В параллелепипеде A1B1C1D1ABCD назови все векторы, сонаправленные с вектором DC.",
        answers: ["D1C1", "AB", "AD", "BC"],
        correct: [0, 1],
        multiple: true
      },
      {
        id: 162,
        chapter: 1,
        title: "Определение векторов заданного типа",
        question: "аны векторы a{-2; -1; 3} и b{-2; k; -2}. Найдите значение k, при котором векторы перпендикулярны.",
        answers: ["-2", "2", "0", "1"],
        correct: 0,
        multiple: false
      },
      {
        id: 163,
        chapter: 1,
        title: "Сумма векторов",
        question: "В параллелепипеде ABCDA1B1C1D1 найдите вектор, равный сумме D1C1 + B1A.",
        answers: ["C1D", "D1D", "C1A1", "D1A1"],
        correct: 3,
        multiple: false
      },
      {
        id: 164,
        chapter: 1,
        title: "Умножение вектора на число",
        question: "В равностороннем треугольнике ABC высоты AN, BK и CM пересекаются в точке O. Найдите значение k, если AB = k · AM.",
        answers: ["2/√3", "(2√3)/3", "√3", "1/2"],
        correct: [0, 1],
        multiple: true
      },
      {
        id: 165,
        chapter: 1,
        title: "Перпендикулярные векторы",
        question: "Даны векторы a{3; -3; 9} и b{-4; -2; 1}. Образуют ли они прямой угол?",
        answers: ["Да", "Нет", "Неизвестно"],
        correct: 1,
        multiple: false
      },
      {
        id: 166,
        chapter: 1,
        title: "Скалярное произведение векторов",
        question: "Даны векторы a{-7; 3; -9} и b{7; x; -6}. Найдите значение x, при котором ab = 17.",
        answers: ["4", "2", "0", "1"],
        correct: 0,
        multiple: false
      },
      {
        id: 167,
        chapter: 1,
        title: "Длина вектора",
        question: "Вычислите длину вектора AB, если даны точки A(6; 1; -8) и B(12; 8; -2).",
        answers: ["11", "√121", "13", "√169"],
        correct: 0,
        multiple: false
      },
      {
        id: 168,
        chapter: 1,
        title: "Определение по чертежу векторов",
        question: "В параллелепипеде с прямоугольным основанием точки K, L, M — середины рёбер AA₁, B₁C₁, CC₁ соответственно. Назовите вектор, равный вектору MC₁, отложенный от точки K.",
        answers: ["KA1", "KC1","KB1","KD1" ],
        correct: 0,
        multiple: false
      },
      {
        id: 169,
        chapter: 1,
        title: "Выражение вектора суммы",
        question: "В параллелограмме ABCD точки E, F, G, H — середины сторон AB, BC, CD, AD. Выразите вектор EO + OG через вектор AH.",
        answers: ["1/2AH", "-1/2AH", "2AH", "-2AH" ],
        correct: 0,
        multiple: false
      },
      {
        id: 170,
        chapter: 1,
        title: "Сложение векторов в пространстве",
        question: "В параллелепипеде найдите сумму векторов: 1)BC + CD + DD1 + D1C1; 2)AA1 + DC + C1D; 3)CC1 + DA + BA + B1C.",
        answers: ["1)BC1; 2)AD; 3)0", "1)BD1; 2)AA1; 3)CC1", "1)BC; 2)DC; 3)DA", "1)0; 2)0; 3)0"],
        correct:0,
        multiple: false
      },
      {
        id: 171,
        chapter: 1,
        title: "Угол между векторами",
        question: "Даны векторы a{-6; 4; -1} и b{7; 7; -3}. Определите, какой угол они образуют.",
        answers: ["Тупой угол", "Прямой угол", "Острый угол"],
        correct: 0,
        multiple: false
      },
      {
        id: 172,
        chapter: 1,
        title: "Длина вектора суммы или разности",
        question: "Даны векторы a{1; 2; 9} и b{8; 5; 0}. Вычислите модули их суммы и разности.",
        answers: ["√211", "√111", "√139"],
        correct: [0, 2],
        multiple: true
      },
      {
        id: 173,
        chapter: 1,
        title: "Определение «равных по длине» векторов",
        question: "В правильной усечённой пирамиде ABCDA1B1C1D1 длина вектора AD = 18, а A1D1 = 9. Вектором, равным по длине вектору B1D1, является...",
        answers: ["A1C1", "AC", "B1C1", "BD"],
        correct: 0,
        multiple: false
      },
      {
        id: 174,
        chapter: 1,
        title: "Выражение вектора разности",
        question: "В параллелограмме ABCD точки E и F — середины сторон BC и AB соответственно. Выразите вектор AO - CO через вектор FE.",
        answers: ["2·FE", "−2·FE", "0.5·FE", "−0.5·FE"],
        correct: 0,
        multiple: false
      },
      {
        id: 175,
        chapter: 1,
        title: "Длина вектора",
        question: "Дан куб ABCDA₁B₁C₁D₁ с длиной ребра 3 см. На трёх рёбрах с общей вершиной заданы три некомпланарных вектора. Определите длину вектора d' = b + c'.",
        answers: ["4.2 см", "4 см", "2 см", "3 см"],
        correct:  1,
        multiple: false
      },
      {
        id: 176,
        chapter: 1,
        title: "Косинус угла между векторами",
        question: "Даны векторы a{-3; 0; 4} и b{1; 2; 2}. Определите значение косинуса угла между этими векторами.",
        answers: ["1/3", "3/3", "4/3", "2/3"],
        correct: 0,
        multiple: false
      },
      {
        id: 177,
        chapter: 1,
        title: "Модуль вектора",
        question: "Вычислите длину вектора p, еслиp = 2a - 3b, где a= {7; 9; 7}, b={0; 3; 2}.",
        answers: ["√41", "√31", "√341", "√300"],
        correct: 2,
        multiple: false
      },
      {
        id: 178,
        chapter: 1,
        title: "Использование коллинеарности векторов",
        question: "Дано KK1 = LL1. Как расположены прямые KL и K1L1 относительно друг друга?",
        answers: ["Параллельны", "Пересекаются", "Совпадают", "Скрещиваются"],
        correct: 0,
        multiple: false
      },
      {
        id: 179,
        chapter: 1,
        title: "Определение векторов заданного типа",
        question: "Вычислите результат выражения: DF + 2AF - 0,5FD + 3FA - 1,5DF + AK.",
        answers: ["AK + AF", "DF + FA", "0", "AK"],
        correct: 0,
        multiple:false
      },
      {
        id: 180,
        chapter: 1,
        title: "Разложение векторов в параллелепипеде",
        question: "В параллелепипеде A1B1C1D1ABCD назови все векторы, сонаправленные с вектором DC.",
        answers: ["-2a + 1b + 3·c", "-1a + 2b + 1c", "-1a + 1b + 1c"],
        correct: 2,
        multiple: false
      },
      {
        id: 181,
        chapter: 1,
        title: "Определение угла между векторами в кубе",
        question: "В кубе определите угол между векторами, образованными точками A1, B1, D, C.",
        answers: ["60°", "90°", "45°", "120°"],
        correct: 0,
        multiple: false
      },
      {
        id: 182,
        chapter: 1,
        title: "Коллинеарные векторы",
        question: "Найди значения x и y, при которых векторы a{28; x; 35} и b{8; -2; y} коллинеарны.",
        answers: ["x = -2; y = 0", "x = -7; y = 10", "x = -10; y = 70"],
        correct: 1,
        multiple: false
      },
      {
        id: 183,
        chapter: 1,
        title: "Сложение и вычитание векторов (2)",
        question: "Даны точки A, B, C, D, E. Вычислите результат сложения векторов: (AB + CA + DC) + (BC + CD) + DB.",
        answers: ["DB", "AC", "BC",],
        correct: 0,
        multiple: false
      },
      {
        id: 184,
        chapter: 1,
        title: "Разложение вектора по некомпланарным векторам",
        question: "В правильном тетраэдре разложите вектор BC по некомпланарным векторам a, b, c, заданным на рёбрах из одной вершины.",
        answers: ["-0a+ 13b + 10c", "-5a+ 5b + 5c", "-1a+ 1b + 0c"],
        correct: 2,
        multiple: false
      },
      {
        id: 185,
        chapter: 1,
        title: "Косинус угла треугольника",
        question: "Определите косинус угла ∠L треугольника PLM с вершинами P(2;0;-2), L(3;2;0), M(-1;2;0).",
        answers: ["1/3", "0.5",  "0.25", "-0.333"],
        correct: 0,
        multiple: false
      },
      {
        id: 186,
        chapter: 1,
        title: "Медианы треугольника, даны координаты вершин треугольника",
        question: "Даны координаты вершин треугольника ABC: A(2; 3; 2), B(4; 3; 4), C(8; 9; 8). Вычислите длины медиан AD, BE, CF.",
        answers: ["AD = √41", "BE = √11", "AD = √34", "BE = √13", "CF = √75", "CF = √86"],
        correct: [0, 1, 5],
        multiple: true
      },
      {
        id: 187,
        chapter: 1,
        title: "Сумма нескольких векторов",
        question: "В тетраэдре DABC упростите выражение: DB + CA + BC + AB.",
        answers: ["DB", "AB", "AD", "BC"],
        correct: 0,
        multiple: false
      },
      {
        id: 188,
        chapter: 1,
        title: "Умножение вектора на число",
        question: "В кубе с центром O найдите коэффициенты для равенств: 1)AB = n CD; 2) CO = n CA1; 3) AC1 = n OC1; 4)KK1 = n OK.",
        answers: ["1) -1; 2) 0.5; 3) 2; 4) 2", "1) 1; 2) 1; 3) 1; 4) 1", "1) -1; 2) 1; 3) 2; 4) 0.5", "1) 0; 2) 0.5; 3) 1; 4) 2"],
        correct: 0,
        multiple: false
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