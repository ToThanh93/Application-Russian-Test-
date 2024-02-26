// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "... покупать такую вещь, надо как следует подумать.",
    answer: "А) Прежде чем", 
    options: [
      "А) Прежде чем",
      "Б) Когда",
      "В) Если бы",
      "Г) Как ни", 
    ]
  },
    { 
    numb: 2,
    question: "Я бы тебя навестила, … я знала, что ты болел.",
    answer: "В) если бы", 
    options: [ 
      "А) в то время как", 
      "Б) если",  
      "В) если бы", 
      "Г) как ни"  
    ]
  },
    {
    numb: 3, 
    question: "… вода в Финском заливе была холодная, мы все искупались.",
    answer: "Б) Хотя", 
    options: [
      "А) Как ни", 
      "Б) Хотя",
      "В) Если",
      "Г) Как"   
    ]
  },
    {
    numb: 4,
    question: "Он не смог преодолеть страх, … старался.", 
    answer: "Г) как ни",   
    options: [
      "А) в то время как", 
      "Б) когда", 
      "В) если бы", 
      "Г) как ни"  
    ]
  },
    {
    numb: 5,
    question: "Она всегда брала машину напрокат, ... отдыхала.", 
    answer: "А) где бы ни", 
    options: [ 
      "А) где бы ни", 
      "Б) где", 
      "В) хотя",  
      "Г) если бы" 
    ]
  },
  {
    numb: 6,
    question: "Вокруг один снег, ... посмотри.", 
    answer: "Б) куда ни", 
    options: [ 
      "А) как ни",
      "Б) куда ни", 
      "В) если", 
      "Г) когда ни" 
    ]  
  },
  {
    numb: 7,
    question: "... тебе хочется развести сад, тебе придётся нанять садовника. ", 
    answer: "Г) Если",  
    options: [
      "А) В то время как",
      "Б) Если бы",  
      "В) Когда", 
      "Г) Если"  
    ]
  },
  {
    numb: 8,
    question: "Андрей уже учился в университете, ... Лена ходила в школу.",
    answer: "В) в то время как ",  
    options: [
      "А) если", 
      "Б) хотя", 
      "В) в то время как ",
      "Г) так как"    
    ]
  },
  {
    numb: 9,
    question: "В театр Ирина не попала, … не смогла перенести занятия.", 
    answer: "Г) так как",   
    options: [
      "А) когда", 
      "Б) если",  
      "В) в то время как",  
      "Г) так как"   
    ]
  },
  {
    numb: 10,
    question: "... просил её муж бросить курить, она не смогла отказаться от сигарет.", 
    answer: "А) Как ни", 
    options: [
      "А) Как ни",  
      "Б) Так как", 
      "В) Если бы", 
      "Г) В то время как"  
    ]
  },
  {
    numb: 11,
    question: "... говори «халва», во рту слаще не станет.", 
    answer: "Б) Сколько ни",  
    options: [ 
      "А) Хотя", 
      "Б) Сколько ни",
      "В) Когда",  
      "Г) В то время как"   
    ]
  },
  {
    numb: 12,
    question: "Надо сделать всё, что возможно, … говорить, что ничего нельзя изменить.", 
    answer: "Г) прежде чем",   
    options: [
      "А) если", 
      "Б) в то время как", 
      "В) как бы ни", 
      "Г) прежде чем"   
    ]
  },
  {
    numb: 13,
    question: "Он всегда берёт собаку с собой, ... ехал.", 
    answer: "Б) где бы ни",   
    options: [
      "А) куда бы ни", 
      "Б) где бы ни",  
      "В) как бы ни",  
      "Г) куда ни"  
    ]
  },
  {
    numb: 14,
    question: "Антонина достигла всего, чего желала, ... никто не верил в её успехи.", 
    answer: "А) хотя",  
    options: [
      "А) хотя",  
      "Б) если",  
      "В) так как", 
      "Г) как ни"    
    ]
  }, 
  {
    numb: 15,
    question: "... отправить письмо, нужно исправить ошибки.", 
    answer: "В) Прежде чем",   
    options: [ 
      "А) Если",  
      "Б) В то время как",  
      "В) Прежде чем",  
      "Г) Когда"    
    ]
  },
  {
    numb: 16,
    question: "Я купила бы этот тур, … Ты захотела поехать со мной.", 
    answer: "А) если бы", 
    options: [
      "А) если бы", 
      "Б) если",  
      "В) так как",   
      "Г) когда"  
    ]
  },
  {
    numb: 17,
    question: "Я тебе расскажу, ... решается эта задача.", 
    answer: "В) как",   
    options: [
      "А) если бы",  
      "Б) если",  
      "В) как",  
      "Г) как ни"   
    ] 
  },
  {
    numb: 18,
    question: "Он тебе всегда поможет, … случилось.", 
    answer: "Б) что бы ни",  
    options: [ 
      "А) если бы",  
      "Б) что бы ни",
      "В) если",  
      "Г) как бы ни"     
    ]
  },
  {
    numb: 19,
    question: "Мы решили ехать на дачу, ... было уже очень поздно.",  
    answer: "Г) хотя ",   
    options: [ 
      "А) если бы",  
      "Б) прежде чем",  
      "В) в то время как",  
      "Г) хотя "    
    ]
  },
  {
    numb: 20, 
    question: "... начинались занятия, он никогда на них не опаздывал.",  
    answer: "А) Во сколько бы ни",    
    options: [
      "А) Во сколько бы ни", 
      "Б) Если бы",   
      "В) Когда",  
      "Г) Как бы ни"   
    ] 
  },

];