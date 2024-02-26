// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "... хозяйка всегда внимательно смотрит на цены, когда ходит в магазин.",
    answer: "Б) Расчётливая",
    options: [
      "А) Расчётная",
      "",
      "Б) Расчётливая",
      "",
    ]
  },
    { 
    numb: 2,
    question: "Тебе надо расписаться в ... ведомости.",
    answer: "А) расчётной",
    options: [ 
      "А) расчётной", 
      "", 
      "Б) расчётливой", 
      ""  
    ]
  },
    {
    numb: 3, 
    question: "Ты любишь ... кашу?",
    answer: "А) гречневую",
    options: [
      "А) гречневую", 
      "",
      "Б) греческую",
      ""  
    ]
  },
    {
    numb: 4,
    question: "Он не мог совершить столь ... поступок.", 
    answer: "Б) безответственный",  
    options: [
      "А) безответный", 
      "", 
      "Б) безответственный", 
      ""  
    ]
  },
    {
    numb: 5,
    question: "Это была первая несчастная, ... любовь.", 
    answer: "А) безответная ",
    options: [ 
      "А) безответная ", 
      "",
      "Б) безответственная",  
      "" 
    ]
  },
  {
    numb: 6,
    question: "Андрей Иванович прошёл ... обследование в институте мозга.", 
    answer: "А) выборочное", 
    options: [
      "А) выборочное",
      "", 
      "Б) выборное",
      "" 
    ]  
  },
  {
    numb: 7,
    question: "Должность президента РФ – это ... должность.", 
    answer: "А) выборная", 
    options: [
      "А) выборная",
      "",  
      "Б) выборочная",
      ""  
    ]
  },
  {
    numb: 8,
    question: "Мы ходили искать ... собаку.",
    answer: "А) соседскую ", 
    options: [
      "А) соседскую ", 
      "", 
      "Б) соседнюю",
      ""   
    ]
  },
  {
    numb: 9,
    question: "Его друзья живут на ... улице.", 
    answer: "А) соседней",  
    options: [
      "А) соседней", 
      "",  
      "Б) соседской", 
      ""   
    ]
  },
  {
    numb: 10,
    question: "Дети поссорились и пришли к маме, чтобы она их ...", 
    answer: "Б) рассудила",
    options: [
      "А) рассуждала ",  
      "", 
      "Б) рассудила", 
      "" 
    ]
  },
  {
    numb: 11,
    question: "Друзья долго ... о последних политических событиях.", 
    answer: "А) рассуждали ", 
    options: [ 
      "А) рассуждали ", 
      "",
      "Б) рассудили", 
      ""   
    ]
  },
  {
    numb: 12,
    question: "Он ни в чём не виноват: его ...", 
    answer: "А) оговорили ",  
    options: [
      "А) оговорили ", 
      "", 
      "Б) обговорили", 
      ""  
    ]
  },
  {
    numb: 13,
    question: "Нужно ... все детали нашего путешествия.", 
    answer: "А) обговорить ",  
    options: [
      "А) обговорить ", 
      "",  
      "Б) оговорить", 
      ""  
    ]
  },
  {
    numb: 14,
    question: "Отправляясь в ... путь, необходимо брать с собой паспорт.", 
    answer: "Б) дальний", 
    options: [
      "А) дальнейший ",  
      "",  
      "Б) дальний", 
      ""    
    ]
  }, 
  {
    numb: 15,
    question: "Надо набраться сил: тебе предстоит ... путь.", 
    answer: "А) долгий",  
    options: [
      "А) долгий",  
      "",  
      "Б) долгосрочный", 
      ""    
    ]
  },
  {
    numb: 16,
    question: "Он уехал в ... командировку.", 
    answer: "А) длительную ",
    options: [
      "А) длительную ", 
      "",  
      "Б) длинную",  
      ""  
    ]
  },
  {
    numb: 17,
    question: "В актовом зале не смолкали ... аплодисменты.", 
    answer: "А) продолжительные ",  
    options: [
      "А) продолжительные ",  
      "",  
      "Б) длительные",  
      ""   
    ]
  },
  {
    numb: 18,
    question: "Из-за ... проливных дождей река вышла из берегов.", 
    answer: "Б) продолжительных", 
    options: [ 
      "А) длинных",  
      "",
      "Б) продолжительных",  
      ""    
    ]
  },
  {
    numb: 19,
    question: "Его отправили в ... командировку.",  
    answer: "Б) кратковременную",   
    options: [
      "А) краткую",  
      "",  
      "Б) кратковременную",  
      ""   
    ]
  },
  {
    numb: 20, 
    question: "Прошу вас в ... сроки представить отчёт о командировке.",  
    answer: "А) кратчайшие",   
    options: [
      "А) кратчайшие", 
      "",   
      "Б) кратковременные",  
      ""   
    ]
  },
  {
    numb: 21,
    question: " В словах «розовый» и «разовый» ... корни.",  
    answer: "Б) разные",  
    options: [
      "А) разнообразные",   
      "",  
      "Б) разные",  
      ""    
    ]
  }, 
  {
    numb: 22,
    question: "Преступники пойманы. Идёт ...",  
    answer: "А) следствие",   
    options: [
      "А) следствие",   
      "",   
      "Б) последствие",  
      ""     
    ]
  },
  {
    numb: 23,
    question: "Она тратит деньги очень ...",  
    answer: "А) экономно", 
    options: [
      "А) экономно",  
      "", 
      "Б) экономично",  
      ""   
    ]
  },
  {
    numb: 24,
    question: "... кризис повлиял на все сферы жизни общества.", 
    answer: "Б) Экономический",  
    options: [
      "А) Экономичный", 
      "", 
      "Б) Экономический", 
      "", 
    ]
  },
    { 
    numb: 25,
    question: "Китайская кухня очень ...", 
    answer: "Б) разнообразна",
    options: [ 
      "А) различна  ",  
      "", 
      "Б) разнообразна", 
      ""  
    ]
  },
    {
    numb: 26, 
    question: "На встрече рассматривались вопросы ... для обеих стран.", 
    answer: "А) общие",  
    options: [
      "А) общие", 
      "",
      "Б) общественные", 
      ""  
    ]
  },

];