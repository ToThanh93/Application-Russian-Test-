// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Игорь вышел из дома и <u>не спеша</u> пошёл по улице.",
    answer: "В) как?", 
    options: [
      "А) когда?",
      "Б) почему? ",
      "В) как?",
      "Г) зачем?",
    ]
  },
    { 
    numb: 2,
    question: "Виктор вскочил и <u>пулей</u> вылетел из комнаты.",
    answer: "Б) как? ",
    options: [ 
      "А) зачем?", 
      "Б) как? ", 
      "В) где?", 
      "Г) почему?"  
    ]
  },
    {
    numb: 3, 
    question: "<u>Обиженная</u> на брата за грубость, она долго не звонила ему.",
    answer: "Б) почему?",
    options: [
      "А) когда?", 
      "Б) почему?",
      "В) как?",
      "Г) зачем?"  
    ]
  },
    {
    numb: 4,
    question: "Он лежал на диване <u>с закрытыми глазами.</u>", 
    answer: "Б) как?",  
    options: [
      "А) почему?", 
      "Б) как?", 
      "В) когда?", 
      "Г) какой?"  
    ]
  },
    {
    numb: 5,
    question: "Я пойду в библиотеку за учебником <u>к экзамену.</u>", 
    answer: "Б) каким?",
    options: [ 
      "А) зачем?", 
      "Б) каким?",
      "В) когда?",  
      "Г) где?" 
    ]
  },
  {
    numb: 6,
    question: "У Андрея пересохло в горле, он <u>залпом</u> выпил стакан холодной воды.", 
    answer: "Г) как?", 
    options: [
      "А) почему?",
      "Б) зачем?", 
      "В) когда?",
      "Г) как?" 
    ]  
  },
  {
    numb: 7,
    question: "Мальчик тянул дверь <u>изо всех сил</u>, но не мог открыть её.", 
    answer: "В) как?", 
    options: [
      "А) почему? ",
      "Б) каких?",  
      "В) как?",
      "Г) где?"  
    ]
  },
  {
    numb: 8,
    question: "Алла рассказывала, что с ней случилось, а мама <u>молча</u> слушала.",
    answer: "Г) как?", 
    options: [
      "А) зачем? ", 
      "Б) когда?", 
      "В) какая?",
      "Г) как?"   
    ]
  },
  {
    numb: 9,
    question: "Этот композитор часто пишет музыку <u>к кинофильмам.</u>", 
    answer: "А) какую? ",  
    options: [
      "А) какую? ", 
      "Б) как?",  
      "В) где?", 
      "Г) когда?"   
    ]
  },
  {
    numb: 10,
    question: "<u>От яркого солнца</u> у меня заболели глаза.", 
    answer: "А) почему?",
    options: [
      "А) почему?",  
      "Б) как?", 
      "В) когда?", 
      "Г) зачем?" 
    ]
  },
  {
    numb: 11,
    question: "<u>Расстроенный</u> болезнью сына, он не мог сосредоточиться на работе.", 
    answer: "Б) почему? ", 
    options: [ 
      "А) как?", 
      "Б) почему? ",
      "В) когда?", 
      "Г) чем?"   
    ]
  },
  {
    numb: 12,
    question: "В театре я встретил друга <u>по университету</u>.", 
    answer: "А) какого?",  
    options: [
      "А) какого?", 
      "Б) где?", 
      "В) почему?", 
      "Г) когда?"  
    ]
  },
  {
    numb: 13,
    question: "Артисты выступили с концертом в доме <u>для престарелых</u>.", 
    answer: "В) каком?",  
    options: [
      "А) где?", 
      "Б) как?",  
      "В) каком?", 
      "Г) зачем?"  
    ]
  },
  {
    numb: 14,
    question: "Вчера я весь вечер готовилась к экзамену <u>по литературе</u>.", 
    answer: "Б) какому?", 
    options: [
      "А) зачем?",  
      "Б) какому?",  
      "В) как?", 
      "Г) когда?"    
    ]
  }, 
  {
    numb: 15,
    question: "<u>Растерявшись</u> от неожиданности, Андрей не мог сказать ни слова.", 
    answer: "В) почему?",  
    options: [
      "А) когда?",  
      "Б) как?",  
      "В) почему?", 
      "Г) какой?"    
    ]
  },
  {
    numb: 16,
    question: "Мне надо купить вазу <u>для цветов</u>.", 
    answer: "В) какую?",
    options: [
      "А) зачем?", 
      "Б) где?",  
      "В) какую?",  
      "Г) что?"  
    ]
  },
  {
    numb: 17,
    question: "Мою сестру отправили в санаторий <u>на лечение</u>.", 
    answer: "В) зачем?",  
    options: [
      "А) где?",  
      "Б) почему? ",  
      "В) зачем?",  
      "Г) как?"   
    ]
  },
  {
    numb: 18,
    question: "Андрей <u>от обиды</u> наговорил отцу много резких слов.", 
    answer: "В) почему?", 
    options: [ 
      "А) зачем? ",  
      "Б) когда?",
      "В) почему?",  
      "Г) где?"    
    ]
  },
  {
    numb: 19,
    question: "Лошадь скакала <u>галопом</u>, но неожиданно споткнулась и упала.",  
    answer: "А) как?",   
    options: [
      "А) как?",  
      "Б) почему?",  
      "В) куда?",  
      "Г) когда?"   
    ]
  },
  {
    numb: 20, 
    question: "После тренажёрного зала у меня <u>с непривычки</u> болели руки и ноги.",  
    answer: "В) почему?",   
    options: [
      "А) как?", 
      "Б) какой?",   
      "В) почему?",  
      "Г) зачем?"   
    ]
  },

];