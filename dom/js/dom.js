let subjectEl = document.querySelector('#subjectContainer');

let subjects = [{
    name: 'World',
    colour: 'green'
}, {
    name: 'Dolly',
    colour: 'blue'
}];

/**
 * Display the subject.
 * @param {Object} subject 
 */
function displaySubject(subject){
    setTimeout(function(){
        subjectEl.innerHTML = `<i>${subject.name}</i>`;
        subjectEl.style.color = subject.colour;
    }, 3000);
}

let subject = subjects[Math.floor(Math.random() * subjects.length)];
displaySubject(subject);