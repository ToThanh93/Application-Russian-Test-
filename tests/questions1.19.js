// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Я часто пишу письма ...",
  answer: "Г) младшим братьям", 
  options: [
    "А) младшие братья", 
    "Б) с младшими братьями",
    "В) у младших братьев",
    "Г) младшим братьям"
  ]
},
  { 
  numb: 2,
  question: "В прошлом году я был ...",
  answer: "В) у младших братьев", 
  options: [ 
    "А) младшие братья", 
    "Б) с младшими братьями",
    "В) у младших братьев",
    "Г) младшим братьям"
  ]
},
  {
  numb: 3, 
  question: "Я ходил на стадион ...", 
  answer: "Б) с младшими братьями", 
  options: [
    "А) младшие братья", 
    "Б) с младшими братьями",
    "В) у младших братьев",
    "Г) младшим братьям"
  ]
},
  {
  numb: 4,
  question: "Скоро у нас будет экзамен ...", 
  answer: "Г) по английскому языку",  
  options: [
    "А) английский язык", 
    "Б) английского языка",
    "В) английским языком",
    "Г) по английскому языку"
  ]
},
  {
  numb: 5,
  question: "Я люблю заниматься ...",  
  answer: "В) английским языком", 
  options: [ 
    "А) английский язык", 
    "Б) английского языка",
    "В) английским языком",
    "Г) по английскому языку"
  ]
},
{
  numb: 6,
  question: "Мы ждём преподавателя ...", 
  answer:  "Б) английского языка",  
  options: [
    "А) английский язык", 
    "Б) английского языка",
    "В) английским языком",
    "Г) по английскому языку"
  ]
},
{
  numb: 7,
  question: "В Петербурге всегда много ...",  
  answer: "Б) иностранных туристов", 
  options: [
    "А) иностранные туристы", 
    "Б) иностранных туристов",
    "В) иностранным туристам",
    "Г) иностранными туристами" 
  ]
},
{
  numb: 8,
  question: "Петербург нравится ...", 
  answer: "В) иностранным туристам",
  options: [
    "А) иностранные туристы", 
    "Б) иностранных туристов",
    "В) иностранным туристам",
    "Г) иностранными туристами" 
  ]
},
{
  numb: 9,
  question: "В Петербург часто приезжают ...", 
  answer: "А) иностранные туристы",  
  options: [
    "А) иностранные туристы", 
    "Б) иностранных туристов",
    "В) иностранным туристам",
    "Г) иностранными туристами" 
  ]
},
{
  numb: 10,
  question: "Вчера мы были ...", 
  answer: "В) на интересной экскурсии",
  options: [
    "А) интересную экскурсию", 
    "Б) интересная экскурсия",
    "В) на интересной экскурсии",
    "Г) на интересную экскурсию" 
  ]
},
{
  numb: 11,
  question: "Преподаватели организовали ... для студентов.", 
  answer: "А) интересную экскурсию", 
  options: [ 
    "А) интересную экскурсию", 
    "Б) интересная экскурсия",
    "В) на интересной экскурсии",
    "Г) на интересную экскурсию" 
  ]
},
{
  numb: 12,
  question: "... закончилась в 3 часа.",  
  answer: "Б) интересная экскурсия",  
  options: [
    "А) интересную экскурсию", 
    "Б) интересная экскурсия",
    "В) на интересной экскурсии",
    "Г) на интересную экскурсию" 
  ]
},
{
  numb: 13,
  question: "Моему другу нравится ...", 
  answer: "А) профессия артиста",  
  options: [
    "А) профессия артиста",  
    "Б) профессией артиста",
    "В) профессию артиста",
    "Г) о профессии артиста" 
  ]
},
{
  numb: 14,
  question: "Он сам выбрал ...", 
  answer: "В) профессию артиста",
  options: [
    "А) профессия артиста",  
    "Б) профессией артиста",
    "В) профессию артиста",
    "Г) о профессии артиста" 
  ] 
}, 
{
  numb: 15,
  question: "Он интересно рассказывает ...", 
  answer: "Г) о профессии артиста", 
  options: [
    "А) профессия артиста",  
    "Б) профессией артиста",
    "В) профессию артиста",
    "Г) о профессии артиста" 
  ]
},
{
  numb: 16,
  question: "Я живу рядом ...", 
  answer: "Б) с центральным проспектом",
  options: [
    "А) от центрального проспекта",  
    "Б) с центральным проспектом",
    "В) на центральном проспекте",
    "Г) центрального проспекта"
  ]
},
{
  numb: 17,
  question: "Этот магазин находится ...", 
  answer: "В) на центральном проспекте", 
  options: [
    "А) от центрального проспекта",  
    "Б) с центральным проспектом",
    "В) на центральном проспекте",
    "Г) центрального проспекта"
  ]
},
{
  numb: 18,
  question: "Мы встретились недалеко ...", 
  answer: "А) от центрального проспекта",
  options: [ 
    "А) от центрального проспекта",  
    "Б) с центральным проспектом",
    "В) на центральном проспекте",
    "Г) центрального проспекта"
  ]
},
{
  numb: 19,
  question: "У меня нет ...",  
  answer: "Б) синей ручки",  
  options: [
    "А) синяя ручка",  
    "Б) синей ручки",
    "В) синюю ручку",
    "Г) синей ручкой"
  ]
},
{
  numb: 20, 
  question: "Дай, пожалуйста, ...",  
  answer: "В) синюю ручку",  
  options: [
    "А) синяя ручка",  
    "Б) синей ручки",
    "В) синюю ручку",
    "Г) синей ручкой"
  ]
},
{
  numb: 21,
  question: "Я всегда пишу ...",  
  answer: "Г) синей ручкой", 
  options: [
    "А) синяя ручка",  
    "Б) синей ручки",
    "В) синюю ручку",
    "Г) синей ручкой"
  ]
}, 
{
  numb: 22,
  question: "В больнице работает много ...",  
  answer: "Г) младшим сёстрам",  
  options: [
    "А) младшие сёстры",
    "Б) с младшими сёстрами",
    "В) младших сестёр",
    "Г) младшим сёстрам" 
  ]
},
{
  numb: 23,
  question: "Все ... пришли на собрание.",  
  answer: "А) врачи", 
  options: [
    "А) врачи",
    "Б) врачей",
    "В) врача",
    ""  
  ]
},
{
  numb: 24,
  question: "В кабинете было 3 ...", 
  answer: "В) врача", 
  options: [
    "А) врачи",
    "Б) врачей",
    "В) врача",
    ""  
  ]
},
  { 
  numb: 25,
  question: "В институте работает 10 ...", 
  answer: "Б) врачей", 
  options: [ 
    "А) врачи",
    "Б) врачей",
    "В) врача",
    ""  
  ]
},
  {
  numb: 26, 
  question: "У Марты много ...", 
  answer: "Б) подруг", 
  options: [
    "А) подругам",
    "Б) подруг",
    "В) подруги",
    ""  
  ]
},
  {
  numb: 27, 
  question: "Многие её ... окончили университет",  
  answer: "В) подруги", 
  options: [
    "А) подругам",
    "Б) подруг",
    "В) подруги",
    "" 
  ]
},
  { 
  numb: 28,
  question: "Марта всегда помогает ...",  
  answer: "А) подругам",
  options: [ 
    "А) подругам",
    "Б) подруг",
    "В) подруги",
    "" 
  ]
},
{
  numb: 29,
  question: "Она часто встречает ... на дискотеке.",  
  answer: "Б) подруг", 
  options: [
    "А) подругам",
    "Б) подруг",
    "В) подруги",
    ""  
  ]
},
{
  numb: 30,
  question: "... - самый тёплый месяц года.",  
  answer: "А) июль",
  options: [
    "А) июль",
    "Б) июля",
    "В) в июле",
    "" 
  ]
},
{
  numb: 31,
  question: "Мой друг поедет домой ...", 
  answer: "В) в июле", 
  options: [
    "А) июль",
    "Б) июля",
    "В) в июле",
    "" 
  ]
},
{
  numb: 32,
  question: "День рождения брата 15 ...",  
  answer: "Б) июля",  
  options: [
    "А) июль",
    "Б) июля",
    "В) в июле",
    "" 
  ]
},
{
  numb: 33,
  question: "... было жарко.", 
  answer: "В) в июле", 
  options: [
    "А) июль",
    "Б) июля",
    "В) в июле",
    "" 
  ]
},
{
  numb: 34,
  question: "Борис знает много ...",  
  answer: "А) русских стихов",
  options: [ 
    "А) русских стихов",  
    "Б) русские стихи",
    "В) русскими стихами",
    "" 
  ]
},
{
  numb: 35,
  question: "Борис хорошо читает ... ",  
  answer: "Б) русские стихи", 
  options: [
    "А) русских стихов",  
    "Б) русские стихи",
    "В) русскими стихами",
    "" 
  ]
},
{
  numb: 36,
  question: "Он интересуется ...", 
  answer: "В) русскими стихами", 
  options: [
    "А) русских стихов",  
    "Б) русские стихи",
    "В) русскими стихами",
    "" 
  ]
},
{
  numb: 37,
  question: "Мне тоже нравятся ...", 
  answer: "Б) русские стихи",
  options: [
    "А) русских стихов",  
    "Б) русские стихи",
    "В) русскими стихами",
    "" 
  ]
}, 
{
  numb: 38,
  question: "Перерыв продолжается ...",  
  answer: "Б) полчаса ", 
  options: [ 
    "А) через полчаса",  
    "Б) полчаса ",
    "В) полчаса назад",
    "" 
  ]
},
{
  numb: 39,
  question: "Урок начался ...", 
  answer: "В) полчаса назад",  
  options: [
    "А) через полчаса",  
    "Б) полчаса ",
    "В) полчаса назад",
    "" 
  ]
},
{
  numb: 40,
  question: "Концерт кончится ...", 
  answer: "А) через полчаса", 
  options: [
    "А) через полчаса",  
    "Б) полчаса ",
    "В) полчаса назад",
    "" 
  ]
},
{
  numb: 41,
  question: "До начала урока осталось ...",  
  answer: "Б) полчаса ", 
  options: [
    "А) через полчаса",  
    "Б) полчаса ",
    "В) полчаса назад",
    "" 
  ]
}, 
{
  numb: 42,
  question: "Экзамен ... 4 часа.",  
  answer: "Б) продолжался",  
  options: [
    "А) продолжал",   
    "",
    "Б) продолжался",
    "" 
  ]
},
{
  numb: 43,
  question: "Марта ... русский язык.",  
  answer: "А) изучает",
  options: [
    "А) изучает",   
    "",
    "Б) учится",
    "" 
  ]
},
{
  numb: 44,
  question: "Мы ... с другом в парке.", 
  answer: "Б) встретились", 
  options: [
    "А) встретили",   
    "",
    "Б) встретились",
    "" 
  ]
},
  { 
  numb: 45,
  question: "Выставка ... Русским музеем.", 
  answer: "А) организована", 
  options: [ 
    "А) организована",   
    "",
    "Б) организованная",
    "" 
  ]
},
  {
  numb: 46, 
  question: "Мне нравится ... задачи.", 
  answer: "Б) решать", 
  options: [
    "А) решал", 
    "Б) решать",
    "В) решил",
    "Г) решить"
  ]
},
  {
  numb: 47, 
  question: "Вчера я весь вечер ... задачи.",  
  answer: "А) решал",  
  options: [
    "А) решал", 
    "Б) решать",
    "В) решил",
    "Г) решить"
  ]
},
  { 
  numb: 48,
  question: "Я ... 10 задач.",  
  answer: "В) решил",
  options: [ 
    "А) решал", 
    "Б) решать",
    "В) решил",
    "Г) решить"
  ]
},
{
  numb: 49,
  question: "Мой брат всегда ... мне.",  
  answer: "В) помогает", 
  options: [
    "А) помогать",   
    "Б) помог",
    "В) помогает",
    "Г) помочь" 
  ]
},
{
  numb: 50,
  question: "Вчера я тоже ... ему перевести текст.",  
  answer: "Б) помог",
  options: [
    "А) помогать",   
    "Б) помог",
    "В) помогает",
    "Г) помочь" 
  ]
},
{
  numb: 51,
  question: "Я должен ... другу сделать это упражнение.",  
  answer: "Г) помочь", 
  options: [
    "А) помогать",   
    "Б) помог",
    "В) помогает",
    "Г) помочь" 
  ]
}, 
{
  numb: 52,
  question: "Марта каждый день ... домашнее задание.",  
  answer: "Б) делает",  
  options: [
    "А) сделает",   
    "",
    "Б) делает",
    "" 
  ]
},
{
  numb: 53,
  question: "Завтра я ... текст на уроке.",  
  answer: "Б) буду рассказывать ",
  options: [
    "А) рассказать",   
    "Б) буду рассказывать ",
    "В) рассказал",
    "" 
  ]
},
{
  numb: 54,
  question: "Я хочу ... тебе о своих каникулах.", 
  answer: "А) рассказать", 
  options: [
    "А) рассказать",   
    "Б) буду рассказывать ",
    "В) рассказал",
    "" 
  ]
},
  { 
  numb: 55,
  question: "Я уже ... текст.", 
  answer: "В) рассказал", 
  options: [ 
    "А) рассказать",   
    "Б) буду рассказывать ",
    "В) рассказал",
    "" 
  ]
},
  {
  numb: 56, 
  question: "Мария любит ... письма. ", 
  answer: "Б) получать", 
  options: [
    "А) получает",   
    "Б) получать",
    "В) получила",
    "Г) получит" 
  ]
},
  {
  numb: 57, 
  question: "Вчера она ... 2 письма.",  
  answer: "В) получила",  
  options: [
    "А) получает",   
    "Б) получать",
    "В) получила",
    "Г) получит" 
  ]
},
  { 
  numb: 58,
  question: "Завтра она тоже... письмо.",  
  answer: "Г) получит",
  options: [ 
    "А) получает",   
    "Б) получать",
    "В) получила",
    "Г) получит" 
  ]
},
{
  numb: 59,
  question: "Сейчас я ... новое правило.",  
  answer: "Б) учу", 
  options: [
    "А) выучил",
    "Б) учу", 
    "В) выучу",
    ""
  ]
},
{
  numb: 60,
  question: "Когда я ... правило, я пойду в кино.",  
  answer: "В) выучу",
  options: [
    "А) выучил",
    "Б) учу", 
    "В) выучу",
    ""
  ]
},
{
  numb: 61,
  question: "Ты ... вчера в музей?", 
  answer: "А) ходил", 
  options: [
    "А) ходил",
    "",
    "Б) шёл",
    ""
  ]
},
{
  numb: 62,
  question: "Ты ... в университет каждый день?",  
  answer: "Б) ходишь",  
  options: [
    "А) идёшь ",
    "",
    "Б) ходишь",
    ""
  ]
},
{
  numb: 63,
  question: "Ты любишь ... на велосипеде?", 
  answer: "А) ездить", 
  options: [
    "А) ездить",
    "",
    "Б) ехать",
    ""
  ]
},
{
  numb: 64,
  question: "Когда я ... домой, я встретил друга.",  
  answer: "Б) шёл",
  options: [ 
    "А) ходил",
    "",
    "Б) шёл",
    ""
  ]
},
{
  numb: 65,
  question: "Я ещё не ... в Мариинский театр.",  
  answer: "А) ходил", 
  options: [
    "А) ходил",
    "Б) пойду",
    "В) буду ходить",
    ""
  ]
},
{
  numb: 66,
  question: "Завтра я первый раз... туда.", 
  answer: "Б) пойду", 
  options: [
    "А) ходил",
    "Б) пойду",
    "В) буду ходить",
    ""
  ]
},
{
  numb: 67,
  question: "Антон ... домой поздно.", 
  answer: "Б) пришёл",
  options: [
    "А) подошёл", 
    "Б) пришёл",
    "В) вошёл",
    "Г) перешёл"
  ]
}, 
{
  numb: 68,
  question: "Преподаватель открыл дверь и ... в класс.",  
  answer: "В) вошёл", 
  options: [
    "А) подошёл", 
    "Б) пришёл",
    "В) вошёл",
    "Г) перешёл"
  ]
},
{
  numb: 69,
  question: "Виктор ... к окну и открыл его.", 
  answer: "А) подошёл", 
  options: [
    "А) подошёл", 
    "Б) пришёл",
    "В) вошёл",
    "Г) перешёл"
  ]
},
{
  numb: 70,
  question: "Вчера мы ... на выставку", 
  answer: "А) ходили", 
  options: [
    "А) ходили", 
    "",
    "Б) шли",
    ""
  ]
},
{
  numb: 71,
  question: "Туда мы ... пешком.", 
  answer: "Б) шли", 
  options: [
    "А) ходили", 
    "",
    "Б) шли",
    ""
  ]
},
{
  numb: 72,
  question: "Когда мы ... домой, мы говорили о картинах.",  
  answer: "Б) шли",  
  options: [
    "А) ходили", 
    "",
    "Б) шли",
    ""
  ]
},
{
  numb: 73,
  question: "Виктора нет в Петербурге, он ... вчера. ", 
  answer: "Б) уехал", 
  options: [
    "А) поехал", 
    "Б) уехал",
    "В) приехал",
    "Г) ехал"
  ]
},
{
  numb: 74,
  question: "Мой друг .... сюда недавно.",  
  answer: "В) приехал",
  options: [ 
    "А) поехал", 
    "Б) уехал",
    "В) приехал",
    "Г) ехал"
  ]
},
{
  numb: 75,
  question: "Я поужинал и ... на вокзал.",  
  answer: "А) поехал", 
  options: [
    "А) поехал", 
    "Б) уехал",
    "В) приехал",
    "Г) ехал"
  ]
},
{
  numb: 76,
  question: "Лена ... к двери и закрыла её. ", 
  answer: "Б) подошла ", 
  options: [
    "А) пришла", 
    "Б) подошла ",
    "В) перешла",
    "Г) отошла"
  ]
},
{
  numb: 77,
  question: "Она ... от двери и села на диван.", 
  answer: "Г) отошла",
  options: [
    "А) пришла", 
    "Б) подошла ",
    "В) перешла",
    "Г) отошла"
  ]
}, 
{
  numb: 78,
  question: "Она ... через дорогу и вошла в аптеку.",  
  answer: "В) перешла", 
  options: [
    "А) пришла", 
    "Б) подошла ",
    "В) перешла",
    "Г) отошла"
  ]
},
{
  numb: 79,
  question: "Я жду студентов, которые ...", 
  answer: "А) приехали из Москвы", 
  options: [
    "А) приехали из Москвы", 
    "Б) я учусь в одной группе",
    "В) ты знаешь",
    "Г) ты спрашивал у меня"
  ]
},
{
  numb: 80,
  question: "Я жду студентов, которых ...", 
  answer: "В) ты знаешь", 
  options: [
    "А) приехали из Москвы", 
    "Б) я учусь в одной группе",
    "В) ты знаешь",
    "Г) ты спрашивал у меня"
  ]
},
{
  numb: 81,
  question: "Я жду студентов, с которыми ...", 
  answer: "Б) я учусь в одной группе", 
  options: [
    "А) приехали из Москвы", 
    "Б) я учусь в одной группе",
    "В) ты знаешь",
    "Г) ты спрашивал у меня"
  ]
},
{
  numb: 82,
  question: "Я встретил друзей, о которых ...",  
  answer: "А) я рассказывал тебе",  
  options: [
    "А) я рассказывал тебе",  
    "Б) живут в моём городе",
    "В) я познакомился здесь",
    "Г) давно не видел"
  ]
},
{
  numb: 83,
  question: "Я встретил друзей, которые ...  ", 
  answer: "Б) живут в моём городе", 
  options: [
    "А) я рассказывал тебе",  
    "Б) живут в моём городе",
    "В) я познакомился здесь",
    "Г) давно не видел"
  ]
},
{
  numb: 84,
  question: "Я встретил друзей, с которыми ...",  
  answer: "В) я познакомился здесь",
  options: [ 
    "А) я рассказывал тебе",  
    "Б) живут в моём городе",
    "В) я познакомился здесь",
    "Г) давно не видел"
  ]
},
{
  numb: 85,
  question: "У меня есть словарь, ... Я купил в Доме книги. ",  
  answer: "А) который", 
  options: [
    "А) который",  
    "Б) которому ",
    "В) которого",
    "Г) которым"
  ]
},
{
  numb: 86,
  question: "У меня есть словарь, ... ты интересовался.", 
  answer: "Г) которым", 
  options: [
    "А) который",  
    "Б) которому ",
    "В) которого",
    "Г) которым"
  ]
},
{
  numb: 87,
  question: "У меня есть словарь, ... Нет В нашей библиотеке.", 
  answer: "В) которого",
  options: [
    "А) который",  
    "Б) которому ",
    "В) которого",
    "Г) которым"
  ]
}, 
{
  numb: 88,
  question: "Я купил газету, ... я дам сестре.",  
  answer: "Б) которую", 
  options: [
    "А) которая",  
    "Б) которую",
    "В) которой ",
    "Г) в которой"
  ]
},
{
  numb: 89,
  question: "Я купил газету, ... есть интересные статьи.", 
  answer: "Г) в которой", 
  options: [
    "А) которая",  
    "Б) которую",
    "В) которой ",
    "Г) в которой"
  ]
},
{
  numb: 90,
  question: "Я купил газету, ... стоит 5 рублей.", 
  answer: "А) которая", 
  options: [
    "А) которая",  
    "Б) которую",
    "В) которой ",
    "Г) в которой"
  ]
},
{
  numb: 91,
  question: "Брат посоветовал мне, ... я написал письмо родителям.", 
  answer: "Б) чтобы", 
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 92,
  question: "Я решил, ... напишу родителям сегодня вечером.",  
  answer: "А) что",  
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 93,
  question: "Преподаватель сказал, ... мы пойдём на экскурсию завтра.", 
  answer: "А) что", 
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 94,
  question: "Преподаватель напомнил, ... мы взяли студенческие билеты.",  
  answer: "Б) чтобы",
  options: [ 
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 95,
  question: "Я думаю, ... экскурсия будет интересной.",  
  answer: "А) что", 
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 96,
  question: "Виктор не знает, ... находится аптека. ", 
  answer: "А) где", 
  options: [
    "А) где",  
    "Б) как",
    "В) почему",
    "Г) куда" 
  ]
},
{
  numb: 97,
  question: "Анна объяснила ему, ... туда идти.", 
  answer: "Б) как",
  options: [
    "А) где",  
    "Б) как",
    "В) почему",
    "Г) куда" 
  ]
}, 
{
  numb: 98,
  question: "Я не знаю, ... он не пишет мне.",  
  answer: "В) почему", 
  options: [
    "А) откуда ",  
    "Б) когда",
    "В) почему",
    "Г) как"
  ]
},
{
  numb: 99,
  question: "Я не знаю, ... доехать до центра.", 
  answer: "Г) как", 
  options: [
    "А) откуда ",  
    "Б) когда",
    "В) почему",
    "Г) как"
  ]
},
{
  numb: 100,
  question: "Он знает, ... начинается концерт.", 
  answer: "Б) когда", 
  options: [
    "А) откуда ",  
    "Б) когда",
    "В) почему",
    "Г) как"
  ]
},
{
  numb: 101,
  question: "Я не видел, он разговаривал ...", 
  answer: "А) с кем", 
  options: [
    "А) с кем",  
    "Б) кому",
    "В) кого",
    "Г) у кого"
  ]
},
{
  numb: 102,
  question: "Пётр спросил ,... есть ручка.",  
  answer: "Г) у кого",  
  options: [
    "А) с кем",  
    "Б) кому",
    "В) кого",
    "Г) у кого"
  ]
},
{
  numb: 103,
  question: "Ты помнишь, ... ты дал учебник?", 
  answer: "Б) кому", 
  options: [
    "А) с кем",  
    "Б) кому",
    "В) кого",
    "Г) у кого"
  ]
},
{
  numb: 104,
  question: "Когда я завтракаю, ...",  
  answer: "Б) я слушаю новости",
  options: [ 
    "А) я слушал новости",  
    "Б) я слушаю новости",
    "В) я послушаю новости",
    ""
  ]
},
{
  numb: 105,
  question: "Когда я решу задачу, ...",  
  answer: "А) я объясню её тебе", 
  options: [
    "А) я объясню её тебе",  
    "Б) я объяснял её тебе",
    "В) я объясняю её тебе",
    ""
  ]
},
{
  numb: 106,
  question: "Когда Мария переводила текст, ... ", 
  answer: "Б) она смотрела слова в словаре", 
  options: [
    "А) она смотрит слова в словаре",  
    "Б) она смотрела слова в словаре",
    "В) она посмотрит слова в словаре",
    "" 
  ]
},
{
  numb: 107,
  question: "Если Андрей позвонит мне, ...", 
  answer: "А) я расскажу ему эту Новость",
  options: [
    "А) я расскажу ему эту Новость",  
    "",
    "Б) я рассказал бы ему эту новость",
    "" 
  ]
}, 
{
  numb: 108,
  question: "Если бы ты попросил меня, ...",  
  answer: "А) я объяснил бы тебе эту задачу", 
  options: [
    "А) я объяснил бы тебе эту задачу",  
    "",
    "Б) я объясню тебе эту задачу",
    ""
  ]
},
{
  numb: 109,
  question: "Хотя экзамен был трудный, ...", 
  answer: "А) мы хорошо сдали его ", 
  options: [
    "А) мы хорошо сдали его ",  
    "",
    "Б) мы хорошо сдадим ero",
    ""
  ]
},
{
  numb: 110,
  question: "Я не пошёл гулять, ...", 
  answer: "Б) потому что было холодно", 
  options: [
    "А) поэтому было холодно ",  
    "",
    "Б) потому что было холодно",
    ""
  ]
},
];