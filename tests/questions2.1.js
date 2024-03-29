// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Мы давно не переписываемся с Андреем. И вдруг он взял и ... мне подробное письмо.",
    answer: "В) написал",
    options: [
      "А) писал",
      "Б) пишет",
      "В) написал",
      "Г) напишет",
    ]
  },
    { 
    numb: 2,
    question: "Сейчас эпидемия гриппа. Как бы тебе не ...",
    answer: "Г) заразиться",
    options: [ 
      "А) заражаться", 
      "Б) заразился ", 
      "В) заражается", 
      "Г) заразиться"  
    ]
  },
    {
    numb: 3, 
    question: "По голосу брата я поняла, что его что-то …",
    answer: "А) расстроило",
    options: [
      "А) расстроило", 
      "Б) расстроит",
      "В) расстраивало бы",
      "Г) расстраивало"  
    ]
  },
    {
    numb: 4,
    question: "Сестра ни за что не … меня, что она поступила правильно.", 
    answer: "В) убедит",  
    options: [
      "А) убеждает", 
      "Б) убеждала", 
      "В) убедит", 
      "Г) убедила"  
    ]
  },
    {
    numb: 5,
    question: "Смотри, не ... разбудить меня вовремя.", 
    answer: "Б) забудь",
    options: [ 
      "А) забывай", 
      "Б) забудь",
      "В) забудешь",  
      "Г) забываешь" 
    ]
  },
  {
    numb: 6,
    question: "Сын перестал ... родителям, и они очень волнуются.", 
    answer: "А) звонить", 
    options: [
      "А) звонить",
      "Б) звонил", 
      "В) позвонил",
      "Г) позвонит" 
    ]  
  },
  {
    numb: 7,
    question: "Не … бы эту передачу. Я всю неделю ждал её.", 
    answer: "Б) пропустить", 
    options: [
      "А) пропускать",
      "Б) пропустить",  
      "В) пропустим",
      "Г) пропускаем"  
    ]
  },
  {
    numb: 8,
    question: "Я заблудился поздно вечером в незнакомом городе, но не у кого было ... дорогу.",
    answer: "В) спросить", 
    options: [
      "А) спрашивал", 
      "Б) спросил", 
      "В) спросить",
      "Г) спрашивать бы"   
    ]
  },
  {
    numb: 9,
    question: "Он давно не пел, а тут вдруг ... гитару и начал петь.", 
    answer: "В) взял",  
    options: [
      "А) брал", 
      "Б) берёт",  
      "В) взял", 
      "Г) возьмёт"   
    ]
  },
  {
    numb: 10,
    question: "Сестра забыла ... мне, что вечером мы идём в гости.", 
    answer: "Г) напомнить",
    options: [
      "А) напоминать",  
      "Б) напомнила", 
      "В) напомнит", 
      "Г) напомнить" 
    ]
  },
  {
    numb: 11,
    question: "Без твоей помощи мне ни за что не ... эту статью.", 
    answer: "Г) перевести", 
    options: [ 
      "А) переводить", 
      "Б) переводил бы",
      "В) переведу", 
      "Г) перевести"   
    ]
  },
  {
    numb: 12,
    question: "Хотя Нина легла поздно, она долго не могла ...", 
    answer: "А) заснуть",  
    options: [
      "А) заснуть", 
      "Б) засыпать", 
      "В) заснула", 
      "Г) засыпала бы"  
    ]
  },
  {
    numb: 13,
    question: "Погода испортилась, и Анна передумала ... из дома.", 
    answer: "Г) выходить",  
    options: [
      "А) выйти", 
      "Б) вышла",  
      "В) выйдет", 
      "Г) выходить"  
    ]
  },
  {
    numb: 14,
    question: "Боюсь, как бы Виктор не ... на поезд.", 
    answer: "Б) опоздал", 
    options: [
      "А) опоздает",  
      "Б) опоздал",  
      "В) опаздывал", 
      "Г) опоздать"    
    ]
  }, 
  {
    numb: 15,
    question: "Олег никогда не стал бы ... на меня.", 
    answer: "Б) жаловаться",  
    options: [
      "А) пожаловался бы",  
      "Б) жаловаться",  
      "В) пожалуется", 
      "Г) пожаловаться"    
    ]
  },
  {
    numb: 16,
    question: "По разговору было понятно, что Игоря очень ... эта новость.", 
    answer: "Г) удивила",
    options: [
      "А) удивит", 
      "Б) удивляла",  
      "В) удивлялась",  
      "Г) удивила"  
    ]
  },
  {
    numb: 17,
    question: "Я никогда не смог бы … предательства.", 
    answer: "В) простить",  
    options: [
      "А) прощать",  
      "Б) простил бы",  
      "В) простить",  
      "Г) прощу"   
    ]
  },
  {
    numb: 18,
    question: "Неужели ты никогда не ... северного сияния? ", 
    answer: "Б) видела", 
    options: [ 
      "А) увидела",  
      "Б) видела",
      "В) видела бы",  
      "Г) увидеть"    
    ]
  },
  {
    numb: 19,
    question: "Мать потребовала, чтобы сын немедленно ... о случившемся.",  
    answer: "Б) рассказал",   
    options: [
      "А) рассказывал бы",  
      "Б) рассказал",  
      "В) расскажет",  
      "Г) рассказал бы"   
    ]
  },
  {
    numb: 20, 
    question: "Ему пришлось ... в обмане.",  
    answer: "А) сознаться",   
    options: [
      "А) сознаться", 
      "Б) сознавался",   
      "В) сознается",  
      "Г) сознаваться"   
    ]
  },
  {
    numb: 21,
    question: "Смотри, не ... ключ, у нас нет запасного.",  
    answer: "Б) потеряй",  
    options: [
      "А) теряй",   
      "Б) потеряй",  
      "В) теряешь",  
      "Г) потеряешь"    
    ]
  }, 
  {
    numb: 22,
    question: "Он очень ответственный человек и обязательно ... с этой работой.",  
    answer: "А) справится",   
    options: [
      "А) справится",   
      "Б) справляется",   
      "В) справлялся",  
      "Г) справился"     
    ]
  },
  {
    numb: 23,
    question: "Господин директор! ... задать Вам несколько вопросов.",  
    answer: "В) Разрешите", 
    options: [
      "А) Разрешайте",  
      "Б) Разрешили бы", 
      "В) Разрешите",  
      "Г) Разрешали бы"   
    ]
  },
  {
    numb: 24,
    question: "Я не понимаю, почему она так долго ... от нас случившееся.", 
    answer: "В) скрывала",  
    options: [
      "А) скрыла", 
      "Б) скроет", 
      "В) скрывала", 
      "Г) скрывала бы", 
    ]
  },
    { 
    numb: 25,
    question: "Почему бы тебе не ... Иру на день рождения?", 
    answer: "В) пригласить",
    options: [ 
      "А) приглашать",  
      "Б) приглашала", 
      "В) пригласить", 
      "Г) пригласила бы"  
    ]
  },
    {
    numb: 26, 
    question: "Она вдруг вскочила с места и ... письмо со стола.", 
    answer: "Б) схватила",  
    options: [
      "А) хватала", 
      "Б) схватила",
      "В) схватит", 
      "Г) хватает"  
    ]
  },
    {
    numb: 27, 
    question: "Декан очень занят и не сможет … вас сегодня.",  
    answer: "В) принять", 
    options: [
      "А) принимать",  
      "Б) принимал",  
      "В) принять",  
      "Г) принять бы"  
    ]
  },
    { 
    numb: 28,
    question: "Нам незачем ... к этому вопросу.",  
    answer: "В) возвращаться", 
    options: [ 
      "А) вернуться", 
      "Б) вернулись",
      "В) возвращаться", 
      "Г) вернуться бы"   
    ]
  },
  {
    numb: 29,
    question: "Наш спортсмен быстро ... соперников и первым пришёл к финишу.",  
    answer: "А) опередил",  
    options: [
      "А) опередил",
      "Б) опережал",  
      "В) опередит",
      "Г) опередил бы"  
    ]
  },
  {
    numb: 30,
    question: "Я долго не могла ..., где я видела этого человека.",  
    answer: "В) вспомнить",
    options: [
      "А) вспоминать", 
      "Б) вспомнила бы", 
      "В) вспомнить",
      "Г) вспоминала бы"   
    ]
  },
  {
    numb: 31,
    question: "Не скажи я ему об этом, мы не ...", 
    answer: "Г) поссорились бы",  
    options: [
      "А) поссоримся ", 
      "Б) ссорились",  
      "В) ссоримся", 
      "Г) поссорились бы"   
    ]
  },
  {
    numb: 32,
    question: "Ни к чему ... ей об этом.",  
    answer: "А) рассказывать",  
    options: [
      "А) рассказывать", 
      "Б) рассказать бы",  
      "В) рассказываю",   
      "Г) расскажу"  
    ]
  },
  {
    numb: 33,
    question: "Анна обиделась и ни за что не ... с нами за город.", 
    answer: "Б) поедет",  
    options: [
      "А) ездит",  
      "Б) поедет",  
      "В) ехала бы",  
      "Г) ездила"   
    ]
  },
  {
    numb: 34,
    question: "Уже так поздно. Не ... завтра на работу.",  
    answer: "Б) проспать бы", 
    options: [ 
      "А) просплю",  
      "Б) проспать бы",
      "В) проспал", 
      "Г) просыпать"    
    ]
  },
  {
    numb: 35,
    question: "Он принимал лекарство, пока не ...",  
    answer: "Г) поправился",  
    options: [
      "А) поправлялся", 
      "Б) поправился бы",  
      "В) поправиться",  
      "Г) поправился"   
    ]
  },
  {
    numb: 36,
    question: "Я ни за что не ... что всё это действительно с ним произошло.", 
    answer: "В) поверю", 
    options: [
      "А) верил",  
      "Б) верю",  
      "В) поверю", 
      "Г) верил бы" 
    ]
  },
  {
    numb: 37,
    question: "Ей не с кем ... своими проблемами.", 
    answer: "Г) поделиться",
    options: [ 
      "А) делилась бы",  
      "Б) поделится",  
      "В) делилась", 
      "Г) поделиться"    
    ] 
  }, 
  {
    numb: 38,
    question: "Не стоило ... из-за этого.",  
    answer: "В) сердиться",  
    options: [
      "А) рассердиться",  
      "Б) сердился бы",  
      "В) сердиться", 
      "Г) сердится"     
    ]
  },
  {
    numb: 39,
    question: "По мере того как ... день отъезда, она всё больше волновалась.", 
    answer: "А) приближался ", 
    options: [
      "А) приближался ", 
      "Б) приблизился", 
      "В) приближался бы",  
      "Г) приблизиться"  
    ]
  },
  {
    numb: 40,
    question: "Как только ... телефон, я снял трубку.", 
    answer: "Б) зазвонил", 
    options: [
      "А) звонит",  
      "Б) зазвонил",  
      "В) звонил бы",  
      "Г) зазвонит"  
    ]
  },

];