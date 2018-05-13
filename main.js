console.log('hi');

var Russian = 
      {
      happy: "счастливого",
      birthday: "дня рождения",
      best: "хорошего",
      wish: "желаю",
      good: "хорошего",
      luck: "везения",
      this: "в этом",
      year: "год",
      health: "здоровья",
      life: "жизни",
      happiness: "счастья",
      i: "Я",
      you: "тебе",
      in: "в",
      and: "и",
      lots:"много",
      fun: "весело",
      joy: "радость",
      love: "люблю",
      enjoy: "наслаждаться"
      };

    // console.log(Russian.life);


var Amharic = 
      {
      happy: "መልካም",
      birthday: "ልደት",
      best:"ምርጥ",
      wish:"ምኞት",
      good:"ጥሩ",
      luck: "ዕድል",
      this: "በዚህ" ,
      year: "ዓመት",
      health: "ጤና",
      life:"ሕይወት",
      happiness:"ደስታ",
      i: "እኔ",
      in: "ውስጥ",
      you:"ለአንተ",
      and: "እና",
      lots: "ብዙ",
      fun: "አዝናኝ",
      love: "ፍቅር",
      enjoy: "ይደሰቱ",
      };
    // console.log (Amharic.luck);
var Danish =
      {
      happy: "lykkelig",
      birthday: "fødselsdag",
      best: "bedst",
      wish: "ønske",
      good: "godt",
      luck: "held",
      this: "det her",
      year: "år ",
      health: "sundhed",
      life: "liv",
      happiness: "lykke",
      i: "jeg",  
      you: "du",
      in: "i",
      and: "og",
      lots:"masser",
      fun:"sjovt",
      love: "elsker",
      enjoy:  "god fornøjelse"
      }
    
    
          var buttons = document.getElementsByClassName('button');
          var myTextInput = document.getElementById('myTextInput');
          var myTextOutput = document.getElementById('myTextOutput');
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
              var value =  myTextInput.value.toLowerCase().split(' ');
              let result = [];
              if (e.target.id === 'myButtonRussian') {
                value.forEach(function(word) {
                  result.push(Russian[word]);
                }); 
              } else if (e.target.id === 'myButtonAmharic') {
                value.forEach(function(word) {
                  result.push(Amharic[word]);
                });
              }
                else if (e.target.id === 'myButtonDanish') {
                  value.forEach(function(word){
                    result.push(Danish[word]);
                  });
                };
            myTextOutput.value = result.join(' ');
            });
          };
      
        

     