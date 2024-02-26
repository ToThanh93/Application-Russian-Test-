// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Ей кажется, … Петру не хочется уезжать за границу.",
    answer: "В) что", 
    options: [
      "А) как",
      "Б) чтобы",
      "В) что",
      "Г) когда",
    ] 
  },
    { 
    numb: 2,
    question: "Она ничего никому не сказала, … знала всё.",
    answer: "Б) хотя и", 
    options: [ 
      "А) по мере того как ", 
      "Б) хотя и", 
      "В) когда",  
      "Г) пока не"  
    ]
  },
    {
    numb: 3, 
    question: "... менялись обстоятельства, Денис находил новые решения проблемы.",
    answer: "Г) По мере того как", 
    options: [
      "А) Как", 
      "Б) Потому что",
      "В) Пока не",
      "Г) По мере того как"  
    ]
  },
    {
    numb: 4,
    question: "Учёный долго экспериментировал, … получил нужного результата.", 
    answer: "А) пока не",   
    options: [
      "А) пока не", 
      "Б) когда", 
      "В) по мере того как",  
      "Г) чтобы"  
    ]
  },
    {
    numb: 5,
    question: "... в семье Аркадия родился ребёнок, им потребовалась няня.", 
    answer: "Г) Как только", 
    options: [ 
      "А) Как", 
      "Б) Потому что",
      "В) По мере того как",  
      "Г) Как только"  
    ]
  },
  {
    numb: 6,
    question: "... времени на научную работу не оставалось, Татьяна решила уволиться с работы.", 
    answer: "А) Поскольку",  
    options: [
      "А) Поскольку", 
      "Б) Потому что", 
      "В) В то время как ",
      "Г) Хотя" 
    ]  
  },
  {
    numb: 7,
    question: "Она боялась, … проговориться и не раскрыть чужого секрета.", 
    answer: "Б) как бы не",  
    options: [
      "А) чтобы ",
      "Б) как бы не",   
      "В) раз",
      "Г) пока не"  
    ]
  },
  {
    numb: 8,
    question: "Он будет тренироваться, ... победит.",
    answer: "В) пока не",  
    options: [
      "А) в то время как", 
      "Б) чтобы",  
      "В) пока не",
      "Г) по мере того как"   
    ]
  },
  {
    numb: 9,
    question: "... с утра лил дождь, Маргарита отправилась на дачу.", 
    answer: "А) Хотя",   
    options: [
      "А) Хотя", 
      "Б) По мере того как",  
      "В) Так как",  
      "Г) Потому что"   
    ]
  },
  {
    numb: 10,
    question: "... времени на сборы оставалось мало, мы решили поторопиться.", 
    answer: "Г) Так как", 
    options: [
      "А) Если",  
      "Б) Хотя", 
      "В) Потому что", 
      "Г) Так как" 
    ]
  },
  {
    numb: 11,
    question: "Джулия долго думала, … найти выход из сложного положения.", 
    answer: "Б) как",  
    options: [ 
      "А) что", 
      "Б) как", 
      "В) если", 
      "Г) как бы не"   
    ]
  },
  {
    numb: 12,
    question: "Не ходи на этот спектакль, … тебе не нравится эта пьеса.", 
    answer: "Г) раз",   
    options: [
      "А) что", 
      "Б) когда", 
      "В) хотя",  
      "Г) раз"  
    ]
  },
  {
    numb: 13,
    question: "Директор фирмы не принимает посетителей, ... он уехал в командировку.", 
    answer: "Б) в связи с тем что",   
    options: [
      "А) раз", 
      "Б) в связи с тем что",  
      "В) если ", 
      "Г) когда"  
    ]
  },
  {
    numb: 14,
    question: "Пётр сидел с детьми, ... Елена готовилась к защите диссертации.", 
    answer: "А) в то время как",  
    options: [
      "А) в то время как",  
      "Б) если",  
      "В) как",  
      "Г) хотя"    
    ]
  }, 
  {
    numb: 15,
    question: "Марина не смогла пойти на премьеру, … ей не удалось купить билет.", 
    answer: "Б) поскольку",   
    options: [
      "А) если",  
      "Б) поскольку",   
      "В) раз", 
      "Г) чтобы"    
    ]
  },
  {
    numb: 16,
    question: "... кончится дождь, я тебя никуда не отпущу.", 
    answer: "Б) Пока не", 
    options: [
      "А) Если", 
      "Б) Пока не",  
      "В) По мере того как",   
      "Г) Поскольку"  
    ]
  },
  {
    numb: 17,
    question: "... ты сейчас откажешься от этой работы, то потом пожалеешь.", 
    answer: "В) Если",   
    options: [
      "А) Раз",  
      "Б) Когда",   
      "В) Если",  
      "Г) Так как"   
    ]
  },
  {
    numb: 18,
    question: "Леонид шёл по скользкой мостовой, думая, ... упасть.", 
    answer: "В) как бы не",  
    options: [ 
      "А) чтобы ",  
      "Б) что",
      "В) как бы не",   
      "Г) как"    
    ]
  },
  {
    numb: 19,
    question: "Владимир сидел и думал, … делать, как себя вести в этой ситуации.",  
    answer: "Б) что",    
    options: [
      "А) как",  
      "Б) что",  
      "В) чтобы",   
      "Г) как бы не"   
    ]
  },
  {
    numb: 20, 
    question: "... решение уже было принято, поздно было что-либо менять.",  
    answer: "А) Так как",    
    options: [
      "А) Так как", 
      "Б) Чтобы",    
      "В) По мере того как",  
      "Г) Хотя"   
    ]
  },

];