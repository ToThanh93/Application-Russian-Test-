// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Будьте добры, ... окно: в комнате очень холодно.",
  answer: "Б) закройте",
  options: [
    "А) закрывайте ",
    "",
    "Б) закройте",
    ""
  ]
},
  { 
  numb: 2,
  question: "... ему об этом, когда он придёт.",
  answer: "Б) Скажи",
  options: [ 
    "А) Говори", 
    "",
    "Б) Скажи", 
    "" 
  ]
},
  {
  numb: 3, 
  question: "... нам почаще.",
  answer: "Б) Пиши",
  options: [
    "А) Напиши ", 
    "",
    "Б) Пиши",
    ""  
  ]
},
  {
  numb: 4,
  question: "... эту статью к завтрашнему дню.", 
  answer: "Б) Переведите", 
  options: [
    "А) Переводите", 
    "",
    "Б) Переведите", 
    "" 
  ]
},
  {
  numb: 5,
  question: "Не ... это лекарство, оно у нас есть.", 
  answer: "А) покупай",
  options: [ 
    "А) покупай", 
    "",
    "Б) купи",
    "" 
  ]
},
{
  numb: 6,
  question: "Лекция начнётся через 5 минут. Смотри, не ...", 
  answer: "Б) опоздай",
  options: [
    "А) опаздывай ",
    "",
    "Б) опоздай", 
    "" 
  ]
},
{
  numb: 7,
  question: "Если она не хочет ехать с тобой на концерт, не... её.", 
  answer: "А) уговаривай ",
  options: [
    "А) уговаривай ", 
    "",
    "Б) уговори",  
    "" 
  ]
},
{
  numb: 8,
  question: "Я еду завтра в командировку в Иркутск ... мне, пожалуйста, номер в гостинице.",
  answer: "А) Закажи",
  options: [
    "А) Закажи", 
    "",
    "Б) Заказывай", 
    ""  
  ]
},
{
  numb: 9,
  question: "Ребёнок боится темноты. Не.... пожалуйста, свет в комнате.",  
  answer: "Б) выключай", 
  options: [
    "А) выключи ", 
    "", 
    "Б) выключай",  
    ""  
  ]
},
{
  numb: 10,
  question: ". Здесь очень скользко. Смотри, не... ", 
  answer: "А) упади ",
  options: [
    "А) упади ", 
    "", 
    "Б) падай", 
    "" 
  ]
},
{
  numb: 11,
  question: "Этот фильм произвёл на меня огромное впечатление. Обязательно... его",  
  answer: "А) посмотри ",
  options: [ 
    "А) посмотри ", 
    "", 
    "Б) смотри",
    ""  
  ]
},
{
  numb: 12,
  question: "Никогда не... чужие вещи.", 
  answer: "А) бери ", 
  options: [
    "А) бери ", 
    "", 
    "Б) возьми", 
    "" 
  ]
},
{
  numb: 13,
  question: "Я хочу выспаться в воскресенье. Не.... мне рано утром.", 
  answer: "А) звони ", 
  options: [
    "А) звони ", 
    "", 
    "Б) позвони",  
    "" 
  ]
},
{
  numb: 14,
  question: "... к нам почаще. Мы всегда рады видеть вас.", 
  answer: "А) Приходите ",
  options: [
    "А) Приходите ",  
    "",
    "Б) Придите",  
    ""   
  ]
}, 
{
  numb: 15,
  question: "Пожалуйста, ... эту книгу в библиотеку через 5 дней.", 
  answer: "Б) верните", 
  options: [
    "А) возвращайте ",  
    "", 
    "Б) верните",  
    ""   
  ]
},
{
  numb: 16,
  question: "Каждое утро... свежий сок. Это полезно для здоровья.", 
  answer: "Б) лейте",
  options: [
    "А) выпейте", 
    "", 
    "Б) лейте", 
    ""  
  ]
},
{
  numb: 17,
  question: "На улице сильный ветер. Смотри, не ...", 
  answer: "А) простудись ", 
  options: [
    "А) простудись ",  
    "", 
    "Б) простужайся",  
    ""  
  ]
},
{
  numb: 18,
  question: "Не... в магазин по дороге домой.", 
  answer: "Б) заходи",
  options: [ 
    "А) зайди ",  
    "", 
    "Б) заходи",
    ""   
  ]
},
{
  numb: 19,
  question: "Смотри, не... предупредить Виктора об экскурсии.",  
  answer: "А) забудь ",  
  options: [
    "А) забудь ",  
    "", 
    "Б) забывай",  
    ""  
  ]
},
{
  numb: 20, 
  question: "Регулярно... спортом.",  
  answer: "А) занимайтесь ",  
  options: [
    "А) занимайтесь ", 
    "",  
    "Б) позанимайтесь",   
    ""  
  ]
},
{
  numb: 21,
  question: "- Тебя проводить? - Нет, не ... меня. ",  
  answer: "Б) провожай", 
  options: [
    "А) проводи ",   
    "", 
    "Б) провожай",  
    ""    
  ]
}, 
{
  numb: 22,
  question: "Сегодня к нам придут гости..... пожалуйста, квартиру.",  
  answer: "А) Убери ",  
  options: [
    "А) Убери ",   
    "", 
    "Б) Убирай",   
    ""    
  ]
},
{
  numb: 23,
  question: "Какие красивые цветы! .... их в вазу, пожалуйста.",  
  answer: "Б) Поставь",
  options: [
    "А) Ставь ",  
    "",
    "Б) Поставь", 
    ""   
  ]
},
{
  numb: 24,
  question: "Что же ты замолчал? .... дальше.", 
  answer: "А) Рассказывай ", 
  options: [
    "А) Рассказывай ", 
    "",
    "Б) Расскажи", 
    "", 
  ]
},
  { 
  numb: 25,
  question: "... мне билет на этот спектакль!", 
  answer: "Б) Купи",
  options: [ 
    "А) Покупай",  
    "",
    "Б) Купи", 
    ""  
  ]
},
  {
  numb: 26, 
  question: "Не ... в этом озере. В нём грязная вода.", 
  answer: "А) купайтесь ", 
  options: [
    "А) купайтесь ", 
    "", 
    "Б) искупайтесь",
    ""  
  ]
},
  {
  numb: 27, 
  question: "Не... ей это письмо. Она очень расстроится.",  
  answer: "Б) показывай", 
  options: [
    "А) покажи ",  
    "", 
    "Б) показывай",  
    ""  
  ]
},
  { 
  numb: 28,
  question: "Почему вы не читаете?... дальше.",  
  answer: "Б) Читайте",
  options: [ 
    "А) Прочитайте", 
    "", 
    "Б) Читайте",
    ""  
  ]
},
{
  numb: 29,
  question: "Не ... этот свитер. Тебе будет жарко. ",  
  answer: "Б) надевай", 
  options: [
    "А) надень ",
    "",
    "Б) надевай",    
    ""  
  ]
},
{
  numb: 30,
  question: "Когда поедешь в деревню, каждый день ... свежее молоко.",  
  answer: "Б) пей",
  options: [
    "А) выпей ", 
    "",
    "Б) пей",   
    ""  
  ]
},
{
  numb: 31,
  question: "Я не слышала последнюю фразу. ... её, пожалуйста.", 
  answer: "Б) Повторите", 
  options: [
    "А) Повторяйте ", 
    "", 
    "Б) Повторите",    
    ""  
  ]
},
{
  numb: 32,
  question: "... меня, пожалуйста, в 7 часов утра.",  
  answer: "Б) Разбуди", 
  options: [
    "А) Буди ", 
    "",
    "Б) Разбуди",      
    ""  
  ]
},
{
  numb: 33,
  question: "Возьми цветы и ... их в воду.", 
  answer: "Б) поставь", 
  options: [
    "А) ставь ",  
    "",
    "Б) поставь",      
    ""  
  ]
},
{
  numb: 34,
  question: "Не... куртку. Здесь очень холодно.",  
  answer: "Б) снимай",
  options: [ 
    "А) сними ",  
    "", 
    "Б) снимай",  
    ""   
  ]
},
{
  numb: 35,
  question: "... мне, пожалуйста, как добраться до Эрмитажа.",  
  answer: "А) Объясни ", 
  options: [
    "А) Объясни ", 
    "", 
    "Б) Объясняй",      
    ""  
  ]
},
{
  numb: 36,
  question: "Почему ты остановился?... дальше.", 
  answer: "Играй", 
  options: [
    "А) Поиграй ",  
    "", 
    "Играй",    
    "" 
  ]
},
{
  numb: 37,
  question: "Пожалуйста, ... эту книгу Сергею.", 
  answer: "А) отдай ",
  options: [
    "А) отдай ",  
    "", 
    "Б) отдавай",    
    ""    
  ]
}, 
{
  numb: 38,
  question: "Вот ключ. Смотри, не ... его.",  
  answer: "А) потеряй ", 
  options: [
    "А) потеряй ",  
    "", 
    "Б) теряй",    
    ""    
  ]
},
{
  numb: 39,
  question: "Не ... около окна. Там дует.", 
  answer: "Б) сиди", 
  options: [
    "А) посиди ", 
    "",
    "Б) сиди",      
    ""  
  ]
},
{
  numb: 40,
  question: "... меня. Я ещё не закончил работу.", 
  answer: "А) Подожди ", 
  options: [
    "А) Подожди ",  
    "",
    "Б) Жди",    
    ""  
  ]
},
{
  numb: 41,
  question: "Осторожно, не ...", 
  answer: "А) обожгись ", 
  options: [
    "А) обожгись ", 
    "", 
    "Б) обжигайся",     
    ""  
  ]
},
{
  numb: 42,
  question: "Не ... грязные фрукты.",  
  answer: "А) ешь	", 
  options: [
    "А) ешь	", 
    "",  
    "Б) съешь",     
    ""  
  ]
},
{
  numb: 43,
  question: "Давай я вымою посуду, а ты немного ...", 
  answer: "А) отдохни", 
  options: [
    "А) отдохни",  
    "",  
    "Б) отдыхай",    
    ""  
  ]
},
{
  numb: 44,
  question: "... мне, пожалуйста, перевести эту статью.",  
  answer: "А) Помоги 	",
  options: [ 
    "А) Помоги 	",  
    "", 
    "Б) Помогай",
    ""   
  ]
},
{
  numb: 45,
  question: "... быстрее. Мы все ждём твоего возвращения из больницы.",  
  answer: "А) Поправляйся", 
  options: [
    "А) Поправляйся", 
    "", 
    "Б) Поправься",      
    ""  
  ]
},
{
  numb: 46,
  question: "Фильм уже начинается.... скорее телевизор.", 
  answer: "А) Включай", 
  options: [
    "А) Включай",  
    "", 
    "Б) Включи",  
    "" 
  ]
},
{
  numb: 47,
  question: "Что же ты стоишь в коридоре? ... в комнату.", 
  answer: "Б) Проходи",
  options: [
    "А) Пройди ",  
    "",
    "Б) Проходи",  
    ""    
  ]
}, 
{
  numb: 48,
  question: "Каждый день ... новые слова.",  
  answer: "Б) учи", 
  options: [
    "А) выучи ",  
    "",
    "Б) учи",   
    ""    
  ]
},
{
  numb: 49,
  question: "Неси осторожно эту коробку. Не ... её.", 
  answer: "Б) урони", 
  options: [
    "А) роняй ", 
    "", 
    "Б) урони", 
    ""  
  ]
},
{
  numb: 50,
  question: "Пожалуйста, обязательно... на моё письмо.", 
  answer: "Б) ответь", 
  options: [
    "А) отвечай ",  
    "",  
    "Б) ответь",  
    ""  
  ]
},

];