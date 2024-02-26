// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Татьяна хотела поехать в Грецию, но потом ...",
  answer: "Г) передумала", 
  options: [
    "А) придумала",
    "Б) выдумала",
    "В) задумала",
    "Г) передумала"
  ]
},
  { 
  numb: 2,
  question: "Профессор предложил Георгию... курсовую работу.",
  answer: "Б) переписать", 
  options: [ 
    "А) вписать", 
    "Б) переписать",
    "В) записать",
    "Г) расписать"
  ]
},
  {
  numb: 3, 
  question: "Никто не ... о том, что случилось.", 
  answer: "А) заговорил", 
  options: [
    "А) заговорил",
    "Б) приговорил",
    "В) поговорил",
    "Г) уговорил"
  ]
},
  {
  numb: 4,
  question: "Кончилась зима, и ... весна.", 
  answer: "Г) настала",  
  options: [
    "А) застала", 
    "Б) перестала",
    "В) пристала",
    "Г) настала"
  ]
},
  {
  numb: 5,
  question: "Это лекарство надо ... большим количеством воды.",  
  answer: "Б) запить", 
  options: [ 
    "А) распить", 
    "Б) запить",
    "В) выпить",
    "Г) попить"
  ]
},
{
  numb: 6,
  question: "Дмитрий не сможет прийти. Он ... встречу.", 
  answer:  "Б) отменил",  
  options: [
    "А) заменил", 
    "Б) отменил",
    "В) применил",
    "В) применил"
  ]
},
{
  numb: 7,
  question: "По истечении срока годности лекарство ... свои целебные свойства.",  
  answer: "А) утратило", 
  options: [
    "А) утратило",
    "Б) потратило",
    "В) затратило",
    "Г) растратило"
  ]
},
{
  numb: 8,
  question: "Эти преступники в течение года ... банкноты.", 
  answer: "Б) подделывали ",
  options: [
    "А) переделывали", 
    "Б) подделывали ",
    "В) проделывали",
    "Г) приделывали"
  ]
},
{
  numb: 9,
  question: "Фёдор Юрьевич никогда не ... в политические партии.", 
  answer: "Г) вступал",  
  options: [
    "А) поступал", 
    "Б) приступал",
    "В) выступал",
    "Г) вступал"
  ]
},
{
  numb: 10,
  question: ". Успокойся! Не надо .... это близко к сердцу.", 
  answer: "Г) принимать",
  options: [
    "А) обнимать ", 
    "Б) поднимать",
    "В) занимать",
    "Г) принимать"
  ]
},
{
  numb: 11,
  question: "К сожалению, Елене... одной возвращаться домой ночью.", 
  answer: "В) пришлось", 
  options: [ 
    "А) удалось", 
    "Б) показалось",
    "В) пришлось",
    "Г) повезло" 
  ]
},
{
  numb: 12,
  question: "Ей хорошо ... на новом месте.",  
  answer: "А) спалось",  
  options: [
    "А) спалось", 
    "Б) приснилось",
    "В) понравилось",
    "Г) предстояло" 
  ]
},
{
  numb: 13,
  question: "Виктор не... сыграть на пианино вальс Шопена.", 
  answer: "Б) может",  
  options: [
    "А) знает", 
    "Б) может",
    "В) умеет",
    "Г) любит"
  ]
},
{
  numb: 14,
  question: "Пётр ... своего младшего брата английскому языку.", 
  answer: "Б) учит",
  options: [
    "А) учится",  
    "Б) учит",
    "В) изучает",
    "Г) занимается"   
  ] 
}, 
{
  numb: 15,
  question: "Маргарита поехала на вокзал ... приятельницу.", 
  answer: "В) встречать", 
  options: [
    "А) встречаться",  
    "Б) повстречаться",
    "В) встречать",
    "Г) повстречать"   
  ]
},
{
  numb: 16,
  question: "Большинство участников конференции уже ... Пора начинать заседание.", 
  answer: "В) зарегистрировались",
  options: [
    "А) зарегистрировалось", 
    "Б) зарегистрируются",
    "В) зарегистрировались",
    "Г) зарегистрируется"  
  ]
},
{
  numb: 17,
  question: "До начала спектакля... 7 минут. Поторопись!", 
  answer: "Г) осталось", 
  options: [
    "А) остаются ",  
    "Б) останутся",
    "В) остались",
    "Г) осталось"
  ]
},
{
  numb: 18,
  question: "В зале ... около тысячи зрителей.", 
  answer: "Б) собралось",
  options: [ 
    "А) собрались",  
    "Б) собралось",
    "В) собирались",
    "Г) собираются" 
  ]
},
{
  numb: 19,
  question: "Вчера ... приём врач Иванова.",  
  answer: "В) вела",  
  options: [
    "А) вели",  
    "Б) вело",
    "В) вела",
    "Г) вёл"
  ]
},
{
  numb: 20, 
  question: "Борису уже ... 21 год.",  
  answer: "А) исполнился",  
  options: [
    "А) исполнился", 
    "Б) исполняются",
    "В) исполнилось",
    "Г) исполнятся" 
  ]
},
{
  numb: 21,
  question: "Сегодня Пётр ... работу вовремя.",  
  answer: "Б) закончил", 
  options: [
    "А) заканчивал",   
    "",
    "Б) закончил",
    ""    
  ]
}, 
{
  numb: 22,
  question: "Валентина ... пальто и вышла на лестницу.",  
  answer: "Б) надела",  
  options: [
    "А) надевала",   
    "",
    "Б) надела",
    ""
  ]
},
{
  numb: 23,
  question: "В субботу весь день мы.... порядок в доме.",  
  answer: "А) будем наводить ", 
  options: [
    "А) будем наводить ",  
    "",
    "Б) наведём",
    ""
  ]
},
{
  numb: 24,
  question: "Я ... ему ещё раз и узнаю все подробности.", 
  answer: "А) позвоню", 
  options: [
    "А) позвоню", 
    "",
    "Б) буду звонить",
    ""
  ]
},
  { 
  numb: 25,
  question: ". Когда я буду ехать в поезде, я ... в окно.", 
  answer: "А) буду смотреть ", 
  options: [ 
    "А) буду смотреть ",  
    "",
    "Б) посмотрю",
    "" 
  ]
},
  {
  numb: 26, 
  question: "Марина... мой учебник и не вернула.", 
  answer: "А) взяла 	", 
  options: [
    "А) взяла 	", 
    "",
    "Б) брала",
    ""
  ]
},
  {
  numb: 27, 
  question: "Антон сказал, что никогда не ... чужих писем.",  
  answer: "А) читал", 
  options: [
    "А) читал",  
    "",
    "Б) прочитал",
    ""
  ]
},
  { 
  numb: 28,
  question: "Не открывай окно. Я уже ... его 5 минут назад.",  
  answer: "А) открывала ",
  options: [ 
    "А) открывала ", 
    "",
    "Б) открыла",
    ""
  ]
},
{
  numb: 29,
  question: "Мария сидела с нами за столом и вдруг ... и ушла.",  
  answer: "Б) встала", 
  options: [
    "А) вставала ",
    "",
    "Б) встала",
    ""
  ]
},
{
  numb: 30,
  question: "За выходной день я ... все домашние дела.",  
  answer: "А) сделала ",
  options: [
    "А) сделала ", 
    "",
    "Б) делала",
    "" 
  ]
},
{
  numb: 31,
  question: "Прежде чем выступать с докладом, тебе надо всё хорошо ...", 
  answer: "Б) обдумать", 
  options: [
    "А) обдумывать ",
    "",
    "Б) обдумать",
    ""  
  ]
},
{
  numb: 32,
  question: "Нужно чаще... классиков русской литературы.",  
  answer: "А) перечитывать ",  
  options: [
    "А) перечитывать ",
    "", 
    "Б) перечитать",
    ""
  ]
},
{
  numb: 33,
  question: "Стоит ... на этот спектакль. Не пожалеешь!", 
  answer: "А) сходить 	", 
  options: [
    "А) сходить 	",  
    "",
    "Б) ходить",
    ""
  ]
},
{
  numb: 34,
  question: "Иван ... курить 2 года назад и теперь чувствует себя лучше.",  
  answer: "Б) бросил",
  options: [ 
    "А) бросал ",  
    "",
    "Б) бросил",
    ""
  ]
},
{
  numb: 35,
  question: "После окончания лекции аспиранты стали ... вопросы.",  
  answer: "Б) задавать", 
  options: [
    "А) задать ", 
    "",
    "Б) задавать",
    ""
  ]
},
{
  numb: 36,
  question: "Катерине не удалось... своё обещание.", 
  answer: "Б) выполнить", 
  options: [
    "А) выполнять",  
    "",
    "Б) выполнить",
    ""
  ]
},
{
  numb: 37,
  question: ". Я думаю, что я сумею.... тебе очки в пятницу.", 
  answer: "Б) заказать",
  options: [
    "А) заказывать",  
    "",
    "Б) заказать",
    ""
  ]
}, 
{
  numb: 38,
  question: "Георгий привык ... своими впечатлениями с мамой.",  
  answer: "Б) делиться", 
  options: [ 
    "А) поделиться ",  
    "",
    "Б) делиться",
    "" 
  ]
},
{
  numb: 39,
  question: "Мне уже надоело... тебе о твоих обязанностях.", 
  answer: "А) напоминать",  
  options: [
    "А) напоминать", 
    "",
    "Б) напомнить",
    ""
  ]
},
{
  numb: 40,
  question: "Уже 3 часа. Пора ... собрание!", 
  answer: "А) начинать 	", 
  options: [
    "А) начинать 	",  
    "",
    "Б) начать",
    ""
  ]
},
{
  numb: 41,
  question: "Нельзя ... все достопримечательности города за 1 день.",  
  answer: "А) осмотреть 	", 
  options: [
    "А) осмотреть 	",   
    "",
    "Б) осматривать",
    ""   
  ]
}, 
{
  numb: 42,
  question: "Вы не должны ... все подробности вашей личной жизни.",  
  answer: "Б) рассказывать",  
  options: [
    "А) рассказать ",   
    "",
    "Б) рассказывать",
    ""
  ]
},
{
  numb: 43,
  question: "Вера не должна .... Она очень пунктуальна.",  
  answer: "А) опоздать ",
  options: [
    "А) опоздать ",  
    "",
    "Б) опаздывать",
    ""
  ]
},
{
  numb: 44,
  question: "Не следует ... советами родителей.", 
  answer: "Б) пренебрегать", 
  options: [
    "А) пренебречь ", 
    "",
    "Б) пренебрегать",
    ""
  ]
},
  { 
  numb: 45,
  question: "Мне не хочется тебя..., но придётся. ", 
  answer: "А) просить", 
  options: [ 
    "А) просить",  
    "",
    "Б) попросить",
    ""
  ]
},
  {
  numb: 46, 
  question: "- Можно Вас спросить? - ..., сколько хотите.", 
  answer: "Б) Спрашивайте", 
  options: [
    "А) Спросите", 
    "",
    "Б) Спрашивайте",
    ""
  ]
},
  {
  numb: 47, 
  question: "... быстрее, иначе опоздаешь на поезд!",  
  answer: "А) Собирайся", 
  options: [
    "А) Собирайся",
    "",  
    "Б) Соберись",
    ""
  ]
},
  { 
  numb: 48,
  question: "Как хорошо, что вы пришли! ... !",  
  answer: "Б) Проходите",
  options: [ 
    "А) Пройдите ",
    "", 
    "Б) Проходите",
    ""
  ]
},
{
  numb: 49,
  question: "Не... ко мне больше: я не хочу тебя видеть!",  
  answer: "А) приходи ", 
  options: [
    "А) приходи ",
    "",
    "Б) приди",
    ""
  ]
},
{
  numb: 50,
  question: "Осторожно, не ... мою любимую вазу!",  
  answer: "Б) разбей",
  options: [
    "А) разбивай ", 
    "",
    "Б) разбей",
    ""
  ]
},
{
  numb: 51,
  question: "Мы с ней давно ... на «ты».", 
  answer: "В) перешли", 
  options: [
    "А) вышли", 
    "Б) вошли",
    "В) перешли",
    "Г) обошли"
  ]
},
{
  numb: 52,
  question: "Их отношения ... слишком далеко.",  
  answer: "А) зашли",  
  options: [
    "А) зашли", 
    "Б) прошли",
    "В) ушли",
    "Г) отошли"
  ]
},
{
  numb: 53,
  question: "Самолёт... и быстро набрал высоту. ", 
  answer: "А) взлетел", 
  options: [
    "А) взлетел", 
    "Б) подлетел", 
    "В) пролетел",
    "Г) улетел"
  ]
},
{
  numb: 54,
  question: "Боюсь, что её грубость до хорошего не ... ",  
  answer: "А) доведёт",
  options: [ 
    "А) доведёт",  
    "Б) поведёт",
    "В) заведёт",
    "Г) подведёт"
  ]
},
{
  numb: 55,
  question: "Труды этого учёного ... много пользы стране.",  
  answer: "А) принесли", 
  options: [
    "А) принесли", 
    "Б) донесли",
    "В) внесли",
    "Г) занесли"
  ]
},
{
  numb: 56,
  question: "He ... далеко, это опасно!", 
  answer: "Б) заплывай", 
  options: [
    "А) доплывай",
    "Б) заплывай",
    "В) переплывай",
    "Г) подплывай"
  ]
},
{
  numb: 57,
  question: "Прилетела ворона и ... кусок сыра.", 
  answer: "А) утащила",
  options: [
    "А) утащила",  
    "Б) подтащила",
    "В) затащила",
    "Г) втащила" 
  ]
}, 
{
  numb: 58,
  question: "Мальчик с лёгкостью... через высокий забор.",  
  answer: "А) перелез", 
  options: [
    "А) перелез",  
    "Б) залез",
    "В) подлез",
    "Г) влез"
  ]
},
{
  numb: 59,
  question: "Змея ... к реке и поплыла.", 
  answer: "А) подползла", 
  options: [
    "А) подползла", 
    "Б) переползла",
    "В) вползла",
    "Г) заползла"
  ]
},
{
  numb: 60,
  question: "Машина ... 2000 км.", 
  answer: "В) проехала", 
  options: [
    "А) поехала",  
    "Б) переехала",
    "В) проехала",
    "Г) объехала"
  ]
},
];