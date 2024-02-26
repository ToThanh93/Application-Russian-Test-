// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Я часто хожу ...",
  answer: "Б) в новый бассейн", 
  options: [
    "А) новым бассейном",
    "Б) в новый бассейн",
    "В) о новом бассейне",
    "Г) в новом бассейне"
  ]
},
  { 
  numb: 2,
  question: "Мы говорили ...",
  answer: "В) о новом бассейне", 
  options: [ 
    "А) новым бассейном",
    "Б) в новый бассейн",
    "В) о новом бассейне",
    "Г) в новом бассейне"
  ]
},
  {
  numb: 3, 
  question: "Моя подруга работает ...", 
  answer: "Г) в новом бассейне", 
  options: [
    "А) новым бассейном",
    "Б) в новый бассейн",
    "В) о новом бассейне",
    "Г) в новом бассейне"
  ]
},
  {
  numb: 4,
  question: "Анне нравится мой ...", 
  answer: "Г) старший брат",  
  options: [
    "А) старшему брату", 
    "Б) со старшим братом",
    "В) о старшем брате",
    "Г) старший брат" 
  ]
},
  {
  numb: 5,
  question: "В письме она писала ...",  
  answer: "В) о старшем брате", 
  options: [ 
    "А) старшему брату", 
    "Б) со старшим братом",
    "В) о старшем брате",
    "Г) старший брат"
  ]
},
{
  numb: 6,
  question: "Я купил открытки ... ", 
  answer:  "А) старшему брату",  
  options: [
    "А) старшему брату", 
    "Б) со старшим братом",
    "В) о старшем брате",
    "Г) старший брат"
  ]
},
{
  numb: 7,
  question: "Мы ходили на выставку ...",  
  answer: "Б) со старшим братом", 
  options: [
    "А) старшему брату", 
    "Б) со старшим братом",
    "В) о старшем брате",
    "Г) старший брат"
  ]
},
{
  numb: 8,
  question: "Наташа познакомилась ...", 
  answer: "Б) с известным писателем",
  options: [
    "А) известный писатель", 
    "Б) с известным писателем",
    "В) известному писателю",
    "Г) известного писателя" 
  ]
},
{
  numb: 9,
  question: "Мы подарили цветы ...", 
  answer: "В) известному писателю",  
  options: [
    "А) известный писатель", 
    "Б) с известным писателем",
    "В) известному писателю",
    "Г) известного писателя" 
  ]
},
{
  numb: 10,
  question: "Мой друг - ", 
  answer: "А) известный писатель",
  options: [
    "А) известный писатель", 
    "Б) с известным писателем",
    "В) известному писателю",
    "Г) известного писателя" 
  ]
},
{
  numb: 11,
  question: "Я встретил на выставке ...", 
  answer: "Г) известного писателя", 
  options: [ 
    "А) известный писатель", 
    "Б) с известным писателем",
    "В) известному писателю",
    "Г) известного писателя" 
  ]
},
{
  numb: 12,
  question: "Марина заботится ...",  
  answer: "В) о младшей сестре",  
  options: [
    "А) младшая сестра", 
    "Б) у младшей сестры",
    "В) о младшей сестре",
    "Г) с младшей сестрой" 
  ]
},
{
  numb: 13,
  question: "Марк часто гуляет ...", 
  answer: "Г) с младшей сестрой",  
  options: [
    "А) младшая сестра", 
    "Б) у младшей сестры",
    "В) о младшей сестре",
    "Г) с младшей сестрой" 
  ]
},
{
  numb: 14,
  question: "Вчера ... был день рождения.", 
  answer: "Б) у младшей сестры", 
  options: [
    "А) младшая сестра", 
    "Б) у младшей сестры",
    "В) о младшей сестре",
    "Г) с младшей сестрой" 
  ] 
}, 
{
  numb: 15,
  question: "Я встретила в музее ...", 
  answer: "В) мою подругу", 
  options: [
    "А) моя подруга", 
    "Б) о моей подруге",
    "В) мою подругу",
    "Г) с моей подругой" 
  ]
},
{
  numb: 16,
  question: "Я люблю петь песни вместе ...", 
  answer: "Г) с моей подругой",
  options: [
     "А) моя подруга", 
    "Б) о моей подруге",
    "В) мою подругу",
    "Г) с моей подругой" 
  ]
},
{
  numb: 17,
  question: "... всегда покупает здесь цветы.", 
  answer: "А) моя подруга", 
  options: [
    "А) моя подруга", 
    "Б) о моей подруге",
    "В) мою подругу",
    "Г) с моей подругой" 
  ]
},
{
  numb: 18,
  question: "Антон часто спрашивает меня ...", 
  answer: "Б) о моей подруге",
  options: [ 
     "А) моя подруга", 
    "Б) о моей подруге",
    "В) мою подругу",
    "Г) с моей подругой" 
  ]
},
{
  numb: 19,
  question: "Студенты идут ...",  
  answer: "Г) на последнюю лекцию",  
  options: [
    "А) на последней лекции", 
    "Б) последней лекции",
    "В) последняя лекция",
    "Г) на последнюю лекцию"
  ]
},
{
  numb: 20, 
  question: "Джулия была ...",  
  answer: "А) на последней лекции",  
  options: [
    "А) на последней лекции", 
    "Б) последней лекции",
    "В) последняя лекция",
    "Г) на последнюю лекцию"
  ]
},
{
  numb: 21,
  question: "Сегодня у нас нет ...",  
  answer: "Б) последней лекции", 
  options: [
    "А) на последней лекции", 
    "Б) последней лекции",
    "В) последняя лекция",
    "Г) на последнюю лекцию" 
  ]
}, 
{
  numb: 22,
  question: "... начинается в 14 часов.",  
  answer: "В) последняя лекция",  
  options: [
    "А) на последней лекции", 
    "Б) последней лекции",
    "В) последняя лекция",
    "Г) на последнюю лекцию"
  ]
},
{
  numb: 23,
  question: "Сегодня у него ...",  
  answer: "В) трудный экзамен",  
  options: [
     "А) трудного экзамена", 
    "Б) о трудном экзамене",
    "В) трудный экзамен",
    "Г) к трудному экзамену"
  ] 
},
{
  numb: 24,
  question: "Он серьёзно готовился ...", 
  answer: "Г) к трудному экзамену", 
  options: [
    "А) трудного экзамена", 
    "Б) о трудном экзамене",
    "В) трудный экзамен",
    "Г) к трудному экзамену"
  ]
},
  { 
  numb: 25,
  question: "Мы долго говорили …", 
  answer: "Б) о трудном экзамене", 
  options: [ 
    "А) трудного экзамена", 
    "Б) о трудном экзамене",
    "В) трудный экзамен",
    "Г) к трудному экзамену"
  ]
},
  {
  numb: 26, 
  question: "В этом семестре у нас нет ...", 
  answer: "А) трудного экзамена", 
  options: [
    "А) трудного экзамена", 
    "Б) о трудном экзамене",
    "В) трудный экзамен",
    "Г) к трудному экзамену"
  ]
},
  {
  numb: 27, 
  question: "Мы говорили ...",  
  answer: "Б) об этой книге", 
  options: [
     "А) эту книгу", 
    "Б) об этой книге",
    "В) этой книги",
    "Г) эта книга" 
  ]
},
  { 
  numb: 28,
  question: "Дай мне, пожалуйста, ...",  
  answer: "А) эту книгу",
  options: [ 
    "А) эту книгу", 
    "Б) об этой книге",
    "В) этой книги",
    "Г) эта книга" 
  ]
},
{
  numb: 29,
  question: "Мне очень нужна ...",  
  answer: "Г) эта книга", 
  options: [
     "А) эту книгу", 
    "Б) об этой книге",
    "В) этой книги",
    "Г) эта книга" 
  ]
},
{
  numb: 30,
  question: "В библиотеке нет ...",  
  answer: "В) этой книги",
  options: [
    "А) эту книгу", 
    "Б) об этой книге",
    "В) этой книги",
    "Г) эта книга" 
  ]
},
{
  numb: 31,
  question: "Мой брат родился ...", 
  answer: "В) весной", 
  options: [
    "А) весна",
    "Б) о весне",
    "В) весной",
    "Г) весну"  
  ]
},
{
  numb: 32,
  question: "Это стихи ...",  
  answer: "Б) о весне",  
  options: [
    "А) весна",
    "Б) о весне",
    "В) весной",
    "Г) весну"  
  ]
},
{
  numb: 33,
  question: "... - самое хорошее время года.", 
  answer: "А) весна", 
  options: [
     "А) весна",
    "Б) о весне",
    "В) весной",
    "Г) весну"  
  ]
},
{
  numb: 34,
  question: "Летом Карлос поедет ...",  
  answer: "Г) к своему отцу",
  options: [ 
    "А) своего отца",  
    "Б) о своём отце",
    "В) свой отец",
    "Г) к своему отцу"
  ]
},
{
  numb: 35,
  question: "Мой друг очень любит ...",  
  answer: "А) своего отца", 
  options: [
    "А) своего отца",  
    "Б) о своём отце",
    "В) свой отец",
    "Г) к своему отцу"
  ]
},
{
  numb: 36,
  question: "Она часто говорит ...", 
  answer: "Б) о своём отце", 
  options: [
    "А) своего отца",  
    "Б) о своём отце",
    "В) свой отец",
    "Г) к своему отцу"
  ]
},
{
  numb: 37,
  question: "Мы начали изучать русский язык ...", 
  answer: "Б) в этом месяце",
  options: [
    "А) этот месяц",  
    "Б) в этом месяце",
    "В) об этом месяце",
    ""
  ]
}, 
{
  numb: 38,
  question: "Мы хотим поехать ...",  
  answer: "В) на юг", 
  options: [ 
    "А) юг",  
    "Б) на юге",
    "В) на юг",
    "" 
  ]
},
{
  numb: 39,
  question: "Книга лежит ...", 
  answer: "В) на столе",  
  options: [
    "А) стол", 
    "Б) столу",
    "В) на столе",
    ""
  ]
},
{
  numb: 40,
  question: "Дети гуляют ...", 
  answer: "В) по площади", 
  options: [
    "А) площадь",  
    "Б) о площади",
    "В) по площади",
    ""
  ]
},
{
  numb: 41,
  question: "Студенты сидят ...",  
  answer: "В) в аудитории", 
  options: [
    "А) аудитория",   
    "Б) в аудиторию",
    "В) в аудитории",
    ""   
  ]
}, 
{
  numb: 42,
  question: "Моя сестра работает ...",  
  answer: "Б) на почте",  
  options: [
    "А) о почте",   
    "Б) на почте",
    "В) почта",
    ""
  ]
},
{
  numb: 43,
  question: "Я учусь ...",  
  answer: "Б) в политехническом университете",
  options: [
    "А) политехнический университет",  
    "Б) в политехническом университете",
    "В) политехнического университета",
    ""
  ]
},
{
  numb: 44,
  question: "Мой родной город находится ... Китая.", 
  answer: "В) на севере", 
  options: [
    "А) север", 
    "Б) на север",
    "В) на севере",
    ""
  ]
},
  { 
  numb: 45,
  question: "Вчера студенты были ...", 
  answer: "В) на экскурсии", 
  options: [ 
    "А) экскурсия",  
    "Б) об экскурсии",
    "В) на экскурсии",
    ""
  ]
},
  {
  numb: 46, 
  question: "Родители Ахмеда живут ...", 
  answer: "В) в Сирии", 
  options: [
    "А) Сирия", 
    "Б) Сирией",
    "В) в Сирии",
    ""
  ]
},
  {
  numb: 47, 
  question: "Они долго стояли ...",  
  answer: "В) на мосту",  
  options: [
    "А) мост", 
    "Б) по мосту",
    "В) на мосту",
    ""
  ]
},
  { 
  numb: 48,
  question: "Друзья любят гулять ...",  
  answer: "А) в лесу",
  options: [ 
    "А) в лесу", 
    "Б) о лесе",
    "В) лес",
    ""
  ]
},
{
  numb: 49,
  question: "Маленький ребёнок спал ...",  
  answer: "Б) на диване", 
  options: [
    "А) диван",
    "Б) на диване",
    "В) с дивана",
    ""
  ]
},
{
  numb: 50,
  question: "В письме Марта спрашивала Джулию ...",  
  answer: "В) о матери",
  options: [
    "А) мать",
    "Б) для матери",
    "В) о матери",
    ""
  ]
},
{
  numb: 51,
  question: "На уроке мы читали ...",  
  answer: "Б) о Петербурге", 
  options: [
    "А) Петербург",   
    "Б) о Петербурге",
    "В) Петербургу",
    ""   
  ]
}, 
{
  numb: 52,
  question: "Мальчик мечтал ...",  
  answer: "А) о собаке",  
  options: [
    "А) о собаке",   
    "Б) собака",
    "В) собакой",
    ""
  ]
},
{
  numb: 53,
  question: "Преподаватель рассказывал нам ...",  
  answer: "В) об экзамене",
  options: [
    "А) к экзамену",  
    "Б) экзамен",
    "В) об экзамене",
    ""
  ]
},
{
  numb: 54,
  question: "Иван думал ...", 
  answer: "Б) о доме", 
  options: [
    "А) к дому", 
    "Б) о доме",
    "В) дом",
    ""
  ]
},
  { 
  numb: 55,
  question: "А.С. Пушкин много писал ...", 
  answer: "В) о любви", 
  options: [ 
    "А) любовь",  
    "Б) любовью",
    "В) о любви",
    ""
  ]
},
  {
  numb: 56, 
  question: "Я живу ...", 
  answer: "В) в большой светлой комнате", 
  options: [
    "А) большая светлая комната", 
    "Б) в большую светлую комнату",
    "В) в большой светлой комнате",
    ""
  ]
},
  {
  numb: 57, 
  question: "Моя подруга учится ...",  
  answer: "А) на втором курсе",  
  options: [
    "А) на втором курсе",
    "Б) второй курс",  
    "В) второго курса",
    ""
  ]
},
  { 
  numb: 58,
  question: "В ... есть телефон?",  
  answer: "В) твоей комнате",
  options: [ 
    "А) твоя комната",
    "Б) твою комнату", 
    "В) твоей комнате",
    ""
  ]
},
{
  numb: 59,
  question: "Вы были ... ?",  
  answer: "Б) в нашем клубе", 
  options: [
    "А) наш клуб",
    "Б) в нашем клубе",
    "В) о нашем клубе",
    ""
  ]
},
{
  numb: 60,
  question: "Она рассказывала ... брате.",  
  answer: "Б) о своём",
  options: [
    "А) своим", 
    "Б) о своём",
    "В) своему",
    ""
  ]
},
{
  numb: 61,
  question: "Мы слышали ...", 
  answer: "Б) об этом новом французском фильме", 
  options: [
    "А) этот новый французский фильм", 
    "Б) об этом новом французском фильме",
    "В) в этом новом французском фильме",
    ""
  ]
},
{
  numb: 62,
  question: "Каникулы начинаются 15 ... ",  
  answer: "В) января",  
  options: [
    "А) январь", 
    "Б) в январе",
    "В) января",
    ""
  ]
},
{
  numb: 63,
  question: "Я начал изучать русский язык ...", 
  answer: "Б) в прошлом году", 
  options: [
    "А) прошлый год", 
    "Б) в прошлом году", 
    "В) прошлым годом",
    ""
  ]
},
{
  numb: 64,
  question: "Мы идём на экскурсию ...",  
  answer: "В) на этой неделе",
  options: [ 
    "А) эта неделя", 
    "Б) эту неделю", 
    "В) на этой неделе",
    ""
  ]
},
{
  numb: 65,
  question: "Мы часто вспоминаем ...",  
  answer: "Б) об интересном путешествии", 
  options: [
    "А) интересным путешествием", 
    "Б) об интересном путешествии",
    "В) интересному путешествию",
    ""
  ]
},
{
  numb: 66,
  question: "Олег написал мне ...", 
  answer: "В) о своей любимой девушке", 
  options: [
    "А) своей любимой девушке",
    "Б) своя любимая девушка",
    "В) о своей любимой девушке",
    ""
  ]
},
{
  numb: 67,
  question: "... была хорошая погода.", 
  answer: "Б) в мае",
  options: [
    "А) май",
    "Б) в мае",
    "В) мая",
    ""
  ]
}, 
{
  numb: 68,
  question: "На столе лежало ...",  
  answer: "Б) зелёное яблоко", 
  options: [
    "А) с зелёным яблоком",
    "Б) зелёное яблоко",
    "В) в зелёном яблоке",
    ""
  ]
},
{
  numb: 69,
  question: "Преподаватель попросил студентов принести ...", 
  answer: "Б) географическую карту ", 
  options: [
    "А) географическая карта ", 
    "Б) географическую карту ",
    "В) географической картой",
    ""
  ]
},
{
  numb: 70,
  question: "Они любят ... ", 
  answer: "В) свою родную страну", 
  options: [
    "А) своей родной страной",  
    "Б) о своей родной стране",
    "В) свою родную страну",
    ""
  ]
},
{
  numb: 71,
  question: "Справа от окна стояло ...", 
  answer: "В) удобное кресло", 
  options: [
    "А) удобный диван", 
    "Б) удобная кровать",
    "В) удобное кресло",
    ""
  ]
},
{
  numb: 72,
  question: "Вчера Андрес и Каролина были ...",  
  answer: "Б) на дискотеке",  
  options: [
    "А) дискотека", 
    "Б) на дискотеке",
    "В) дискотеку",
    ""
  ]
},
{
  numb: 73,
  question: "Экзамен будет ...", 
  answer: "В) во вторник", 
  options: [
    "А) вторник", 
    "Б) о вторнике", 
    "В) во вторник",
    ""
  ]
},
{
  numb: 74,
  question: " Я очень хочу купить ...",  
  answer: "Б) этот словарь",
  options: [ 
    "А) этого словаря",  
    "Б) этот словарь",
    "В) этим словарём",
    ""
  ]
},
{
  numb: 75,
  question: "На уроке мы говорили ...",  
  answer: "Б) об истории России", 
  options: [
    "А) история России", 
    "Б) об истории России",
    "В) историей России",
    ""
  ]
},
];