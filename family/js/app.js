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
    setInterval(function(){
        traitEl.innerHTML = `<strong>${slides[i].trait}</strong>`;
        document.body.style.background = 'linear-gradient(' + 'to right' + ', ' + slides[i].backgroundColorLeft + ', ' + slides[i].backgroundColorRight + ')';
        document.querySelector('h1').style.color = slides[i].color;
        document.querySelector('.title').style.color = slides[i].color;
        i = (i + 1) % slides.length;
    }, 4000);
}

window.onload = function start() {
    displayTraits();
}
