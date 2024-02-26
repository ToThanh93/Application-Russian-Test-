// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Этот фильм ... во всех кинотеатрах города.",
  answer: "А) идёт", 
  options: [
    "А) идёт",
    "Б) водит",
    "В) ведёт",
    "Г) ходит"
  ]
},
  { 
  numb: 2,
  question: "Антон с детства ... очки.",
  answer: "А) носит", 
  options: [ 
    "А) носит", 
    "Б) везёт",
    "В) возит",
    "Г) несёт"
  ]
},
  {
  numb: 3, 
  question: "Анна всегда в джинсах.", 
  answer: "Б) ходит", 
  options: [
    "А) несёт",
    "Б) ходит",
    "В) идёт",
    "Г) носит"
  ]
},
  {
  numb: 4,
  question: "Мария ... длинные юбки.", 
  answer: "Б) носит",  
  options: [
    "А) идёт", 
    "Б) носит",
    "В) ходит",
    "Г) несёт"
  ]
},
  {
  numb: 5,
  question: "Татьяне... брюки.",  
  answer: "А) идут", 
  options: [ 
    "А) идут", 
    "Б) ходят",
    "В) несут",
    "Г) носят"
  ]
},
{
  numb: 6,
  question: "Наталия уже 5 лет ... машину.", 
  answer:  "Г) водит",  
  options: [
    "А) едет", 
    "Б) ездит",
    "В) ведёт",
    "Г) водит"
  ]
},
{
  numb: 7,
  question: "Ребёнок очень плохо себя ... в гостях. ",  
  answer: "А) вёл", 
  options: [
    "А) вёл",
    "Б) водил",
    "В) нёс",
    "Г) носил"
  ]
},
{
  numb: 8,
  question: "Ему не.... Он всегда проигрывает.", 
  answer: "Г) везёт",
  options: [
    "А) возит", 
    "Б) идёт",
    "B) ходит",
    "Г) везёт"
  ]
},
{
  numb: 9,
  question: "Татьяне очень... розовый цвет.", 
  answer: "Б) идёт",  
  options: [
    "А) возит", 
    "Б) идёт",
    "В) везёт",
    "Г) ходит"
  ]
},
{
  numb: 10,
  question: "Она ... на машине с 16 лет.", 
  answer: "Г) ездит",
  options: [
    "А) водит", 
    "Б) едет",
    "В) ведёт",
    "Г) ездит"
  ]
},
{
  numb: 11,
  question: "Как быстро ... время!", 
  answer: "Б) летит", 
  options: [ 
    "А) ползёт", 
    "Б) летит",
    "В) ползает",
    "Г) летает" 
  ]
},
{
  numb: 12,
  question: "По небу медленно ... облака.",  
  answer: "А) плывут",  
  options: [
    "А) плывут", 
    "Б) плавают",
    "В) идут",
    "Г) ходят" 
  ]
},
{
  numb: 13,
  question: "Вчера весь день... дождь.", 
  answer: "А) шёл",  
  options: [
    "А) шёл", 
    "Б) бегал",
    "В) ходил",
    "Г) бежал"
  ]
},
{
  numb: 14,
  question: "С горы стремительно ... ручей.", 
  answer: "Б) бежал",
  options: [
    "А) ходил",  
    "Б) бежал",
    "В) бегал",
    "Г) шёл"   
  ] 
}, 
{
  numb: 15,
  question: "Вниз по течению медленно ... лодка. ", 
  answer: "В) плыла", 
  options: [
    "А) плавала",  
    "Б) шла",
    "В) плыла",
    "Г) ходила"   
  ]
},
{
  numb: 16,
  question: "Над городом уже 40 минут ... самолёт.", 
  answer: "В) летает",
  options: [
    "А) летит", 
    "Б) идёт",
    "В) летает",
    "Г) ходит"  
  ]
},
{
  numb: 17,
  question: "Эти часы плохо ...", 
  answer: "В) ходят", 
  options: [
    "А) бегают",  
    "Б) водят",
    "В) ходят",
    "Г) носят"
  ]
},
{
  numb: 18,
  question: "У меня в голове ... разные мысли.", 
  answer: "Б) бродили",
  options: [ 
    "А) летали",  
    "Б) бродили",
    "В) бегали",
    "Г) ходили" 
  ]
},
{
  numb: 19,
  question: "Раньше Маша ... экскурсии по городу.",  
  answer: "А) водила",  
  options: [
    "А) водила",  
    "б) вела",
    "В) носила",
    "Г) несла"
  ]
},
{
  numb: 20, 
  question: "Он плохо подготовился и ... на экзамене.",  
  answer: "А) плавал",  
  options: [
    "А) плавал", 
    "Б) летал",
    "В) ходил",
    "Г) бегал" 
  ]
},
{
  numb: 21,
  question: "Мария всё время лжёт, ... его за Hoc.",  
  answer: "Г) водит", 
  options: [
    "А) ведёт",   
    "Б) таскает",
    "В) тащит",
    "Г) водит"    
  ]
}, 
{
  numb: 22,
  question: "Сергей очень много работает, ... из кожи вон, чтобы купить дом.",  
  answer: "В) лезет",  
  options: [
    "А) лазает",   
    "Б) идёт",
    "В) лезет",
    "Г) ходит"
  ]
},
{
  numb: 23,
  question: "Он нигде не работает, ходит по барам - ... вниз.",  
  answer: "А) катится", 
  options: [
    "А) катится",  
    "Б) носится",
    "В) катается",
    "Г) несётся"
  ]
},
{
  numb: 24,
  question: "Николай уже.... на новую квартиру.", 
  answer: "В) переехал", 
  options: [
    "А) объехал", 
    "Б) отъехал",
    "В) переехал",
    "Г) проехал"
  ]
},
  { 
  numb: 25,
  question: "Ирина ... все книжные магазины.", 
  answer: "Б) обошла", 
  options: [ 
    "А) зашла",  
    "Б) обошла",
    "В) перешла",
    "Г) прошла" 
  ]
},
  {
  numb: 26, 
  question: "Часы сломались: надо ... их в ремонтную мастерскую.", 
  answer: "А) отнести", 
  options: [
    "А) отнести", 
    "Б) унести",
    "В) внести",
    "Г) поднести"
  ]
},
  {
  numb: 27, 
  question: "- Куда ты дел мусор? - Я ... его на помойку.",  
  answer: "Г) вынес", 
  options: [
    "А) занёс",  
    "Б) перенёс",
    "В) принёс",
    "Г) вынес"
  ]
},
  { 
  numb: 28,
  question: "Поезд... к платформе.",  
  answer: "Б) подошёл",
  options: [ 
    "А) вышел", 
    "Б) подошёл",
    "В) перешёл",
    "Г) зашёл"
  ]
},
{
  numb: 29,
  question: "Трамвай ... от остановки.",  
  answer: "А) отошёл", 
  options: [
    "А) отошёл",
    "Б) прошёл",
    "В) пошёл",
    "Г) ушёл"
  ]
},
{
  numb: 30,
  question: "Солнце... и осветило всё вокруг.",  
  answer: "В) взошло",
  options: [
    "А) пришло", 
    "Б) подошло",
    "В) взошло",
    "Г) вошло" 
  ]
},
{
  numb: 31,
  question: "Велосипедист ... от дома на 20 км.", 
  answer: "В) отъехал", 
  options: [
    "А) выехал",
    "Б) подъехал",
    "В) отъехал",
    "Г) проехал"  
  ]
},
{
  numb: 32,
  question: "Виктор здесь больше не живёт, он ... на новую квартиру.",  
  answer: "Б) переехал",  
  options: [
    "А) отъехал",
    "Б) переехал", 
    "В) заехал",
    "Г) проехал"
  ]
},
{
  numb: 33,
  question: "Мальчик залез на горку и ... вниз на санках.", 
  answer: "А) съехал", 
  options: [
    "А) съехал",  
    "Б) заехал",
    "В) уехал",
    "Г) выехал"
  ]
},
{
  numb: 34,
  question: "Машина повернула и ... за угол дома.",  
  answer: "В) заехала",
  options: [ 
    "А) отъехала",  
    "Б) выехала",
    "В) заехала",
    "Г) подъехала"
  ]
},
{
  numb: 35,
  question: "Надо ... плащ в химчистку.",  
  answer: "А) отнести ", 
  options: [
    "А) отнести ", 
    "Б) унести",
    "В) понести",
    "Г) перенести"
  ]
},
{
  numb: 36,
  question: "Ветер ... шарик далеко-далеко.", 
  answer: "Г) унёс", 
  options: [
    "А) поднёс",  
    "Б) принёс",
    "В) перенёс",
    "Г) унёс"
  ]
},
{
  numb: 37,
  question: "Через час придёт Анатолий и ... нам арбуз.", 
  answer: "В) принесёт",
  options: [
    "А) внесёт",  
    "Б) поднесёт",
    "В) принесёт",
    "Г) перенесёт"
  ]
}, 
{
  numb: 38,
  question: "Пётр уехал в Москву и .... с собой ноутбук.",  
  answer: "В) увёз", 
  options: [ 
    "А) привёз",  
    "Б) завёз",
    "В) увёз",
    "Г) перевёз" 
  ]
},
{
  numb: 39,
  question: "Маша попросила отца.... ей из Парижа зонтик.", 
  answer: "Б) привезти",  
  options: [
    "А) перевезти", 
    "Б) привезти",
    "В) повезти",
    "Г) отвезти"
  ]
},
{
  numb: 40,
  question: "Я приеду к тебе в воскресенье и ... фотографии. ", 
  answer: "Б) привезу", 
  options: [
    "А) подвезу",  
    "Б) привезу",
    "В) перевезу",
    "Г) провезу"
  ]
},
{
  numb: 41,
  question: "Когда Лена поедет в центр, она ... по пути тебе ключи.",  
  answer: "Б) завезёт", 
  options: [
    "А) отвезёт",   
    "Б) завезёт",
    "В) подвезёт",
    "Г) увезёт "   
  ]
}, 
{
  numb: 42,
  question: "В кухне будет ремонт, надо из неё... всю мебель.",  
  answer: "А) вынести",  
  options: [
    "А) вынести",   
    "В) занести",
    "Б) подарить",
    "Г) понести "
  ]
},
{
  numb: 43,
  question: "Завтра я ... тебе то, что обещала.",  
  answer: "Г) принесу",
  options: [
    "А) отнесу",  
    "Б) внесу",
    "В) поднесу",
    "Г) принесу"
  ]
},
{
  numb: 44,
  question: "У него трудная жизнь. За 40 лет он ... много несчастий.", 
  answer: "А) перенёс", 
  options: [
    "А) перенёс", 
    "Б) внёс",
    "В) занёс",
    "Г) унёс"
  ]
},
  { 
  numb: 45,
  question: "Ребёнок плохо себя вёл, и мать... его из-за стола.", 
  answer: "Г) вывела", 
  options: [ 
    "А) завела",  
    "Б) отвела",
    "В) повела",
    "Г) вывела"
  ]
},
  {
  numb: 46, 
  question: "У бабушки болит нога: надо ... её к врачу.", 
  answer: "Б) отвести", 
  options: [
    "А) завести", 
    "Б) отвести",
    "В) вывести",
    "Г) перевести"
  ]
},
  {
  numb: 47, 
  question: "Завтра преподаватель... студен тов в Русский музей.",  
  answer: "В) поведёт", 
  options: [
    "А) уведёт",
    "Б) отведёт",  
    "В) поведёт",
    "Г) переведёт"
  ]
},
  { 
  numb: 48,
  question: "Он неплохо... с французского.",  
  answer: "В) переводит",
  options: [ 
    "А) проводит",
    "Б) уводит", 
    "В) переводит",
    "Г) сводит"
  ]
},
{
  numb: 49,
  question: "Как вы ... каникулы?",  
  answer: "Г) провели", 
  options: [
    "А) перевели ",
    "Б) увели",
    "В) отвели",
    "Г) провели"
  ]
},
{
  numb: 50,
  question: "Кошка ... на дерево и не хотела спускаться.",  
  answer: "Б) влезла",
  options: [
    "А) подлезла", 
    "Б) влезла",
    "В) перелезла",
    "Г) пролезла"
  ]
},
{
  numb: 51,
  question: "Мяч... на крышу дома.", 
  answer: "Г) залетел", 
  options: [
    "А) подлетел", 
    "Б) перелетел",
    "В) слетел",
    "Г) залетел"
  ]
},
{
  numb: 52,
  question: "Осенью перелётные птицы ... на юг.",  
  answer: "Г) улетают",  
  options: [
    "А) влетают", 
    "Б) взлетают",
    "В) залетают",
    "Г) улетают"
  ]
},
{
  numb: 53,
  question: "Корабль... к берегу.", 
  answer: "А) подплыл", 
  options: [
    "А) подплыл", 
    "Б) отплыл", 
    "В) заплыл",
    "Г) переплыл"
  ]
},
{
  numb: 54,
  question: "Я хочу посмотреть, как ... мосты.",  
  answer: "Б) разводятся",
  options: [ 
    "А) разносятся",  
    "Б) разводятся",
    "В) разлетаются",
    "Г) расходятся"
  ]
},
{
  numb: 55,
  question: "Ручка упала на пол и ... под шкаф.",  
  answer: "Б) закатилась", 
  options: [
    "А) прокатилась", 
    "Б) закатилась",
    "В) перекатилась",
    "Г) вкатилась"
  ]
},
{
  numb: 56,
  question: "Я много раз видела, как... в воздух самолёты.", 
  answer: "Г) взлетают", 
  options: [
    "A) подлетают",
    "Б) отлетают",
    "В) перелетают",
    "Г) взлетают"
  ]
},
{
  numb: 57,
  question: "Из-под камня.... змея.", 
  answer: "Г) выползла",
  options: [
    "А) подползла",  
    "Б) вползла",
    "В) отползла",
    "Г) выползла" 
  ]
}, 
{
  numb: 58,
  question: "Пришли рабочие и ... пианино в нашу квартиру.",  
  answer: "А) втащили", 
  options: [
    "А) втащили",  
    "Б) оттащили",
    "В) утащили",
    "Г) подтащили"
  ]
},
{
  numb: 59,
  question: "Мы не знали, как заставить кошку... с дерева.", 
  answer: "А) слезть", 
  options: [
    "А) слезть", 
    "Б) залезть",
    "В) перелезть",
    "Г) влезть"
  ]
},
{
  numb: 60,
  question: "Мальчики ... дорогу на красный свет светофора. ", 
  answer: "А) перебежали", 
  options: [
    "А) перебежали",  
    "Б) выбежали",
    "В) пробежали",
    "Г) вбежали"
  ]
},
];