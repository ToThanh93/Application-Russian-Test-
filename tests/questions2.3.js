// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Когда я готовила, я … руку.",
    answer: "Б) обожгла",
    options: [
      "А) сожгла",
      "Б) обожгла",
      "В) пережгла",
      "Г) выжгла",
    ] 
  },
    {  
    numb: 2,
    question: "При взлёте самолёта пассажиров просят ... ремни.",
    answer: "А) пристегнуть", 
    options: [ 
      "А) пристегнуть", 
      "Б) расстегнуть", 
      "В) застегнуть", 
      "Г) отстегнуть"  
    ]
  },
    {
    numb: 3, 
    question: "Чтобы сделать плот, мы ... несколько толстых брёвен.",
    answer: "Г) связали", 
    options: [
      "А) развязали", 
      "Б) отвязали",
      "В) привязали",
      "Г) связали"  
    ]
  },
    {
    numb: 4,
    question: "Два университета ... договор о сотрудничестве.", 
    answer: "А) заключили",   
    options: [
      "А) заключили", 
      "Б) подключили", 
      "В) переключили", 
      "Г) включили"  
    ]
  },
    {
    numb: 5,
    question: "Ольга не хотела ехать в Москву, но друзья ... её.", 
    answer: "Г) уговорили", 
    options: [ 
      "А) заговорили", 
      "Б) поговорили",
      "В) отговорили",  
      "Г) уговорили" 
    ]
  },
  {
    numb: 6,
    question: "После долгих поисков милиция ... преступника.", 
    answer: "В) задержала",  
    options: [
      "А) удержала",
      "Б) сдержала", 
      "В) задержала",
      "Г) выдержала" 
    ]  
  },
  {
    numb: 7,
    question: "Не надо ... игрушки у младшего брата.", 
    answer: "Б) отнимать ",  
    options: [
      "А) донимать",
      "Б) отнимать ",  
      "В) перенимать",
      "Г) снимать"  
    ]
  },
  {
    numb: 8,
    question: "Сегодня библиотека закрыта на санитарный день, книги не ...",
    answer: "А) выдают ",  
    options: [
      "А) выдают ", 
      "Б) отдают", 
      "В) задают",
      "Г) передают"   
    ]
  },
  {
    numb: 9,
    question: "Я так ..., что проехала свою станцию.", 
    answer: "Б) зачиталась",   
    options: [
      "А) прочитала", 
      "Б) зачиталась",  
      "В) дочитала", 
      "Г) отчитала"   
    ]
  },
  {
    numb: 10,
    question: "Виктор заболел, и ему пришлось ... встречу.", 
    answer: "В) отменить", 
    options: [
      "А) применить",  
      "Б) сменить", 
      "В) отменить", 
      "Г) заменить" 
    ]
  },
  {
    numb: 11,
    question: "Это пятно трудно будет ...", 
    answer: "В) вывести", 
    options: [ 
      "А) перевести",  
      "Б) довести",
      "В) вывести", 
      "Г) отвести"   
    ]
  },
  {
    numb: 12,
    question: "Мой брат всегда старается … свою точку зрения.", 
    answer: "А) отстоять",   
    options: [
      "А) отстоять", 
      "Б) выстоять", 
      "В) перестоять", 
      "Г) настоять"  
    ]
  },
  {
    numb: 13,
    question: "Ветер был такой сильный, что ... с ног.", 
    answer: "Б) сбивал",  
    options: [
      "А) перебивал", 
      "Б) сбивал",  
      "В) отбивал", 
      "Г) выбивал"  
    ]
  },
  {
    numb: 14,
    question: "Осенью с деревьев ... листья.", 
    answer: "В) облетают", 
    options: [
      "А) вылетают",  
      "Б) пролетают",  
      "В) облетают", 
      "Г) налетают"    
    ]
  }, 
  {
    numb: 15,
    question: "Почему же твой друг не ... за тебя?", 
    answer: "Б) заступился",  
    options: [
      "А) расступился",  
      "Б) заступился",  
      "В) отступился", 
      "Г) оступился"    
    ]
  },
  {
    numb: 16,
    question: "Надо ... соль из пакета в солонку.", 
    answer: "В) пересыпать",
    options: [ 
      "А) рассыпать ", 
      "Б) засыпать",  
      "В) пересыпать",  
      "Г) просыпать"  
    ]
  },
  {
    numb: 17,
    question: "Дети ... на улице раненую птицу и принесли её домой.", 
    answer: "В) подобрали",   
    options: [
      "А) собрали",  
      "Б) выбрали",  
      "В) подобрали",  
      "Г) убрали"   
    ]
  },
  {
    numb: 18,
    question: "Квартиру, в которой было совершено преступление, ...", 
    answer: "В) опечатали", 
    options: [ 
      "А) запечатали",  
      "Б) распечатали",
      "В) опечатали",  
      "Г) напечатали"     
    ]
  },
  {
    numb: 19,
    question: "Ураган ... крыши с домов.",  
    answer: "Б) срывал",   
    options: [
      "А) вырывал",  
      "Б) срывал",  
      "В) зарывал",  
      "В) нарывал"   
    ]
  },
  {
    numb: 20, 
    question: "Она пошла на экскурсию в новых туфлях и ... ногу.",  
    answer: "A) натёрла",   
    options: [
      "A) натёрла", 
      "Б) вытерла",    
      "В) оттёрла",  
      "Г) затёрла"   
    ]
  },
  {
    numb: 21,
    question: "Я ... и проехала свою остановку.",  
    answer: "Б) задумалась",  
    options: [ 
      "А) передумала",   
      "Б) задумалась",  
      "В) одумалась",  
      "Г) придумала"    
    ]
  }, 
  {
    numb: 22,
    question: "Раньше здесь был пустырь, а сейчас его полностью ...",  
    answer: "Г) застроили",    
    options: [
      "А) перестроили",   
      "Б) пристроили",   
      "В) отстроили",  
      "Г) застроили"     
    ]
  },
  {
    numb: 23,
    question: "Она ... свои силы и не смогла справиться с работой в срок.",  
    answer: "Б) переоценила",  
    options: [
      "А) оценила",  
      "Б) переоценила", 
      "В) недооценила ",  
      "Г) приценилась"   
    ]
  },
  {
    numb: 24,
    question: "Лена не может … , чтобы её ребёнка обижали сверстники.", 
    answer: "В) допустить",   
    options: [
      "А) отпустить", 
      "Б) запустить", 
      "В) допустить", 
      "Г) напустить", 
    ]
  },
    { 
    numb: 25,
    question: "Мы решили … решение этого вопроса на завтра.", 
    answer: "А) отложить", 
    options: [ 
      "А) отложить",  
      "Б) сложить", 
      "В) переложить", 
      "Г) заложить"  
    ]
  },
    {
    numb: 26, 
    question: "Он так смеялся, что чуть не … со стула.", 
    answer: "Б) свалился",   
    options: [
      "А) привалился", 
      "Б) свалился",
      "В) завалился", 
      "Г) отвалился"  
    ]
  },
    {
    numb: 27, 
    question: "Студенты ... лектора вопросами.",  
    answer: "В) забросали", 
    options: [
      "А) разбросали",  
      "Б) набросали",  
      "В) забросали",  
      "Г) побросали"  
    ]
  },
    { 
    numb: 28,
    question: "Сотрудники ... о проделанной работе.",  
    answer: "Г) отчитались",  
    options: [ 
      "А) вчитались", 
      "Б) зачитались",
      "В) рассчитались  ", 
      "Г) отчитались"   
    ]
  },
  {
    numb: 29,
    question: "Мы готовим ему сюрприз. Смотри, не ...",  
    answer: "А) проговорись",   
    options: [
      "А) проговорись",
      "Б) договорись",  
      "В) уговорись",
      "Г) отговорись"  
    ]
  },
  {
    numb: 30,
    question: "Продавец ... фрукты и назвал цену.",  
    answer: "А) взвесил", 
    options: [
      "А) взвесил", 
      "Б) развесил", 
      "В) вывесил",
      "Г) навесил"   
    ]
  },

];