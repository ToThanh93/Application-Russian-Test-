// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Я нигде не могу ... свой ключ.",
  answer: "А) найти ",
  options: [
    "А) найти ",
    "",
    "Б) находить",
    ""
  ]
},
  { 
  numb: 2,
  question: "Завтра мне ещё не надо... на работу. Отпуск кончается через неделю.",
  answer: "А) выходить 	",
  options: [ 
    "А) выходить 	", 
    "",
    "Б) выйти", 
    "" 
  ]
},
  {
  numb: 3, 
  question: "Андрей очень маленький. Ему не ... книгу с полки.",
  answer: "Б) достать",
  options: [
    "А) доставать ", 
    "",
    "Б) достать",
    ""  
  ]
},
  {
  numb: 4,
  question: "Уже 8 часов. Пора ...", 
  answer: "А) вставать", 
  options: [
    "А) вставать", 
    "",
    "Б) встать", 
    "" 
  ]
},
  {
  numb: 5,
  question: "Он может долго... о своём путешествии.", 
  answer: "А) рассказывать",
  options: [ 
    "А) рассказывать", 
    "",
    "Б) рассказать",
    "" 
  ]
},
{
  numb: 6,
  question: "Давай вместе ... к экзамену.", 
  answer: "А) готовиться",
  options: [
    "А) готовиться",
    "",
    "Б) подготовиться", 
    "" 
  ]
},
{
  numb: 7,
  question: "Боюсь, ему не... в этот университет. Там очень большой конкурс.", 
  answer: "Б) поступить",
  options: [
    "А) поступать ",
    "",
    "Б) поступить", 
    "" 
  ]
},
{
  numb: 8,
  question: "Я начну ... после обеда.",
  answer: "Б) заниматься",
  options: [
    "А) позаниматься	", 
    "",
    "Б) заниматься", 
    ""  
  ]
},
{
  numb: 9,
  question: "Не стоит ... его об этом.",  
  answer: "А) спрашивать ", 
  options: [
    "А) спрашивать ", 
    "", 
    "Б) спросить",  
    ""  
  ]
},
{
  numb: 10,
  question: "Она не успеет приходу. ужин к нашему", 
  answer: "Б) приготовить",
  options: [
    "А) готовить", 
    "", 
    "Б) приготовить", 
    "" 
  ]
},
{
  numb: 11,
  question: "Яблоки можешь не..., я уже купила.", 
  answer: "Б) покупать",
  options: [ 
    "А) купить ", 
    "", 
    "Б) покупать",
    ""  
  ]
},
{
  numb: 12,
  question: "Здесь река очень широкая, тебе её не ...", 
  answer: "А) переплыть ", 
  options: [
    "А) переплыть ", 
    "", 
    "Б) переплывать", 
    "" 
  ]
},
{
  numb: 13,
  question: "Я хочу ... с родителями как можно чаще.", 
  answer: "А) видеться ", 
  options: [
    "А) видеться ", 
    "", 
    "Б) увидеться",  
    "" 
  ]
},
{
  numb: 14,
  question: "Завтра я собираюсь... со школьными друзьями.", 
  answer: "А) встретиться ",
  options: [
    "А) встретиться ",  
    "",
    "Б) встречаться",  
    ""   
  ]
}, 
{
  numb: 15,
  question: "Мы решили не... в программу кон- церта эту песню.", 
  answer: "А) включать 	", 
  options: [
    "А) включать 	",  
    "", 
    "Б) включить",  
    ""   
  ]
},
{
  numb: 16,
  question: "Сегодня Иван проспал и не успел ... ", 
  answer: "Б) позавтракать",
  options: [
    "А) завтракать	", 
    "", 
    "Б) позавтракать", 
    ""  
  ]
},
{
  numb: 17,
  question: "Я всегда мечтал ... с этим писателем. ", 
  answer: "А) познакомиться", 
  options: [
    "А) познакомиться",  
    "", 
    "Б) знакомиться",  
    ""  
  ]
},
{
  numb: 18,
  question: "Ольге хотелось... в этом городе надолго.", 
  answer: "Б) остаться",
  options: [ 
    "А) оставаться ",  
    "", 
    "Б) остаться",
    ""   
  ]
},
{
  numb: 19,
  question: "Это телефон моих друзей. Если тебе нужна будет помощь в Москве, ты всегда можешь ... им.",  
  answer: "А) позвонить ",  
  options: [
    "А) позвонить ",  
    "", 
    "Б) звонить",  
    ""  
  ]
},
{
  numb: 20, 
  question: "Нельзя... в зрительный зал после третьего звонка.",  
  answer: "Б) входить",  
  options: [
    "А) войти ", 
    "",  
    "Б) входить",   
    ""  
  ]
},
{
  numb: 21,
  question: "Борис знает о концерте и не дол жен ...",  
  answer: "Б) опоздать", 
  options: [
    "А) опаздывать ",   
    "", 
    "Б) опоздать",  
    ""    
  ]
}, 
{
  numb: 22,
  question: "Можно мне... твой словарь, когда я забываю свой?",  
  answer: "А) брать ",  
  options: [
    "А) брать ",   
    "", 
    "Б) взять",   
    ""    
  ]
},
{
  numb: 23,
  question: "Мне нравится ... любимые книги.",  
  answer: "Б) перечитывать",
  options: [
    "А) перечитать ",  
    "",
    "Б) перечитывать", 
    ""   
  ]
},
{
  numb: 24,
  question: "Ей не ... эту статью за 2 часа.", 
  answer: "А) перевести ", 
  options: [
    "А) перевести ", 
    "",
    "Б) переводить", 
    "", 
  ]
},
  { 
  numb: 25,
  question: "Эту дверь нельзя... твоим ключом: вчера поменяли замок.", 
  answer: "Б) открыть",
  options: [ 
    "А) открывать ",  
    "",
    "Б) открыть", 
    ""  
  ]
},
  {
  numb: 26, 
  question: "Мне часто приходится ... на вопросы моего младшего брата.", 
  answer: "А) отвечать 	", 
  options: [
    "А) отвечать 	", 
    "", 
    "Б) ответить",
    ""  
  ]
},
  {
  numb: 27, 
  question: "Елене не удалось... билет на этот спектакль.",  
  answer: "Б) купить", 
  options: [
    "А) покупать ",  
    "", 
    "Б) купить",  
    ""  
  ]
},
  { 
  numb: 28,
  question: "Летом я собираюсь... рано и бегать по утрам в парке.",  
  answer: "Б) просыпаться",
  options: [ 
    "A) проснуться ", 
    "", 
    "Б) просыпаться",
    ""  
  ]
},
{
  numb: 29,
  question: "Не надо ... ей смотреть этот фильм.",  
  answer: "Б) советовать", 
  options: [
    "А) посоветовать",
    "",
    "Б) советовать",    
    ""  
  ]
},
{
  numb: 30,
  question: "Нельзя... на экзаменах.",  
  answer: "Б) списывать",
  options: [
    "А) списать ", 
    "",
    "Б) списывать",   
    ""  
  ]
},
{
  numb: 31,
  question: "Моя подруга очень хорошо умеет... задачи по физике.", 
  answer: "Б) решать", 
  options: [
    "А) решить ", 
    "", 
    "Б) решать",    
    ""  
  ]
},
{
  numb: 32,
  question: "Надо ... ему решить эту проблему.",  
  answer: "Б) помочь", 
  options: [
    "А) помогать", 
    "",
    "Б) помочь",      
    ""  
  ]
},
{
  numb: 33,
  question: "Можно мне не ... вопросы?", 
  answer: "Б) писать", 
  options: [
    "А) написать ",  
    "",
    "Б) писать",      
    ""  
  ]
},
{
  numb: 34,
  question: "Виктор не смог .... мне, где находится этот ресторан.",  
  answer: "Б) объяснить",
  options: [ 
    "А) объяснять ",  
    "", 
    "Б) объяснить",  
    ""   
  ]
},
{
  numb: 35,
  question: "Мне не ... весь сок, здесь очень много.",  
  answer: "А) выпить 	", 
  options: [
    "А) выпить 	", 
    "", 
    "Б) пить",      
    ""  
  ]
},
{
  numb: 36,
  question: "Не надо ... радио, я слушаю Новости.", 
  answer: "Б) выключать", 
  options: [
    "А) выключить ",  
    "", 
    "Б) выключать",    
    "" 
  ]
},
{
  numb: 37,
  question: "Когда тебе... последний экзамен?", 
  answer: "А) сдавать ",
  options: [
    "А) сдавать ",  
    "", 
    "Б) сдать",    
    ""    
  ]
}, 
{
  numb: 38,
  question: "Можешь не .... меня, я доберусь сама.",  
  answer: "А) провожать ", 
  options: [
    "А) провожать ",  
    "", 
    "Б) проводить",    
    ""    
  ]
},
{
  numb: 39,
  question: "Мария должна ... книги в библиотеку на этой неделе.", 
  answer: "Б) вернуть", 
  options: [
    "А) возвращать ", 
    "",
    "Б) вернуть",      
    ""  
  ]
},
{
  numb: 40,
  question: "Нужно чаще ... детей за успехи.", 
  answer: "А) хвалить ", 
  options: [
    "А) хвалить ",  
    "",
    "Б) похвалить",    
    ""  
  ]
},
{
  numb: 41,
  question: "Можешь не ... свитер: на улице тепло.", 
  answer: "А) надевать 	", 
  options: [
    "А) надевать 	", 
    "", 
    "Б) надеть",     
    ""  
  ]
},
{
  numb: 42,
  question: "У меня так болит рука, что мне даже не ... её.",  
  answer: "Б) поднять", 
  options: [
    "А) поднимать ", 
    "",  
    "Б) поднять",     
    ""  
  ]
},
{
  numb: 43,
  question: "Игорь плохо видит, поэтому он может пройти мимо и не ...", 
  answer: "Б) поздороваться", 
  options: [
    "А) здороваться",  
    "",  
    "Б) поздороваться",    
    ""  
  ]
},
{
  numb: 44,
  question: "Мама заставила сына ... весь суп.",  
  answer: "Б) съесть",
  options: [ 
    "А) есть ",  
    "", 
    "Б) съесть",
    ""   
  ]
},
{
  numb: 45,
  question: "От волнения он не мог ...",  
  answer: "Б) говорить", 
  options: [
    "А) сказать ", 
    "", 
    "Б) говорить",      
    ""  
  ]
},
{
  numb: 46,
  question: "Этот спортсмен продолжает ... за сборную команду России.", 
  answer: "Б) выступать", 
  options: [
    "А) выступить	",  
    "", 
    "Б) выступать",  
    "" 
  ]
},
{
  numb: 47,
  question: "Будешь ... новые фотографии?", 
  answer: "Б) смотреть",
  options: [
    "А) посмотреть",  
    "",
    "Б) смотреть",  
    ""    
  ]
}, 
{
  numb: 48,
  question: "Обещаю тебе не ... о завтрашней встрече.",  
  answer: "Б) забыть", 
  options: [
    "А) забывать	",  
    "",
    "Б) забыть",   
    ""    
  ]
},
{
  numb: 49,
  question: "Мой брат хочет ... свою машину.", 
  answer: "А) продать	", 
  options: [
    "А) продать	", 
    "", 
    "Б) продавать", 
    ""  
  ]
},
{
  numb: 50,
  question: ". Я никак не могу ... эти стихи.", 
  answer: "А) запомнить	", 
  options: [
    "А) запомнить	",  
    "",  
    "Б) запоминать",  
    ""  
  ]
},

];