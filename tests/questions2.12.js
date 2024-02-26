// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Тебе звонил человек, которого я не знаю.",
    answer: "А) Тебе кто-то звонил. ",
    options: [
      "А) Тебе кто-то звонил. ",
      "",
      "Б) Тебе кое-кто звонил.",
      "",
    ]
  },
    { 
    numb: 2,
    question: "Мне нужно купить подарок маме, и я знаю, что купить.",
    answer: "А) Мне нужно кое-что купить маме. ",
    options: [ 
      "А) Мне нужно кое-что купить маме. ", 
      "", 
      "Б) Мне нужно что-нибудь купить маме.", 
      ""  
    ]
  },
    {
    numb: 3, 
    question: "Есть человек, который говорит по-английски?",
    answer: "Б) Кто-нибудь говорит по-английски?",
    options: [
      "А) Кто-то говорит по-английски? ", 
      "",
      "Б) Кто-нибудь говорит по-английски?",
      ""  
    ]
  },
    {
    numb: 4,
    question: "Я хочу задать тебе вопрос, который меня волнует.", 
    answer: "Б) Я хочу тебя кое о чём спросить.",  
    options: [
      "А) Я хочу тебя спросить о чём- нибудь.", 
      "", 
      "Б) Я хочу тебя кое о чём спросить.", 
      ""  
    ]
  },
    {
    numb: 5,
    question: "Я уже видел этого человека, но не помню, где.", 
    answer: "А) Где-то я уже видел этого человека. ",
    options: [ 
      "А) Где-то я уже видел этого человека. ", 
      "",
      "Б) Кое-где я уже видел этого человека.",  
      "" 
    ]
  },
  {
    numb: 6,
    question: "Ты видел в своей жизни солнечное затмение?", 
    answer: "Б) Ты когда-нибудь видел солнеч- ное затмение?", 
    options: [
      "А) Ты когда-то видел солнечное затмение?",
      "", 
      "Б) Ты когда-нибудь видел солнеч- ное затмение?",
      "" 
    ]  
  },
  {
    numb: 7,
    question: "Ты едешь отдыхать?! Куда?", 
    answer: "Б) Ты куда-то едешь отдыхать? ", 
    options: [
      "А) Ты куда-нибудь едешь отдыхать?",
      "",  
      "Б) Ты куда-то едешь отдыхать? ",
      ""  
    ]
  },
  {
    numb: 8,
    question: "Сюрприз! Я спрятал подарок для тебя.",
    answer: "Б) Я спрятал кое-что для тебя.", 
    options: [
      "А) Я спрятал что-нибудь для тебя", 
      "", 
      "Б) Я спрятал кое-что для тебя.",
      ""   
    ]
  },
  {
    numb: 9,
    question: "На пальто в разных местах были видны пятна.", 
    answer: "А) Кое-где на пальто были видны пятна.",  
    options: [
      "А) Кое-где на пальто были видны пятна.", 
      "",  
      "Б) Где-то на пальто были видны пятна.", 
      ""   
    ]
  },
  {
    numb: 10,
    question: "Купи на ужин продукты, всё равно какие.", 
    answer: "А) Купи что-нибудь на ужин. ",
    options: [
      "А) Купи что-нибудь на ужин. ",  
      "", 
      "Б) Купи кое-что на ужин.", 
      "" 
    ]
  },
  {
    numb: 11,
    question: "Он не готовился к экзамену, но непонятным образом сдал его на «4».", 
    answer: "А) Он не готовился к экзамену, но как-то сдал его на «4». ", 
    options: [ 
      "А) Он не готовился к экзамену, но как-то сдал его на «4». ", 
      "",
      "Б) Он не готовился к экзамену, но кое-как сдал его на «4».", 
      ""   
    ]
  },
  {
    numb: 12,
    question: "Он всё делает плохо.", 
    answer: "Б) Он всё делает кое-как.",  
    options: [
      "А) Он всё делает как-то. ", 
      "", 
      "Б) Он всё делает кое-как.", 
      ""  
    ]
  },
  {
    numb: 13,
    question: "- Как поджарить яйца? - Да всё равно как.", 
    answer: "А) - Да как-нибудь.",  
    options: [
      "А) - Да как-нибудь.", 
      "",  
      "Б) - Да кое-как.", 
      ""  
    ]
  },
  {
    numb: 14,
    question: "Дай мне фломастер, всё равно какой!", 
    answer: "Б) Дай мне какой-нибудь фломастер.", 
    options: [
      "А) Дай мне какой-то фломастер.",  
      "",  
      "Б) Дай мне какой-нибудь фломастер.", 
      ""    
    ]
  }, 
  {
    numb: 15,
    question: "Эти цветы принесла незнакомая мне женщина.", 
    answer: "А) Эти цветы принесла какая-то женщина.",  
    options: [
      "А) Эти цветы принесла какая-то женщина.",  
      "",  
      "Б) Эти цветы принесла кое-какая женщина.", 
      ""    
    ]
  },
  {
    numb: 16,
    question: "У тебя есть деньги? Хотя бы немного.", 
    answer: "Б) У тебя есть какие-нибудь деньги?",
    options: [
      "А) У тебя есть кое-какие деньги? ", 
      "",  
      "Б) У тебя есть какие-нибудь деньги?",  
      ""  
    ]
  },
  {
    numb: 17,
    question: "Дай мне любой толковый словарь.", 
    answer: "А) Дай мне какой-нибудь толковый словарь.",  
    options: [
      "А) Дай мне какой-нибудь толковый словарь.",  
      "",  
      "Б) Дай мне кое-какой толковый словарь.",  
      ""   
    ]
  },
  {
    numb: 18,
    question: "Дима уже купил несколь- ко билетов, но я не знаю сколько.", 
    answer: "А) Дима уже купил сколько-то билетов.", 
    options: [ 
      "А) Дима уже купил сколько-то билетов.",  
      "",
      "Б) Дима купил сколько-нибудь билетов.",  
      ""    
    ]
  },
  {
    numb: 19,
    question: "Давай пойдём в театр. Всё равно в какой.",  
    answer: "Б) Давай пойдём в какой-нибудь театр.",   
    options: [
      "А) Давай пойдём в какой-то театр.  ",  
      "",  
      "Б) Давай пойдём в какой-нибудь театр.",  
      ""   
    ]
  },
  {
    numb: 20, 
    question: "Давай пообедаем в любом кафе на Невском проспекте.",  
    answer: "А) Давай пообедаем в каком- нибудь кафе на Невском проспекте.",   
    options: [
      "А) Давай пообедаем в каком- нибудь кафе на Невском проспекте.", 
      "",   
      "Б) Давай пообедаем в каком-то кафе на Невском проспекте.",  
      ""   
    ]
  },

];