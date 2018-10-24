let timeInterval = 4000;
let traitEl = document.querySelector('#trait');

let slides = [{
    trait: 'cool',
    color: 'white',
    backgroundColorLeft: 'green',
    backgroundColorRight: 'lightblue'
}, {
    trait: 'calm',
    color: 'white',
    backgroundColorLeft: 'lightblue',
    backgroundColorRight: 'purple'

},{
    trait: 'collected',
    color: 'white',
    backgroundColorLeft: 'purple',
    backgroundColorRight: 'red'
},{
    trait: 'motivated',
    color: 'white',
    backgroundColorLeft: 'red',
    backgroundColorRight: 'orange'
},{
    trait: 'thoughtful',
    color: 'black',
    backgroundColorLeft: 'orange',
    backgroundColorRight: 'yellow'
},{
    trait: 'sunny',
    color: 'black',
    backgroundColorLeft: 'yellow',
    backgroundColorRight: 'green'
}];

/**
 * Display the trait and change colours.
 * @param {Object} subject 
 */
function displayTraits(){
    var i = 0;
    // timeInterval = 4000;
    setInterval(function(){
        traitEl.innerHTML = `<strong>${slides[i].trait}</strong>`;
        document.body.style.background = 'linear-gradient(' + 'to right' + ', ' + slides[i].backgroundColorLeft + ', ' + slides[i].backgroundColorRight + ')';
        document.querySelector('h1').style.color = slides[i].color;
        document.querySelector('.title').style.color = slides[i].color;
        i = (i + 1) % slides.length;
    }, timeInterval);
}

window.onload = function start() {
    displayTraits();
}

// let descriptor = document.querySelector('.title');
// descriptor.addEventListener('click', disco);

// function disco(evt){
//     alert('clicked');
//     timeInterval = 1000;
//     reload();
// }



// Richard's code:
// <!DOCTYPE html>
// <html class="no-js">
// <head>
//    <meta charset="utf-8">
//    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//    <title>JS Sandbox</title>
//    <meta name="description" content="">
//    <meta name="viewport" content="width=device-width, initial-scale=1">
//    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
//    <link rel="stylesheet" href="css/main.css">
// </head>
// <body>
//    <div class="container">
//        <div class="row">
//            <h1 class="descriptor"></h1>
//        </div>
//    </div>
//    <script src="js/jen.js"></script>
// </body>
// </html> (edited)
// * {
//  box-sizing: border-box;
// }

// body {
//  background: #fff;
//  -webkit-transition: background-color 500ms linear;
//  -o-transition: background-color 500ms linear;
//  transition: background-color 500ms linear;
// }

// .container {
//  height: 90vh;
//  display: -webkit-box;
//  display: -ms-flexbox;
//  display: flex;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  padding: 10vw;
// }

// .row {
//  width: 100%;
//  text-align: center;
// }

// .descriptor {
//  font-family: "Lobster", cursive;
//  color: white;
//  font-size: 10vw;
//  cursor: pointer;
// }
// let descriptorEl = document.querySelector(".descriptor");
// let index = 0;
// let slow = 3000;
// let fast = 200;
// let intervalId;
// let interval = slow;
// let screens = [
//    { descriptor: "Great listener", bgColor: "#DD2C00" },
//    { descriptor: "Wise", bgColor: "#FFAB00" },
//    { descriptor: "Easy to talk to", bgColor: "#AEEA00" },
//    { descriptor: "Warm", bgColor: "#FF6D00" },
//    { descriptor: "Authentic", bgColor: "#00B8D4" },
//    { descriptor: "Kind", bgColor: "#2962FF" },
//    { descriptor: "Supportive", bgColor: "#00BFA5" },
//    { descriptor: "Calm", bgColor: "#6200EA" },
//    { descriptor: "Caring", bgColor: "#00C853" },
//    { descriptor: "Natural leader", bgColor: "#FFD600" },
//    { descriptor: "Gentle strength", bgColor: "#64DD17" },
//    { descriptor: "Clever", bgColor: "#C51162" },
//    { descriptor: "Intelligent", bgColor: "#0091EA" },
//    { descriptor: "Chilled out coaching style", bgColor: "#AA00FF" }
//  ];

//  function changeScreen(){
//    descriptorEl.innerHTML = screens[index].descriptor;
//    document.body.style.backgroundColor = screens[index].bgColor;
//    if(index === screens.length - 1){
//      index = 0;
//      return;
//    }
//    index++;
//  }

//  descriptorEl.addEventListener('click', () => {
//    if(interval === slow){
//        interval = fast;
//        document.body.style.transition = 'none';
//    }else{
//        interval = slow;
//        document.body.style.transition = 'background-color 500ms linear';
//    }
//    clearInterval(intervalId);
//    start();
//  });



//  function start(){
//    intervalId = setInterval(() => {
//        changeScreen();
//    }, interval);
//  }

//  changeScreen();
//  start();