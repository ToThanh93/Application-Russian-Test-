// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Мой брат молодой, а мой дедушка …",
  answer: "В) старый", 
  options: [
    "А) старший",
    "Б) старинный",
    "В) старый",
    ""
  ]
},
  { 
  numb: 2,
  question: "Наташа не ... читать по-немецки.",
  answer: "Б) умеет", 
  options: [ 
    "А) знает", 
    "Б) умеет",
    "В) понимает",
    ""
  ]
},
  {
  numb: 3, 
  question: "Лектор ..., что его зовут Иван Петрович.", 
  answer: "Б) сказал", 
  options: [
    "А) рассказал",
    "Б) сказал",
    "В) разговаривал",
    ""
  ]
},
  {
  numb: 4,
  question: "Студенты окончили университет и ... дипломы.", 
  answer: "В) получили",  
  options: [
    "А) взяли", 
    "Б) сделали",
    "В) получили",
    ""
  ]
},
  {
  numb: 5,
  question: "Мы должны ... все задачи через 2 часа.",  
  answer: "Б) решить", 
  options: [ 
    "А) решать ", 
    "Б) решить",
    "В) учить",
    ""
  ]
},
{
  numb: 6,
  question: "Моей сестре нравится ... по центру города.", 
  answer:  "Б) гулять",  
  options: [
    "А) отдыхать", 
    "Б) гулять",
    "В) играть",
    ""
  ]
},
{
  numb: 7,
  question: "Антон читает ... без словаря.",  
  answer: "Б) по-английски", 
  options: [
    "А) английский язык", 
    "Б) по-английски",
    "В) английский",
    ""
  ]
},
{
  numb: 8,
  question: "Деканат находится не здесь, а ...", 
  answer: "В) там",
  options: [
    "А) туда", 
    "Б) сюда",
    "В) там",
    ""
  ]
},
{
  numb: 9,
  question: "Мой друг - студент, он ... в институте. ", 
  answer: "В) учится",  
  options: [
    " А) учит", 
    "Б) изучает",
    "В) учится",
    "" 
  ]
},
{
  numb: 10,
  question: "Марина хочет ... новые стихи.", 
  answer: "Б) выучить",
  options: [
    "А) изучить", 
    "Б) выучить",
    "В) изучает",
    "" 
  ]
},
{
  numb: 11,
  question: "Многие студенты ... из Азии.", 
  answer: "А) приехали", 
  options: [ 
    "А) приехали", 
    "",
    "Б) пришли",
    "" 
  ]
},
{
  numb: 12,
  question: "Мой отец ... мне стать врачом.",  
  answer: "Б) посоветовал",  
  options: [
    "А) попросил", 
    "Б) посоветовал",
    "В) рассказывал",
    "" 
  ]
},
{
  numb: 13,
  question: "Елена ..., когда начинаются экзамены.", 
  answer: "Б) спросила",  
  options: [
    "А) посоветовала", 
    "Б) спросила",
    "В) попросила",
    "" 
  ]
},
{
  numb: 14,
  question: "Я люблю спорт и часто... в футбол.", 
  answer: "В) играю",
  options: [
    "А) занимаюсь", 
    "Б) делаю",
    "В) играю",
    "" 
  ] 
}, 
{
  numb: 15,
  question: "На уроке преподаватель интересно... о русских поэтах. ", 
  answer: "А) рассказывал", 
  options: [
    "А) рассказывал",  
    "",
    "Б) разговаривал",
    ""  
  ]
},
{
  numb: 16,
  question: "Преподаватель... со своими студентами.", 
  answer: "Б) разговаривал",
  options: [
    "А) рассказывал",  
    "",
    "Б) разговаривал",
    ""  
  ]
},
{
  numb: 17,
  question: "Мы уже ... этого студента.", 
  answer: "Б) видели", 
  options: [
    "А) смотрели",  
    "",
    "Б) видели",
    "" 
  ]
},
{
  numb: 18,
  question: "Вчера весь вечер они... телевизор. ", 
  answer: "А) смотрели",
  options: [ 
    "А) смотрели",  
    "",
    "Б) видели",
    "" 
  ]
},
{
  numb: 19,
  question: "В кинотеатре они 2 часа .... новый фильм.",  
  answer: "А) смотрели",  
  options: [
    "А) смотрели",  
    "",
    "Б) видели",
    "" 
  ]
},
{
  numb: 20, 
  question: "Вы не ... нашего преподавателя?",  
  answer: "Б) видели",  
  options: [
    "А) смотрели",  
    "",
    "Б) видели",
    "" 
  ]
},
{
  numb: 21,
  question: "Произведения искусства народов России можно посмотреть ...",  
  answer: "Б) в Музее этнографии ", 
  options: [
    "А) Музей этнографии", 
    "Б) в Музее этнографии ",
    "В) из Музея этнографии",
    ""  
  ]
}, 
{
  numb: 22,
  question: "Иностранные студенты были на экскурсии ...",  
  answer: "В) в средней школе",  
  options: [
    "А) из средней школы", 
    "Б) средняя школа",
    "В) в средней школе",
    ""
  ]
},
{
  numb: 23,
  question: "Студенты смотрят незнакомые слова ...",  
  answer: "Б) в словарях", 
  options: [
    "А) словарей", 
    "Б) в словарях",
    "В) словари",
    ""
  ]
},
{
  numb: 24,
  question: "Все новые студенты должны взять учебники ...", 
  answer: "Б) в нашей библиотеке", 
  options: [
    "А) наша библиотека", 
    "Б) в нашей библиотеке",
    "В) нашу библиотеку",
    ""
  ]
},
  { 
  numb: 25,
  question: "Знаменитый русский балет можно посмотреть ...", 
  answer: "Б) в Мариинском театре", 
  options: [ 
    "А) Мариинский театр", 
    "Б) в Мариинском театре",
    "В) у Мариинского театpa",
    ""
  ]
},
  {
  numb: 26, 
  question: "Молоко, кефир, сметану, творог можно купить ...", 
  answer: "В) в молочном отделе", 
  options: [
    "А) молочный отдел", 
    "Б) молочным отделом",
    "В) в молочном отделе",
    ""
  ]
},
  {
  numb: 27, 
  question: "Чемпионат по футболу начнётся ...",  
  answer: "В) в марте", 
  options: [
    "А) пятое марта", 
    "Б) март",
    "В) в марте",
    "" 
  ]
},
  { 
  numb: 28,
  question: "Сегодня ....",  
  answer: "А) пятое марта",
  options: [ 
    "А) пятое марта", 
    "Б) март",
    "В) в марте",
    "" 
  ]
},
{
  numb: 29,
  question: "Мой брат получил диплом … ",  
  answer: "Б) десятого июля", 
  options: [
    "А) июль", 
    "Б) десятого июля",
    "В) десятое июля",
    "" 
  ]
},
{
  numb: 30,
  question: "... - самый тёплый месяц.",  
  answer: "А) июль",
  options: [
    "А) июль", 
    "Б) десятого июля",
    "В) десятое июля",
    "" 
  ]
},
{
  numb: 31,
  question: "Моя подруга живёт ...", 
  answer: "В) в Индии", 
  options: [
    "А) Индия",  
    "Б) в Индию",
    "В) в Индии",
    ""
  ]
},
{
  numb: 32,
  question: "… - страна с интересными традициями.",  
  answer: "А) Индия",  
  options: [
    "А) Индия",  
    "Б) в Индию",
    "В) в Индии",
    ""
  ]
},
{
  numb: 33,
  question: "Скоро она поедет ...", 
  answer: "Б) в Индию", 
  options: [
    "А) Индия",  
    "Б) в Индию",
    "В) в Индии",
    ""
  ]
},
{
  numb: 34,
  question: "Давай встретимся ... на станции метро. ",  
  answer: "Б) через два часа",
  options: [ 
    "А) два часа",  
    "Б) через два часа",
    "В) два часа назад",
    "" 
  ]
},
{
  numb: 35,
  question: "Я ждал друга почти ...",  
  answer: "А) два часа", 
  options: [
    "А) два часа",  
    "Б) через два часа",
    "В) два часа назад",
    "" 
  ]
},
{
  numb: 36,
  question: "Автобус ушёл ...", 
  answer: "В) два часа назад", 
  options: [
    "А) два часа",  
    "Б) через два часа",
    "В) два часа назад",
    "" 
  ]
},
{
  numb: 37,
  question: "Каникулы начнутся ...", 
  answer: "Б) через неделю",
  options: [
    "А) неделю назад",  
    "Б) через неделю",
    "В) неделю",
    "" 
  ]
}, 
{
  numb: 38,
  question: "Каникулы продолжаются ...",  
  answer: "В) неделю", 
  options: [ 
    "А) неделю назад",  
    "Б) через неделю",
    "В) неделю",
    "" 
  ]
},
{
  numb: 39,
  question: "Каникулы начались ...", 
  answer: "А) неделю назад",  
  options: [
    "А) неделю назад",  
    "Б) через неделю",
    "В) неделю",
    "" 
  ]
},
{
  numb: 40,
  question: "Мы начнём изучать испанский язык ...", 
  answer: "В) через год", 
  options: [
    "А) год",   
    "Б) в прошлом году",
    "В) через год",
    ""
  ]
},
{
  numb: 41,
  question: "Мы уже ... изучаем испанский язык. ",  
  answer: "А) год", 
  options: [
    "А) год",   
    "Б) в прошлом году",
    "В) через год",
    ""
  ]
}, 
{
  numb: 42,
  question: "... мы начали изучать испанский язык.",  
  answer: "Б) в прошлом году",  
  options: [
    "А) год",   
    "Б) в прошлом году",
    "В) через год",
    ""
  ]
},
{
  numb: 43,
  question: "Положите, пожалуйста, учебник ... ",  
  answer: "Б) на письменный стол",
  options: [
    "А) на письменном столе", 
    "Б) на письменный стол",
    "В) письменный стол",
    ""
  ]
},
{
  numb: 44,
  question: "Учебник лежит ...", 
  answer: "А) на письменном столе", 
  options: [
    "А) на письменном столе", 
    "Б) на письменный стол",
    "В) письменный стол",
    ""
  ]
},
  { 
  numb: 45,
  question: "Мой ... стоит у окна.", 
  answer: "В) письменный стол", 
  options: [ 
    "А) на письменном столе", 
    "Б) на письменный стол",
    "В) письменный стол",
    ""
  ]
},
  {
  numb: 46, 
  question: "Друг забыл ключи ...", 
  answer: "А) на письменном столе", 
  options: [
    "А) на письменном столе", 
    "Б) на письменный стол",
    "В) письменный стол",
    ""
  ]
},
  {
  numb: 47, 
  question: "Вы давно знаете ... ?",  
  answer: "Б) нашего преподавателя",  
  options: [
    "А) наш преподаватель",
    "Б) нашего преподавателя",
    "В) с нашим преподавателем",
    "Г) нашему преподавателю"
  ]
},
  { 
  numb: 48,
  question: "Да, ... работает здесь уже пять лет.",  
  answer: "А) наш преподаватель",
  options: [ 
    "А) наш преподаватель",
    "Б) нашего преподавателя",
    "В) с нашим преподавателем",
    "Г) нашему преподавателю"
  ]
},
{
  numb: 49,
  question: "... 42 года.",  
  answer: "Г) нашему преподавателю", 
  options: [
    "А) наш преподаватель",
    "Б) нашего преподавателя",
    "В) с нашим преподавателем",
    "Г) нашему преподавателю"
  ]
},
{
  numb: 50,
  question: "Мне очень нравится разговаривать ...",  
  answer: "В) с нашим преподавателем",
  options: [
    "А) наш преподаватель",
    "Б) нашего преподавателя",
    "В) с нашим преподавателем",
    "Г) нашему преподавателю"
  ]
},
{
  numb: 51,
  question: "Это моя ...",  
  answer: "Б) русская подруга", 
  options: [
    "А) у русской подруги", 
    "Б) русская подруга",
    "В) русской подруге",
    "Г) русскую подругу"
  ]
}, 
{
  numb: 52,
  question: "Я хочу подарить книгу ...",  
  answer: "В) русской подруге",  
  options: [
    "А) у русской подруги", 
    "Б) русская подруга",
    "В) русской подруге",
    "Г) русскую подругу"
  ]
},
{
  numb: 53,
  question: "Я очень люблю ...",  
  answer: "Г) русскую подругу",
  options: [
    "А) у русской подруги", 
    "Б) русская подруга",
    "В) русской подруге",
    "Г) русскую подругу"
  ]
},
{
  numb: 54,
  question: "Вчера мы были ...", 
  answer: "А) у русской подруги", 
  options: [
    "А) у русской подруги", 
    "Б) русская подруга",
    "В) русской подруге",
    "Г) русскую подругу"
  ]
},
  { 
  numb: 55,
  question: "В четверг Игорь поедет ...", 
  answer: "Б) к школьному другу", 
  options: [ 
    "А) школьному другу",
    "Б) к школьному другу", 
    "В) школьного друга",
    "Г) со школьным другом"
  ]
},
  {
  numb: 56, 
  question: "Вчера Аня встретилась ... ", 
  answer: "Г) со школьным другом", 
  options: [
    "А) школьному другу",
    "Б) к школьному другу", 
    "В) школьного друга",
    "Г) со школьным другом"
  ]
},
  {
  numb: 57, 
  question: "Я должен позвонить ...",  
  answer: "А) школьному другу",  
  options: [
    "А) школьному другу",
    "Б) к школьному другу", 
    "В) школьного друга",
    "Г) со школьным другом"
  ]
},
  { 
  numb: 58,
  question: "Эта картина подарок моего ...",  
  answer: "В) школьного друга",
  options: [ 
    "А) школьному другу",
    "Б) к школьному другу", 
    "В) школьного друга",
    "Г) со школьным другом"
  ]
},
{
  numb: 59,
  question: "Сегодня очень ...",  
  answer: "В) холодно", 
  options: [
    "А) холодный",
    "Б) холодная ",
    "В) холодно",
    "Г) холодное"
  ]
},
{
  numb: 60,
  question: "Климат на севере ...",  
  answer: "А) холодный",
  options: [
    "А) холодный",
    "Б) холодная ",
    "В) холодно",
    "Г) холодное"
  ]
},
{
  numb: 61,
  question: "Мне ...", 
  answer: "В) холодно", 
  options: [
    "А) холодный",
    "Б) холодная ",
    "В) холодно",
    "Г) холодное"
  ]
},
{
  numb: 62,
  question: "В этом году зима очень ...",  
  answer: "Б) холодная ",  
  options: [
    "А) холодный",
    "Б) холодная ",
    "В) холодно",
    "Г) холодное"
  ]
},
{
  numb: 63,
  question: "Родители пишут ... о своей жизни.", 
  answer: "Б) ему ", 
  options: [
    "А) он", 
    "Б) ему ", 
    "В) его",
    "Г) о нём"
  ]
},
{
  numb: 64,
  question: "... не было на экскурсии.",  
  answer: "В) его",
  options: [ 
    "А) он", 
    "Б) ему ", 
    "В) его",
    "Г) о нём"
  ]
},
{
  numb: 65,
  question: "В нашем доме очень много ...",  
  answer: "Б) картин", 
  options: [
    "А) картина",  
    "Б) картин",
    "В) картины",
    "Г) картину"
  ]
},
{
  numb: 66,
  question: "Недавно отец купил ещё одну ... ", 
  answer: "Г) картину", 
  options: [
    "А) картина",  
    "Б) картин",
    "В) картины",
    "Г) картину"
  ]
},
{
  numb: 67,
  question: "Все ... очень красивые.", 
  answer: "В) картины",
  options: [
    "А) картина",  
    "Б) картин",
    "В) картины",
    "Г) картину"
  ]
}, 
{
  numb: 68,
  question: "Эта ... находится в Эрмитаже.",  
  answer: "А) картина", 
  options: [
    "А) картина",  
    "Б) картин",
    "В) картины",
    "Г) картину"
  ]
},
{
  numb: 69,
  question: "Эту статью написали три ...", 
  answer: "Б) журналиста", 
  options: [
    "А) журналистов",
    "Б) журналиста",
    "В) журналисты",
    "Г) с журналистами"
  ]
},
{
  numb: 70,
  question: "Сколько ... работает в этой редакции?", 
  answer: "А) журналистов", 
  options: [
    "А) журналистов",
    "Б) журналиста",
    "В) журналисты",
    "Г) с журналистами"
  ]
},
{
  numb: 71,
  question: "На конференцию приехали ... ", 
  answer: "В) журналисты", 
  options: [
    "А) журналистов",
    "Б) журналиста",
    "В) журналисты",
    "Г) с журналистами"
  ]
},
{
  numb: 72,
  question: "Спортсмены встретились ...",  
  answer: "Г) с журналистами",  
  options: [
    "А) журналистов",
    "Б) журналиста",
    "В) журналисты",
    "Г) с журналистами"
  ]
},
{
  numb: 73,
  question: "Скажите, пожалуйста, как называется ... улица?", 
  answer: "В) эта", 
  options: [
    "А) это", 
    "Б) этот", 
    "В) эта",
    "Г) эти"
  ]
},
{
  numb: 74,
  question: "Сколько стоят ... открытки?",  
  answer: "Г) эти",
  options: [ 
    "А) это", 
    "Б) этот", 
    "В) эта",
    "Г) эти"
  ]
},
{
  numb: 75,
  question: "Я хочу купить ... костюм.",  
  answer: "Б) этот", 
  options: [
    "А) это", 
    "Б) этот", 
    "В) эта",
    "Г) эти"
  ]
},
{
  numb: 76,
  question: "В Петербурге редко бывает ... погода.", 
  answer: "В) хорошая", 
  options: [
    "А) хороший",  
    "Б) хорошие",
    "В) хорошая",
    "Г) хорошо"
  ]
},
{
  numb: 77,
  question: "Наши студенты уже ... говорят по-русски.", 
  answer: "Г) хорошо",
  options: [
    "А) хороший",  
    "Б) хорошие",
    "В) хорошая",
    "Г) хорошо"
  ]
}, 
{
  numb: 78,
  question: "Этот словарь очень ...",  
  answer: "А) хороший", 
  options: [
    "А) хороший",  
    "Б) хорошие",
    "В) хорошая",
    "Г) хорошо"
  ]
},
{
  numb: 79,
  question: "Мы купили ... учебники.", 
  answer: "Б) хорошие", 
  options: [
    "А) хороший",  
    "Б) хорошие",
    "В) хорошая",
    "Г) хорошо"
  ]
},
{
  numb: 80,
  question: "Сегодня на уроке мы слушали рассказ ...", 
  answer: "Б) об известных учёных", 
  options: [
    "А) известные учёные",  
    "Б) об известных учёных",
    "В) известным учёным",
    "Г) с известными учёными"
  ]
},
];