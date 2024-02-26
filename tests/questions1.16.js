// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Ирина нашла тетрадь, ... потеряла вчера.",
  answer: "Б) которую", 
  options: [
    "А) которое", 
    "Б) которую",
    "В) который",
    ""
  ]
},
  { 
  numb: 2,
  question: "Светлана часто рассказывает о подруге, ... познакомилась недавно.",
  answer: "В) с которой", 
  options: [ 
    "А) которую", 
    "Б) о которой ",
    "В) с которой",
    ""
  ]
},
  {
  numb: 3, 
  question: "Я посмотрела фильм, ... ты мне рассказывала.", 
  answer: "А) о котором", 
  options: [
    "А) о котором", 
    "Б) которому",
    "В) в котором",
    ""
  ]
},
  {
  numb: 4,
  question: "Мы поздравили Владимира, ... исполнилось сегодня 20 лет.", 
  answer: "Б) которому",  
  options: [
    "А) которого", 
    "Б) которому",
    "В) в котором",
    ""
  ]
},
  {
  numb: 5,
  question: "В аудиторию вошёл преподаватель, … читал нам лекции в I семестре. ",  
  answer: "В) который", 
  options: [ 
    "А) о котором ", 
    "Б) в который",
    "В) который",
    "Г) которого"
  ]
},
{
  numb: 6,
  question: "Анна познакомилась с писателем, имя ... широко известно в России.", 
  answer:  "Б) которого",  
  options: [
    "А) у которой", 
    "Б) которого",
    "В) которую",
    "Г) который"
  ]
},
{
  numb: 7,
  question: "Дмитрий опоздал, ... поздно встал.",  
  answer: "В) потому что", 
  options: [
    "А) поэтому", 
    "Б) что",
    "В) потому что",
    "" 
  ]
},
{
  numb: 8,
  question: "Антон встал рано, … не опоздать на урок. ", 
  answer: "А) чтобы",
  options: [
    "А) чтобы", 
    "Б) поэтому",
    "В) потому что",
    "" 
  ]
},
{
  numb: 9,
  question: "Джон сказал, ... очень устал от занятий.", 
  answer: "В) что",  
  options: [
    "А) чтобы", 
    "Б) потому что",
    "В) что",
    "" 
  ]
},
{
  numb: 10,
  question: "Сергей не поехал в Италию, ... не успел получить визу.", 
  answer: "Б) потому что",
  options: [
    "А) поэтому", 
    "Б) потому что",
    "В) чтобы ",
    "" 
  ]
},
{
  numb: 11,
  question: "Я сказала, … сделаю работу вовремя.", 
  answer: "Б) что", 
  options: [ 
    "А) чтобы", 
    "Б) что",
    "В) поэтому",
    "" 
  ]
},
{
  numb: 12,
  question: "… спектакль кончился поздно, Мы приехали домой ночью.",  
  answer: "А) так как",  
  options: [
    "А) так как", 
    "Б) потому что",
    "В) почему",
    "" 
  ]
},
{
  numb: 13,
  question: "... помогать семье, старший сын много работал.", 
  answer: "Б) чтобы",  
  options: [
    "А) потому что",  
    "Б) чтобы",
    "В) так как",
    "" 
  ]
},
{
  numb: 14,
  question: "… будет хорошая погода, мы поедем за город.", 
  answer: "В) если",
  options: [
    "А) хотя",  
    "Б) если бы",
    "В) если",
    "" 
  ] 
}, 
{
  numb: 15,
  question: "... Том приехал к нам на обед, он познакомился бы с Марией. ", 
  answer: "В) если бы", 
  options: [
    "А) если",  
    "Б) когда ",
    "В) если бы",
    "" 
  ]
},
{
  numb: 16,
  question: "... будут летние каникулы, я поеду на родину.", 
  answer: "Б) когда",
  options: [
    "А) если бы",  
    "Б) когда",
    "В) если",
    ""
  ]
},
{
  numb: 17,
  question: "... у Татьяны были деньги, она поехала бы во Францию.", 
  answer: "В) если бы", 
  options: [
    "А) если",  
    "Б) когда",
    "В) если бы",
    ""
  ]
},
{
  numb: 18,
  question: "... пойдёт дождь, я открою зонтик.", 
  answer: "А) если ",
  options: [ 
    "А) если ",  
    "Б) если бы",
    "В) потому что",
    ""
  ]
},
{
  numb: 19,
  question: "Марина не сдала экзамен, … много готовилась к нему.",  
  answer: "А) хотя",  
  options: [
    "А) хотя",  
    "Б) если бы",
    "В) потому что",
    ""
  ]
},
{
  numb: 20, 
  question: "Пётр делает много ошибок, ... изучает иностранный язык 9 лет.",  
  answer: "Б) хотя",  
  options: [
    "А) потому что",  
    "Б) хотя",
    "В) поэтому",
    ""
  ]
},
{
  numb: 21,
  question: "Анна изучает французский язык только месяц, … делает много ошибок.",  
  answer: "Б) поэтому", 
  options: [
    "А) потому что",
    "Б) поэтому",
    "В) хотя",
    "" 
  ]
}, 
{
  numb: 22,
  question: "Мы опоздали на поезд, ... нам пришлось ехать на автобусе.",  
  answer: "А) поэтому",  
  options: [
    "А) поэтому",
    "Б) хотя",
    "В) когда ",
    "" 
  ]
},
{
  numb: 23,
  question: "... наступит лето, Николай поедет на дачу.",  
  answer: "А) когда", 
  options: [
    "А) когда",
    "Б) если",
    "В) хотя",
    "" 
  ]
},
{
  numb: 24,
  question: "Татьяна поссорилась с Иваном, ... не хочет его видеть.", 
  answer: "А) поэтому", 
  options: [
    "А) поэтому",
    "Б) что",
    "В) так как",
    "" 
  ]
},
  { 
  numb: 25,
  question: "Я не верю ..., что он говорит.", 
  answer: "Б) тому", 
  options: [ 
    "А) то",
    "Б) тому",
    "В) о том",
    "" 
  ]
},
  {
  numb: 26, 
  question: "У него нет ..., что мне нужно.", 
  answer: "А) того", 
  options: [
    "А) того",
    "Б) то",
    "В) тому",
    "" 
  ]
},
  {
  numb: 27, 
  question: "Я занимаюсь ..., что меня интересует.",  
  answer: "В) тем", 
  options: [
    "А) о том",
    "Б) то",
    "В) тем",
    ""  
  ]
},
  { 
  numb: 28,
  question: "Лена долго думала ..., что случилось дома.",  
  answer: "А) о том ",
  options: [ 
    "А) о том ",
    "Б) то",
    "В) тому",
    ""  
  ]
},
{
  numb: 29,
  question: "Я дружу ..., с кем хочу.",  
  answer: "А) с тем", 
  options: [
    "А) с тем",
    "Б) тому",
    "В) того",
    ""  
  ]
},
{
  numb: 30,
  question: "Кирилл всегда помогает ..., кто нуждается в этом.",  
  answer: "В) тем",
  options: [
    "А) с теми",
    "Б) те",
    "В) тем",
    "" 
  ]
},
{
  numb: 31,
  question: "Марта нашла ..., что искала.", 
  answer: "Б) то", 
  options: [
    "А) того",
    "Б) то",
    "В) тот",
    "" 
  ]
},
{
  numb: 32,
  question: "Расскажите мне ..., что вы видели.",  
  answer: "Б) о том",  
  options: [
    "А) того",
    "Б) о том",
    "В) тому",
    "" 
  ]
},
{
  numb: 33,
  question: "Трудно разговаривать ..., кто не слушает.", 
  answer: "А) с теми", 
  options: [
    "А) с теми",  
    "Б) о тех",
    "В) о том",
    "" 
  ]
},
{
  numb: 34,
  question: "Мне нравится ..., что нарисовал этот ребёнок.",  
  answer: "Б) то",
  options: [ 
    "А) тому",  
    "Б) то",
    "В) те",
    "" 
  ]
},
{
  numb: 35,
  question: "Я спросил друга, … Он видел Марту.",  
  answer: "Б) ли", 
  options: [
    "А) если",  
    "Б) ли",
    "В) когда",
    "" 
  ]
},
{
  numb: 36,
  question: "Том ответил, ... он не видел Марту.", 
  answer: "Б) что", 
  options: [
    "А) ли ",  
    "Б) что",
    "В) то",
    "" 
  ]
},
{
  numb: 37,
  question: "Лена спросила Серёжу, ... он ей позвонит.", 
  answer: "А) когда",
  options: [
    "А) когда",  
    "Б) ли",
    "В) если",
    "" 
  ]
}, 
{
  numb: 38,
  question: "Серёжа спросил Лену, знает ... она Антона.",  
  answer: "В) ли", 
  options: [ 
    "А) если",  
    "Б) что",
    "В) ли",
    "" 
  ]
},
{
  numb: 39,
  question: "... два месяца не было дождя, многие растения погибли.", 
  answer: "А) из-за того что",  
  options: [
    "А) из-за того что",   
    "Б) благодаря тому что ",
    "В) потому что",
    "" 
  ]
},
{
  numb: 40,
  question: "Я смогла вовремя выполнить работу, ... мне помогли друзья.", 
  answer: "Б) благодаря тому что", 
  options: [
    "А) чтобы",   
    "Б) благодаря тому что",
    "В) из-за того что",
    "" 
  ]
},
{
  numb: 41,
  question: "Том немного подумал и сказал, ... не хочет ехать в Англию.",  
  answer: "Б) что", 
  options: [
    "А) из-за того что",   
    "Б) что",
    "В) благодаря тому что",
    "" 
  ]
}, 
{
  numb: 42,
  question: "... все студенты уехали на каникулы, на вечер никто не пришёл.",  
  answer: "А) так как",  
  options: [
    "А) так как",   
    "Б) благодаря тому что ",
    "В) потому что",
    "" 
  ]
},
{
  numb: 43,
  question: "… Марина опоздала, она не успела осмотреть выставку.",  
  answer: "В) из-за того что",
  options: [
    "А) благодаря тому что",   
    "Б) когда",
    "В) из-за того что",
    "" 
  ]
},
{
  numb: 44,
  question: "... я знала, что ты не придёшь, я тебя не ждала бы.", 
  answer: "А) если бы", 
  options: [
    "А) если бы",   
    "Б) когда",
    "В) благодаря тому что",
    "" 
  ]
},
  { 
  numb: 45,
  question: "Бабушке было тогда 60 лет, .. дедушке - 56.", 
  answer: "Б) а", 
  options: [ 
    "А) и",   
    "Б) а",
    "В) но",
    "" 
  ]
},
  {
  numb: 46, 
  question: "Антонина любит животных, ... у неё в доме всегда были собаки.", 
  answer: "В) и", 
  options: [
    "А) но",   
    "Б) а",
    "В) и",
    "" 
  ]
},
  {
  numb: 47, 
  question: "Джина хотела помочь Борису, ... Борис отказался от её помощи.",  
  answer: "А) но",  
  options: [
    "А) но",   
    "Б) и",
    "B) a",
    "" 
  ]
},
  { 
  numb: 48,
  question: "... Марта мыла посуду, Джон убирал комнату.",  
  answer: "В) в то время как",
  options: [ 
    "А) как только",   
    "Б) после того как ",
    "В) в то время как",
    "" 
  ]
},
{
  numb: 49,
  question: "... Ирина приехала в Прагу, там было большое наводнение.",  
  answer: "Б) до того как", 
  options: [
    "А) с тех пор как",   
    "Б) до того как",
    "В) куда",
    "" 
  ]
},
{
  numb: 50,
  question: "... Сергей играл в теннис, Антон сделал всё домашнее задание.",  
  answer: "В) пока",
  options: [
    "А) как только",   
    "Б) с тех пор как",
    "В) пока",
    "" 
  ]
},
{
  numb: 51,
  question: "Джейн не знает, … пошёл Том.",  
  answer: "А) куда", 
  options: [
    "А) куда",   
    "Б) где",
    "В) откуда",
    "" 
  ]
}, 
{
  numb: 52,
  question: "Я не знаю, ... находится Сбербанк.",  
  answer: "А) где",  
  options: [
    "А) где",   
    "Б) как",
    "В) куда",
    "" 
  ]
},
{
  numb: 53,
  question: "Сергей спросил меня, ... я не еду на юг.",  
  answer: "В) почему",
  options: [
    "А) зачем",   
    "Б) как",
    "В) почему",
    "" 
  ]
},
{
  numb: 54,
  question: "Михаил спросил меня, … я знаю его брата. ", 
  answer: "А) откуда", 
  options: [
    "А) откуда",   
    "Б) почему",
    "В) когда",
    "" 
  ]
},
  { 
  numb: 55,
  question: "Я знаю, ... Саша взял словарь.", 
  answer: "В) у кого", 
  options: [ 
    "А) с кем",   
    "Б) от кого",
    "В) у кого",
    "" 
  ]
},
  {
  numb: 56, 
  question: "Елена спросила нас, ... мы отдали дискету.", 
  answer: "Б) кому", 
  options: [
    "А) кого",   
    "Б) кому",
    "В) кто",
    "" 
  ]
},
  {
  numb: 57, 
  question: "... Маша придёт раньше, ты сможешь увидеть её.",  
  answer: "В) если",  
  options: [
    "А) когда",
    "Б) потому что",
    "В) если",
    ""
  ]
},
  { 
  numb: 58,
  question: "Я не знаю, ... решение примет Борис.",  
  answer: "В) какое",
  options: [ 
    "А) которое",
    "Б) что",
    "В) какое",
    ""
  ]
},
{
  numb: 59,
  question: "Дмитрий хочет, … Анна пришла на дискотеку.",  
  answer: "Б) чтобы", 
  options: [
    "А) что",
    "Б) чтобы",
    "В) если бы",
    ""
  ]
},
{
  numb: 60,
  question: "Будет хорошо, ... ты придёшь к нам в гости.",  
  answer: "А) если",
  options: [
    "А) если",
    "Б) чтобы",
    "В) как",
    ""
  ]
},

];