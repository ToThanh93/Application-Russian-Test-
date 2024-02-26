// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "В этом городе есть ...",
  answer: "В) музыкальный театр", 
  options: [
    "А) в музыкальный театр", 
    "Б) в музыкальном театре",
    "В) музыкальный театр",
    "Г) музыкального театра"
  ]
},
  { 
  numb: 2,
  question: "Мы смотрели концерт артистов ... ",
  answer: "Г) музыкального театра", 
  options: [ 
    "А) в музыкальный театр", 
    "Б) в музыкальном театре",
    "В) музыкальный театр",
    "Г) музыкального театра"
  ]
},
  {
  numb: 3, 
  question: "Моя подруга работает ...", 
  answer: "Б) в музыкальном театре", 
  options: [
    "А) в музыкальный театр", 
    "Б) в музыкальном театре",
    "В) музыкальный театр",
    "Г) музыкального театра"
  ]
},
  {
  numb: 4,
  question: "Марии нравится ... ", 
  answer: "Б) классический балет",  
  options: [
    "А) о классическом балете ", 
    "Б) классический балет",
    "В) классического балета",
    "Г) классическим балетом"
  ]
},
  {
  numb: 5,
  question: "В театре был вечер ...",  
  answer: "В) классического балета", 
  options: [ 
    "А) о классическом балете ", 
    "Б) классический балет",
    "В) классического балета",
    "Г) классическим балетом"
  ]
},
{
  numb: 6,
  question: "Я купил книгу ... ", 
  answer:  "А) о классическом балете ",  
  options: [
    "А) о классическом балете ", 
    "Б) классический балет",
    "В) классического балета",
    "Г) классическим балетом"
  ]
},
{
  numb: 7,
  question: "Дженни подружилась ...",  
  answer: "Б) с интересными людьми", 
  options: [
    "А) интересных людей", 
    "Б) с интересными людьми",
    "В) интересным людям",
    "Г) интересные люди" 
  ]
},
{
  numb: 8,
  question: "В России Жан встретил много ...", 
  answer: "А) интересных людей",
  options: [
    "А) интересных людей", 
    "Б) с интересными людьми",
    "В) интересным людям",
    "Г) интересные люди" 
  ]
},
{
  numb: 9,
  question: "Здесь работают ...", 
  answer: "Г) интересные люди",  
  options: [
    "А) интересных людей", 
    "Б) с интересными людьми",
    "В) интересным людям",
    "Г) интересные люди" 
  ]
},
{
  numb: 10,
  question: "Анна заботится ... ", 
  answer: "В) о младшем брате",
  options: [
    "А) младшего брата", 
    "Б) с младшим братом",
    "В) о младшем брате",
    "Г) у младшего брата" 
  ]
},
{
  numb: 11,
  question: "У Игоря нет ...", 
  answer: "А) младшего брата", 
  options: [ 
    "А) младшего брата", 
    "Б) с младшим братом",
    "В) о младшем брате",
    "Г) у младшего брата" 
  ]
},
{
  numb: 12,
  question: "Я часто спорю ...",  
  answer: "Б) с младшим братом",  
  options: [
    "А) младшего брата", 
    "Б) с младшим братом",
    "В) о младшем брате",
    "Г) у младшего брата" 
  ]
},
{
  numb: 13,
  question: "Мы были в магазине ...", 
  answer: "В) детской одежды",  
  options: [
    "А) детская одежда",  
    "Б) детскую одежду",
    "В) детской одежды",
    "Г) детской одеждой" 
  ]
},
{
  numb: 14,
  question: "На втором этаже продаётся ...", 
  answer: "А) детская одежда",
  options: [
    "А) детская одежда",  
    "Б) детскую одежду",
    "В) детской одежды",
    "Г) детской одеждой" 
  ] 
}, 
{
  numb: 15,
  question: "Она всегда покупает здесь ...", 
  answer: "Б) детскую одежду", 
  options: [
    "А) детская одежда",  
    "Б) детскую одежду",
    "В) детской одежды",
    "Г) детской одеждой" 
  ]
},
{
  numb: 16,
  question: "В 14 часов начинается ...", 
  answer: "В) последняя лекция",
  options: [
    "А) последней лекции",  
    "Б) последнюю лекцию",
    "В) последняя лекция",
    "Г) на последней лекции"
  ]
},
{
  numb: 17,
  question: "Виктор не был ...", 
  answer: "Г) на последней лекции", 
  options: [
    "А) последней лекции",  
    "Б) последнюю лекцию",
    "В) последняя лекция",
    "Г) на последней лекции"
  ]
},
{
  numb: 18,
  question: "Завтра не будет ...", 
  answer: "А) последней лекции",
  options: [ 
    "А) последней лекции",  
    "Б) последнюю лекцию",
    "В) последняя лекция",
    "Г) на последней лекции"
  ]
},
{
  numb: 19,
  question: "Сегодня у него ...",  
  answer: "В) трудный зачёт",  
  options: [
    "А) трудного зачёта",  
    "Б) о трудном зачёте",
    "В) трудный зачёт",
    "Г) к трудному зачёту"
  ]
},
{
  numb: 20, 
  question: "Он серьёзно готовился ...",  
  answer: "Г) к трудному зачёту",  
  options: [
    "А) трудного зачёта",  
    "Б) о трудном зачёте",
    "В) трудный зачёт",
    "Г) к трудному зачёту"
  ]
},
{
  numb: 21,
  question: "Мы долго говорили ...",  
  answer: "Б) о трудном зачёте", 
  options: [
    "А) трудного зачёта",  
    "Б) о трудном зачёте",
    "В) трудный зачёт",
    "Г) к трудному зачёту"
  ]
}, 
{
  numb: 22,
  question: "Петербург создавался ...",  
  answer: "Г) замечательными архитекторами",  
  options: [
    "А) замечательные архитекторы",
    "Б) замечательных архитекторов",
    "В) замечательным архитекторам",
    "Г) замечательными архитекторами" 
  ]
},
{
  numb: 23,
  question: "В этом городе работали ...",  
  answer: "А) замечательные архитекторы", 
  options: [
    "А) замечательные архитекторы",
    "Б) замечательных архитекторов",
    "В) замечательным архитекторам",
    "Г) замечательными архитекторами" 
  ]
},
{
  numb: 24,
  question: "Имена ... живут в названиях улиц.", 
  answer: "Б) замечательных архитекторов", 
  options: [
    "А) замечательные архитекторы",
    "Б) замечательных архитекторов",
    "В) замечательным архитекторам",
    "Г) замечательными архитекторами" 
  ]
},
  { 
  numb: 25,
  question: "Брат Бориса - ...", 
  answer: "В) школьный учитель", 
  options: [ 
    "А) школьного учителя",
    "Б) школьному учителю",
    "В) школьный учитель",
    "Г) школьным учителем"  
  ]
},
  {
  numb: 26, 
  question: "Он всегда хотел стать ...", 
  answer: "Г) школьным учителем", 
  options: [
    "А) школьного учителя",
    "Б) школьному учителю",
    "В) школьный учитель",
    "Г) школьным учителем"  
  ]
},
  {
  numb: 27, 
  question: "Он дал мне фотографию ...",  
  answer: "А) школьного учителя", 
  options: [
    "А) школьного учителя",
    "Б) школьному учителю",
    "В) школьный учитель",
    "Г) школьным учителем"  
  ]
},
  { 
  numb: 28,
  question: "Мы познакомились ...",  
  answer: "Б) с известными артистами",
  options: [ 
    "А) известные артисты",
    "Б) с известными артистами",
    "В) от известных артистов",
    "Г) известным артистам"  
  ]
},
{
  numb: 29,
  question: "В спектакле участвовали ...",  
  answer: "А) известные артисты", 
  options: [
    "А) известные артисты",
    "Б) с известными артистами",
    "В) от известных артистов",
    "Г) известным артистам"  
  ]
},
{
  numb: 30,
  question: "Зрители подарили цветы ...",  
  answer: "Г) известным артистам",
  options: [
    "А) известные артисты",
    "Б) с известными артистами",
    "В) от известных артистов",
    "Г) известным артистам"  
  ]
},
{
  numb: 31,
  question: "Сложные операции делаются ...", 
  answer: "Б) опытными врачами ", 
  options: [
    "А) опытные врачи",
    "Б) опытными врачами ",
    "В) опытных врачей",
    "Г) к опытным врачам" 
  ]
},
{
  numb: 32,
  question: "В нашей больнице много ...",  
  answer: "В) опытных врачей",  
  options: [
    "А) опытные врачи",
    "Б) опытными врачами ",
    "В) опытных врачей",
    "Г) к опытным врачам" 
  ]
},
{
  numb: 33,
  question: "На конференции выступали ...", 
  answer: "А) опытные врачи", 
  options: [
    "А) опытные врачи",
    "Б) опытными врачами ",
    "В) опытных врачей",
    "Г) к опытным врачам" 
  ]
},
{
  numb: 34,
  question: "Летом Хуан поедет ...",  
  answer: "Б) к своим родителям",
  options: [ 
    "А) у своих родителей",  
    "Б) к своим родителям",
    "В) от своих родителей",
    "Г) своих родителей" 
  ]
},
{
  numb: 35,
  question: "Он часто получает письма ...",  
  answer: "В) от своих родителей", 
  options: [
    "А) у своих родителей",  
    "Б) к своим родителям",
    "В) от своих родителей",
    "Г) своих родителей" 
  ]
},
{
  numb: 36,
  question: "Мой друг очень любит ...", 
  answer: "Г) своих родителей", 
  options: [
    "А) у своих родителей",  
    "Б) к своим родителям",
    "В) от своих родителей",
    "Г) своих родителей" 
  ]
},
{
  numb: 37,
  question: "В Москве много ...", 
  answer: "В) красивых парков",
  options: [
    "А) красивые парки",  
    "Б) в красивых парках",
    "В) красивых парков",
    "Г) красивым паркам" 
  ]
}, 
{
  numb: 38,
  question: "Мне нравятся... города. ",  
  answer: "А) красивые парки", 
  options: [ 
    "А) красивые парки",  
    "Б) в красивых парках",
    "В) красивых парков",
    "Г) красивым паркам" 
  ]
},
{
  numb: 39,
  question: "Москвичи любят гулять ...", 
  answer: "Б) в красивых парках",  
  options: [
    "А) красивые парки",  
    "Б) в красивых парках",
    "В) красивых парков",
    "Г) красивым паркам" 
  ]
},
{
  numb: 40,
  question: "Экскурсовод познакомил ... с музеем.", 
  answer: "Б) туристов", 
  options: [
    "А) туристы",   
    "Б) туристов",
    "В) с туристами",
    "Г) туристам" 
  ]
},
{
  numb: 41,
  question: "Карта города всегда нужна ....",  
  answer: "Г) туристам", 
  options: [
    "А) туристы",   
    "Б) туристов",
    "В) с туристами",
    "Г) туристам" 
  ]
}, 
{
  numb: 42,
  question: "Из автобуса вышли ...",  
  answer: "А) туристы",  
  options: [
    "А) туристы",   
    "Б) туристов",
    "В) с туристами",
    "Г) туристам" 
  ]
},
{
  numb: 43,
  question: "Люди должны охранять ... ",  
  answer: "Г) природу",
  options: [
    "А) на природе",   
    "Б) о природе",
    "В) у природы",
    "Г) природу" 
  ]
},
{
  numb: 44,
  question: "Андрей любит читать рассказы ...", 
  answer: "Б) о природе", 
  options: [
    "А) на природе",   
    "Б) о природе",
    "В) у природы",
    "Г) природу" 
  ]
},
  { 
  numb: 45,
  question: "Летом мы проводим много времени ...", 
  answer: "А) на природе", 
  options: [ 
    "А) на природе",   
    "Б) о природе",
    "В) у природы",
    "Г) природу" 
  ]
},
  {
  numb: 46, 
  question: "До конца работы осталось ...", 
  answer: "Б) 20 минут", 
  options: [
    "А) через 20 минут",   
    "Б) 20 минут",
    "В) 20 минут назад",
    "" 
  ]
},
  {
  numb: 47, 
  question: "Футбольный матч кончится …",  
  answer: "А) через 20 минут",  
  options: [
    "А) через 20 минут",   
    "Б) 20 минут",
    "В) 20 минут назад",
    "" 
  ]
},
  { 
  numb: 48,
  question: "Фильм продолжался ...",  
  answer: "Б) 20 минут",
  options: [ 
    "А) через 20 минут",   
    "Б) 20 минут",
    "В) 20 минут назад",
    "" 
  ]
},
{
  numb: 49,
  question: "Отец вернулся домой ...",  
  answer: "В) 20 минут назад", 
  options: [
    "А) через 20 минут",   
    "Б) 20 минут",
    "В) 20 минут назад",
    "" 
  ]
},
{
  numb: 50,
  question: "В соревнованиях участвовали ...",  
  answer: "В) молодые спортсмены",
  options: [
    "А) с молодыми спортсменами",   
    "Б) молодых спортсменов",
    "В) молодые спортсмены",
    "Г) о молодых спортсменах" 
  ]
},
{
  numb: 51,
  question: "Тренер познакомил журналистов ...",  
  answer: "А) с молодыми спортсменами", 
  options: [
    "А) с молодыми спортсменами",   
    "Б) молодых спортсменов",
    "В) молодые спортсмены",
    "Г) о молодых спортсменах" 
  ]
}, 
{
  numb: 52,
  question: "В статье написали ...",  
  answer: "Г) о молодых спортсменах",  
  options: [
    "А) с молодыми спортсменами",   
    "Б) молодых спортсменов",
    "В) молодые спортсмены",
    "Г) о молодых спортсменах" 
  ]
},
{
  numb: 53,
  question: "Музей откроется ...",  
  answer: "Б) в следующем году ",
  options: [
    "А) следующий год",   
    "Б) в следующем году ",
    "В) следующего года",
    "" 
  ]
},
{
  numb: 54,
  question: "... - первый месяц весны.", 
  answer: "Б) март", 
  options: [
    "А) в марте",   
    "Б) март",
    "В) марта",
    "" 
  ]
},
  { 
  numb: 55,
  question: "Сестра приедет ко мне ... ", 
  answer: "А) в марте", 
  options: [ 
    "А) в марте",   
    "Б) март",
    "В) марта",
    "" 
  ]
},
  {
  numb: 56, 
  question: "Конференция будет в конце ...", 
  answer: "В) марта", 
  options: [
    "А) в марте",   
    "Б) март",
    "В) марта",
    "" 
  ]
},
  {
  numb: 57, 
  question: "... 31 день.",  
  answer: "А) в марте",  
  options: [
    "А) в марте",   
    "Б) март",
    "В) марта",
    "" 
  ]
},
  { 
  numb: 58,
  question: "У моих родителей много ...",  
  answer: "А) друзей",
  options: [ 
    "А) друзей",
    "Б) друзья",
    "В) друга",
    ""
  ]
},
{
  numb: 59,
  question: "Завтра ко мне придут ...",  
  answer: "Б) друзья", 
  options: [
    "А) друзей",
    "Б) друзья",
    "В) друга",
    ""
  ]
},
{
  numb: 60,
  question: "Три ... решили поехать в Новгород",  
  answer: "В) друга",
  options: [
    "А) друзей",
    "Б) друзья",
    "В) друга",
    ""
  ]
},
{
  numb: 61,
  question: "Сколько... Лора пригласила на концерт?", 
  answer: "А) друзей", 
  options: [
    "А) друзей",
    "Б) друзья",
    "В) друга",
    ""
  ]
},
{
  numb: 62,
  question: "Сколько ... работает на этом заводе?",  
  answer: "В) инженеров",  
  options: [
    "А) инженеры",
    "Б) инженера",
    "В) инженеров",
    ""
  ]
},
{
  numb: 63,
  question: "Сложные машины создают ...", 
  answer: "А) инженеры", 
  options: [
    "А) инженеры",
    "Б) инженера",
    "В) инженеров",
    ""
  ]
},
{
  numb: 64,
  question: "Наш университет готовит …",  
  answer: "В) инженеров",
  options: [ 
    "А) инженеры",
    "Б) инженера",
    "В) инженеров",
    ""
  ]
},
{
  numb: 65,
  question: "Эту статью написали два ...",  
  answer: "Б) инженера", 
  options: [
    "А) инженеры",
    "Б) инженера",
    "В) инженеров",
    ""
  ]
},
{
  numb: 66,
  question: "Россия богата ...", 
  answer: "Б) алмазами", 
  options: [
    "А) алмазов",
    "Б) алмазами",
    "В) алмаза",
    ""
  ]
},
{
  numb: 67,
  question: "Пётр I интересовался ...", 
  answer: "В) техническими науками",
  options: [
    "А) техническим наукам",
    "Б) технических наук",
    "В) техническими науками",
    ""
  ]
}, 
{
  numb: 68,
  question: "Этот концерт понравился ... ",  
  answer: "Б) всем преподавателям", 
  options: [
    "А) все преподаватели",
    "Б) всем преподавателям",
    "В) всеми преподавателями",
    ""
  ]
},
{
  numb: 69,
  question: "Студенты были в поликлинике ...", 
  answer: "В) у разных врачей", 
  options: [
    "А) разных врачей", 
    "Б) разным врачам",
    "В) у разных врачей",
    ""
  ]
},
{
  numb: 70,
  question: "Сколько ... в вашем городе?", 
  answer: "Б) университетов", 
  options: [
    "А) университеты", 
    "Б) университетов",
    "В) университетами",
    ""
  ]
},
{
  numb: 71,
  question: "Россия занимает I место в мире ...", 
  answer: "В) по запасам леса", 
  options: [
    "А) запасы леса", 
    "Б) запасов леса",
    "В) по запасам леса",
    ""
  ]
},
{
  numb: 72,
  question: "Петербург расположен ...",  
  answer: "Б) на берегах Невы",  
  options: [
    "А) на берега Невы", 
    "Б) на берегах Невы",
    "В) берега Невы",
    ""
  ]
},
{
  numb: 73,
  question: "Мой друг увлекается ...", 
  answer: "В) разными видами спорта", 
  options: [
    "А) разные виды спорта", 
    "Б) разных видов спорта",
    "В) разными видами спорта",
    ""
  ]
},
{
  numb: 74,
  question: "... были каникулы.",  
  answer: "А) у иностранных студентов",
  options: [ 
    "А) у иностранных студентов", 
    "Б) иностранные студенты",
    "В) иностранным студентам",
    ""
  ]
},
{
  numb: 75,
  question: "Я встретил в центре города ...",  
  answer: "Б) своих друзей", 
  options: [
    "А) со своими друзьями", 
    "Б) своих друзей",
    "В) у своих друзей",
    ""
  ]
},

];