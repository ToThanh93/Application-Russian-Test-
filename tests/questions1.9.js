// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Этого студента зовут ...",
  answer: "В) Максим", 
  options: [
    "А) к Максиму", 
    "Б) у Максима",
    "В) Максим",
    "Г) Максима"
  ]
},
  { 
  numb: 2,
  question: "Я хорошо знаю ... ",
  answer: "Г) Максима", 
  options: [ 
    "А) к Максиму", 
    "Б) у Максима",
    "В) Максим",
    "Г) Максима"
  ]
},
  {
  numb: 3, 
  question: "Я часто бываю ...", 
  answer: "Б) у Максима", 
  options: [
    "А) к Максиму", 
    "Б) у Максима",
    "В) Максим",
    "Г) Максима"
  ]
},
  {
  numb: 4,
  question: "Сегодня я позвоню ...", 
  answer: "Б) Максиму",  
  options: [
    "А) к Максиму", 
    "Б) Максиму",
    "В) Максим",
    "Г) Максима"
  ]
},
  {
  numb: 5,
  question: "Завтра я поеду …",  
  answer: "А) к Максиму", 
  options: [ 
    "А) к Максиму", 
    "Б) у Максима",
    "В) Максим",
    "Г) Максима"
  ]
},
{
  numb: 6,
  question: "Недавно я получил письмо ...", 
  answer:  "Г) от брата",  
  options: [
    "А) у брата ", 
    "Б) к брату",
    "В) брату",
    "Г) от брата" 
  ]
},
{
  numb: 7,
  question: "Сегодня я написал ответ ...",  
  answer: "В) брату", 
  options: [
    "А) у брата ", 
    "Б) к брату",
    "В) брату",
    "Г) от брата" 
  ]
},
{
  numb: 8,
  question: "Я давно не видел ...", 
  answer: "Б) брата",
  options: [
    "А) у брата", 
    "Б) брата",
    "В) брату",
    "Г) от брата" 
  ]
},
{
  numb: 9,
  question: "Скоро я поеду ...", 
  answer: "Б) к брату",  
  options: [
    "А) у брата ", 
    "Б) к брату",
    "В) брату",
    "Г) от брата" 
  ]
},
{
  numb: 10,
  question: "Всё лето я буду жить ...", 
  answer: "А) у брата",
  options: [
    "А) у брата", 
    "Б) к брату",
    "В) брату",
    "Г) от брата" 
  ]
},
{
  numb: 11,
  question: "Раньше я не любил ...", 
  answer: "Г) деревню", 
  options: [ 
    "А) с деревней",  
    "Б) в деревню",
    "В) в деревне",
    "Г) деревню" 
  ]
},
{
  numb: 12,
  question: "Летом наша семья отдыхала ...",  
  answer: "В) в деревне",  
  options: [
    "А) с деревней",  
    "Б) в деревню",
    "В) в деревне",
    "Г) деревню"  
  ]
},
{
  numb: 13,
  question: "Рядом ... находится красивое озеро. ", 
  answer: "А) с деревней",  
  options: [
    "А) с деревней",  
    "Б) в деревню",
    "В) в деревне",
    "Г) деревню"  
  ]
},
{
  numb: 14,
  question: "Теперь мне очень нравится …", 
  answer: "В) деревня",
  options: [
    "А) с деревней",  
    "Б) в деревню",
    "В) деревня",
    "Г) деревню"  
  ] 
}, 
{
  numb: 15,
  question: "Каждое лето я буду ездить ...", 
  answer: "Б) в деревню", 
  options: [
    "А) с деревней",  
    "Б) в деревню",
    "В) в деревне",
    "Г) деревню" 
  ]
},
{
  numb: 16,
  question: "Этот журналист приехал ...", 
  answer: "Г) из Вьетнама",
  options: [
    "А) Вьетнам",  
    "Б) во Вьетнаме",
    "В) Вьетнама",
    "Г) из Вьетнама"
  ]
},
{
  numb: 17,
  question: "Он работал в столице ...", 
  answer: "В) Вьетнама", 
  options: [
    "А) Вьетнам",  
    "Б) во Вьетнаме",
    "В) Вьетнама",
    "Г) из Вьетнама"
  ]
},
{
  numb: 18,
  question: "Он хорошо знает ... ", 
  answer: "А) Вьетнам",
  options: [ 
    "А) Вьетнам",  
    "Б) во Вьетнаме",
    "В) Вьетнама",
    "Г) из Вьетнама"
  ]
},
{
  numb: 19,
  question: "Недавно он написал книгу ...",  
  answer: "А) о Вьетнаме",  
  options: [
    "А) о Вьетнаме",  
    "Б) во Вьетнаме",
    "В) Вьетнама",
    "Г) из Вьетнама"
  ]
},
{
  numb: 20, 
  question: "Родители Ахмада живут …",  
  answer: "Б) в Сирии",  
  options: [
    "А) Сирия",  
    "Б) в Сирии",
    "В) о Сирии",
    "Г) в Сирию"
  ]
},
{
  numb: 21,
  question: "Летом Ахмад ездил ...",  
  answer: "Г) в Сирию", 
  options: [
    "А) Сирия",  
    "Б) в Сирии",
    "В) о Сирии",
    "Г) в Сирию"
  ]
}, 
{
  numb: 22,
  question: "Он интересуется историей ...",  
  answer: "Г) Сирии",  
  options: [
    "А) Сирия",  
    "Б) в Сирии",
    "В) о Сирии",
    "Г) Сирии"
  ]
},
{
  numb: 23,
  question: "Он интересно рассказывает ... ",  
  answer: "В) о Сирии", 
  options: [
    "А) Сирия",  
    "Б) в Сирии",
    "В) о Сирии",
    "Г) в Сирию"
  ]
},
{
  numb: 24,
  question: "Гагарин родился в 1934 ...", 
  answer: "В) году", 
  options: [
    "А) год",
    "Б) года",
    "В) году",
    "Г) лет"  
  ]
},
  { 
  numb: 25,
  question: "Он поступил в военное училище, когда ему был 21 ...", 
  answer: "А) год", 
  options: [ 
    "А) год",
    "Б) года",
    "В) году",
    "Г) лет"  
  ]
},
  {
  numb: 26, 
  question: "12 апреля 1961 ... он совершил полёт в космос.", 
  answer: "Б) года", 
  options: [
    "А) год",
    "Б) года",
    "В) году",
    "Г) лет"  
  ]
},
  {
  numb: 27, 
  question: "В это время ему было 27 ...",  
  answer: "Г) лет", 
  options: [
    "А) год",
    "Б) года",
    "В) году",
    "Г) лет"  
  ]
},
  { 
  numb: 28,
  question: "Когда ему было 33 ..., он окончил Военно-воздушную инженерную академию.",  
  answer: "Б) года",
  options: [ 
    "А) год",
    "Б) года",
    "В) году",
    "Г) лет"  
  ]
},
{
  numb: 29,
  question: "Чьи это ...?",  
  answer: "Б) письма", 
  options: [
    "А) писем",
    "Б) письма",
    "В) письмо",
    ""  
  ]
},
{
  numb: 30,
  question: "Вы часто получаете ... ? ",  
  answer: "Б) письма",
  options: [
    "А) писем",
    "Б) письма",
    "В) письмо",
    ""  
  ]
},
{
  numb: 31,
  question: "Я получаю много ...", 
  answer: "А) писем", 
  options: [
    "А) писем",
    "Б) письма",
    "В) письмо",
    ""  
  ]
},
{
  numb: 32,
  question: "Вчера я послал 5 ...",  
  answer: "А) писем",  
  options: [
    "А) писем",
    "Б) письма",
    "В) письмо",
    ""  
  ]
},
{
  numb: 33,
  question: "В ... у нас будет зачёт.", 
  answer: "А) субботу", 
  options: [
    "А) субботу", 
    "Б) суббота",
    "В) субботе",
    ""
  ]
},
{
  numb: 34,
  question: "Утром мой друг ходил к ...",  
  answer: "В) врачу",
  options: [ 
    "А) врача", 
    "Б) врач",
    "В) врачу",
    ""
  ]
},
{
  numb: 35,
  question: "... есть хорошая подруга.",  
  answer: "В) у меня", 
  options: [
    "А) я",  
    "Б) меня",
    "В) у меня",
    "Г) мне" 
  ]
},
{
  numb: 36,
  question: "… познакомилась с ней ещё в школе.", 
  answer: "А) я", 
  options: [
    "А) я",  
    "Б) меня",
    "В) у меня",
    "Г) мне" 
  ]
},
{
  numb: 37,
  question: "Она старше ... на 2 года.", 
  answer: "Б) меня",
  options: [
    "А) я",  
    "Б) меня",
    "В) у меня",
    "Г) мне" 
  ]
}, 
{
  numb: 38,
  question: "Она помогает ... изучать английский язык. ",  
  answer: "Г) мне", 
  options: [ 
    "А) я",  
    "Б) меня",
    "В) у меня",
    "Г) мне" 
  ]
},
{
  numb: 39,
  question: "... нравится заниматься с ней.", 
  answer: "Г) мне",  
  options: [
    "А) я",  
    "Б) меня",
    "В) у меня",
    "Г) мне" 
  ]
},
{
  numb: 40,
  question: "Вчера я случайно встретил ...", 
  answer: "В) моего старого товарища", 
  options: [
    "А) с моим старым товарищем",   
    "Б) у моего старого товарища",
    "В) моего старого товарища",
    "Г) мой старый товарищ" 
  ]
},
{
  numb: 41,
  question: "Раньше мы ... встречались каждый день.",  
  answer: "А) с моим старым товарищем", 
  options: [
    "А) с моим старым товарищем",   
    "Б) у моего старого товарища",
    "В) моего старого товарища",
    "Г) мой старый товарищ" 
  ]
}, 
{
  numb: 42,
  question: "В этом году ... поступил в университет.",  
  answer: "Г) мой старый товарищ",  
  options: [
    "А) с моим старым товарищем",   
    "Б) у моего старого товарища",
    "В) моего старого товарища",
    "Г) мой старый товарищ"  
  ]
},
{
  numb: 43,
  question: "Теперь ... много новых друзей.",  
  answer: "Б) у моего старого товарища",
  options: [
    "А) с моим старым товарищем",   
    "Б) у моего старого товарища",
    "В) моего старого товарища",
    "Г) мой старый товарищ" 
  ]
},
{
  numb: 44,
  question: "... построили недавно.", 
  answer: "В) это новое здание", 
  options: [
    "А) в этом новом здании", 
    "Б) в это новое здание",
    "В) это новое здание",
    ""
  ]
},
  { 
  numb: 45,
  question: "Вчера мы осмотрели ...", 
  answer: "В) это новое здание", 
  options: [ 
    "А) в этом новом здании", 
    "Б) в это новое здание",
    "В) это новое здание",
    ""
  ]
},
  {
  numb: 46, 
  question: "... на 1-ом этаже работает аптека.", 
  answer: "А) в этом новом здании", 
  options: [
    "А) в этом новом здании", 
    "Б) в это новое здание",
    "В) это новое здание",
    ""
  ]
},
  {
  numb: 47, 
  question: "Я ещё не был ...",  
  answer: "А) в этом новом здании",  
  options: [
    "А) в этом новом здании", 
    "Б) в это новое здание",
    "В) это новое здание",
    ""
  ]
},
  { 
  numb: 48,
  question: "- … ты ходил вчера?  - На выставку. ",  
  answer: "Б) куда",
  options: [ 
    "А) с кем ", 
    "Б) куда",
    "В) кто",
    "Г) где"
  ]
},
{
  numb: 49,
  question: "- … находится эта выставка?   - На Невском проспекте.",  
  answer: "Г) где", 
  options: [
    "А) с кем ", 
    "Б) куда",
    "В) кто",
    "Г) где"
  ]
},
{
  numb: 50,
  question: "- ... ты ходил туда?  - с Максимом. ",  
  answer: "А) с кем ",
  options: [
    "А) с кем ", 
    "Б) куда",
    "В) кто",
    "Г) где"
  ]
},
{
  numb: 51,
  question: "- А... ещё ходил на выставку?  - Иван.",  
  answer: "В) кто", 
  options: [
    "А) с кем ", 
    "Б) куда",
    "В) кто",
    "Г) где"
  ]
}, 
{
  numb: 52,
  question: "Я уже 2 часа ... упражнения.",  
  answer: "Б) пишу",  
  options: [
    "А) буду писать",   
    "Б) пишу",
    "В) напишу",
    "Г) написал" 
  ]
},
{
  numb: 53,
  question: "Упражнений много, поэтому я ... их ещё час. ",  
  answer: "А) буду писать",
  options: [
    "А) буду писать",   
    "Б) пишу",
    "В) напишу",
    "Г) написал" 
  ]
},
{
  numb: 54,
  question: "Когда я ... упражнения, я проверю их.", 
  answer: "В) напишу", 
  options: [
    "А) буду писать",   
    "Б) пишу",
    "В) напишу",
    "Г) написал" 
  ]
},
  { 
  numb: 55,
  question: "Я уже ... все задачи.", 
  answer: "В) решил", 
  options: [ 
    "А) решить",
    "Б) решит", 
    "В) решил",
    ""
  ]
},
  {
  numb: 56, 
  question: "Я должен ... ещё несколько уравнений.", 
  answer: "А) решить", 
  options: [
    "А) решить",
    "Б) решит", 
    "В) решил",
    ""
  ]
},
  {
  numb: 57, 
  question: "Моему другу тоже нужно ... эти уравнения.",  
  answer: "А) решить",  
  options: [
    "А) решить",
    "Б) решит", 
    "В) решил",
    ""
  ]
},
  { 
  numb: 58,
  question: "Я знаю, что он обязательно ... их.",  
  answer: "Б) решит",
  options: [ 
    "А) решить",
    "Б) решит", 
    "В) решил",
    ""
  ]
},
{
  numb: 59,
  question: "В этом году мой друг начал ... в Политехническом университете.",  
  answer: "А) учиться", 
  options: [
    "А) учиться",
    "Б) буду учиться", 
    "В) учусь",
    "Г) учится"
  ]
},
{
  numb: 60,
  question: "Сейчас он ... на первом курсе.",  
  answer: "Г) учится",
  options: [
    "А) учиться",
    "Б) буду учиться", 
    "В) учусь",
    "Г) учится"
  ]
},
{
  numb: 61,
  question: "Я тоже мечтал ... в Петербурге. ", 
  answer: "А) учиться", 
  options: [
    "А) учиться",
    "Б) буду учиться", 
    "В) учусь",
    "Г) учится"
  ]
},
{
  numb: 62,
  question: "Друг советовал мне ... в том же университете.",  
  answer: "А) учиться",  
  options: [
    "А) учиться",
    "Б) буду учиться", 
    "В) учусь",
    "Г) учится"
  ]
},
{
  numb: 63,
  question: "Скоро я ... на подготовительном факультете.", 
  answer: "Б) буду учиться", 
  options: [
    "А) учиться",
    "Б) буду учиться", 
    "В) учусь",
    "Г) учится"
  ]
},
{
  numb: 64,
  question: "Этот собор ... 40 лет.",  
  answer: "В) строили",
  options: [ 
    "А) строить",
    "Б) построить",
    "В) строили",
    "Г) построили"
  ]
},
{
  numb: 65,
  question: "Его начали ... в 1818 году.",  
  answer: "А) строить", 
  options: [
    "А) строить",
    "Б) построить",
    "В) строили",
    "Г) построили"
  ]
},
{
  numb: 66,
  question: "Наконец в 1858 году его ...", 
  answer: "Г) построили", 
  options: [
    "А) строить",
    "Б) построить",
    "В) строили",
    "Г) построили"
  ]
},
{
  numb: 67,
  question: "Вера уже ... 4 открытки.", 
  answer: "Б) купила",
  options: [
    "А) купить ",
    "Б) купила",
    "В) купит",
    "Г) покупает"
  ]
}, 
{
  numb: 68,
  question: "Ей нужно ... ещё 4 конверта.",  
  answer: "А) купить", 
  options: [
    "А) купить",
    "Б) купила",
    "В) купит",
    "Г) покупает"
  ]
},
{
  numb: 69,
  question: "Завтра она ... эти конверты.", 
  answer: "В) купит", 
  options: [
    "А) купить ",
    "Б) купила",
    "В) купит",
    "Г) покупает"
  ]
},
{
  numb: 70,
  question: "Вчера я весь вечер ... текст.", 
  answer: "В) переводил", 
  options: [
    "А) перевёл",
    "Б) переведу",
    "В) переводил",
    ""
  ]
},
{
  numb: 71,
  question: "Когда я ... текст, я написал план.", 
  answer: "А) перевёл", 
  options: [
    "А) перевёл",
    "Б) переведу",
    "В) переводил",
    ""
  ]
},
{
  numb: 72,
  question: "Ему было трудно … этот текст.",  
  answer: "В) переводить",  
  options: [
    "А) переводил", 
    "Б) переводит",
    "В) переводить",
    ""
  ]
},
{
  numb: 73,
  question: "Мне было интересно ... этот текст.", 
  answer: "В) читать", 
  options: [
    "А) читал", 
    "Б) читаю",
    "В) читать",
    ""
  ]
},
{
  numb: 74,
  question: "- Здравствуйте! Куда вы ... ?",  
  answer: "А) идёте",
  options: [ 
    "А) идёте", 
    "Б) идти",
    "В) ходите",
    "Г) ходить"
  ]
},
{
  numb: 75,
  question: "- На балет. Мы любим ... в театр. ",  
  answer: "Г) ходить", 
  options: [
    "А) идёте", 
    "Б) идти",
    "В) ходите",
    "Г) ходить"
  ]
},
{
  numb: 76,
  question: " - Да, я знаю, что вы часто ... в театр.", 
  answer: "В) ходите", 
  options: [
    "А) идёте", 
    "Б) идти",
    "В) ходите",
    "Г) ходить"
  ]
},
{
  numb: 77,
  question: "Вчера он ... в театр.", 
  answer: "Г) ходил",
  options: [
    "А) идти", 
    "Б) шёл",
    "В) ходить",
    "Г) ходил"
  ]
}, 
{
  numb: 78,
  question: "Когда он ... в театр, он встретил меня.",  
  answer: "Б) шёл", 
  options: [
    "А) идти", 
    "Б) шёл",
    "В) ходить",
    "Г) ходил"
  ]
},
{
  numb: 79,
  question: "Я люблю... в пригороды Петербурга.", 
  answer: "В) ездить", 
  options: [
    "А) ездил", 
    "Б) поехать",
    "В) ездить",
    "Г) поехал"
  ]
},
{
  numb: 80,
  question: "В мае я несколько раз... в Петродворец.", 
  answer: "А) ездил", 
  options: [
    "А) ездил", 
    "Б) поехать",
    "В) ездить",
    "Г) поехал"
  ]
},
{
  numb: 81,
  question: "Летом я хочу ... в Новгород.", 
  answer: "Б) поехать", 
  options: [
    "А) ездил", 
    "Б) поехать",
    "В) ездить",
    "Г) поехал"
  ]
},
{
  numb: 82,
  question: "Я позавтракал и ... в центр.",  
  answer: "Б) поехал",  
  options: [
    "А) ехал",  
    "Б) поехал",
    "В) приехал",
    "Г) уехал"
  ]
},
{
  numb: 83,
  question: "Этот иностранный студент... в наш город в прошлом году.", 
  answer: "В) приехал", 
  options: [
    "А) ехал",  
    "Б) поехал",
    "В) приехал",
    "Г) уехал"
  ]
},
{
  numb: 84,
  question: "Недавно он ... отсюда на родину.",  
  answer: "Г) уехал",
  options: [ 
    "А) ехал",  
    "Б) поехал",
    "В) приехал",
    "Г) уехал"
  ]
},
{
  numb: 85,
  question: "Антон каждую среду ... в компьютерный класс. ",  
  answer: "Г) ходит", 
  options: [
    "А) идёт",  
    "Б) пойдёт",
    "В) ходил",
    "Г) ходит"
  ]
},
{
  numb: 86,
  question: "В прошлую среду он тоже ... туда.", 
  answer: "В) ходил", 
  options: [
    "А) идёт",  
    "Б) пойдёт",
    "В) ходил",
    "Г) ходит"
  ]
},
{
  numb: 87,
  question: "Завтра он ... в лингафонный кабинет. ", 
  answer: "Б) пойдёт",
  options: [
    "А) идёт",  
    "Б) пойдёт",
    "В) ходил",
    "Г) ходит"
  ]
}, 
{
  numb: 88,
  question: "Вчера я ... в центр.",  
  answer: "В) ездил", 
  options: [
    "А) ехал",  
    "Б) ехать",
    "В) ездил",
    "Г) ездить"
  ]
},
{
  numb: 89,
  question: "Когда я ... в автобусе, я увиде друга.", 
  answer: "А) ехал", 
  options: [
    "А) ехал",  
    "Б) ехать",
    "В) ездил",
    "Г) ездить"
  ]
},
{
  numb: 90,
  question: "Вчера я ... в филармонию.", 
  answer: "В) ходил", 
  options: [
    "А) ходить",  
    "Б) ходит",
    "В) ходил",
    "Г) пойдёт"
  ]
},
{
  numb: 91,
  question: "Мне нравится ... на концерты.", 
  answer: "А) ходить", 
  options: [
    "А) ходить",  
    "Б) ходит",
    "В) ходил",
    "Г) пойдёт"
  ]
},
{
  numb: 92,
  question: "Сейчас мой друг редко ... в филармонию.",  
  answer: "Б) ходит",  
  options: [
    "А) ходить",  
    "Б) ходит",
    "В) ходил",
    "Г) пойдёт"
  ]
},
{
  numb: 93,
  question: "Завтра он ... на концерт.", 
  answer: "Г) пойдёт", 
  options: [
    "А) ходить",  
    "Б) ходит",
    "В) ходил",
    "Г) пойдёт"
  ]
},
{
  numb: 94,
  question: "Студенту нужно купить ...",  
  answer: "Б) кассету",
  options: [ 
    "А) кассета",  
    "",
    "Б) кассету",
    ""
  ]
},
{
  numb: 95,
  question: "Мне нужен ...",  
  answer: "А) словарь", 
  options: [
    "А) словарь",  
    "",
    "Б) тетрадь",
    "" 
  ]
},
{
  numb: 96,
  question: "Тебе нужна только ...", 
  answer: "А) одна марка", 
  options: [
    "А) одна марка",  
    "",
    "Б) одну марку",
    "" 
  ]
},
{
  numb: 97,
  question: "Антон окончил химический факультет, ... он прекрасно знает химию. ", 
  answer: "Б) поэтому",
  options: [
    "А) потому что",  
    "",
    "Б) поэтому",
    " " 
  ]
}, 
{
  numb: 98,
  question: "Ольга поступила на исторический факультет, ... она любит историю.",  
  answer: "А) потому что", 
  options: [
    "А) потому что",  
    "",
    "Б) поэтому",
    " " 
  ]
},
{
  numb: 99,
  question: "Мои родители хотят, ... я стал экономистом.", 
  answer: "Б) чтобы", 
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
{
  numb: 100,
  question: "Я сказал родителям,... мечтаю стать артистом.", 
  answer: "А) что", 
  options: [
    "А) что",  
    "",
    "Б) чтобы",
    ""
  ]
},
];