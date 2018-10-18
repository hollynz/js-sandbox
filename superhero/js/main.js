var membersEl = document.querySelector('.members'); //TODO This is the unordered list HTML element

//this is our data
var game = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            imageUrl: "images/djskjdsf.jpeg",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

//this is just getting the members from the game object, but pretend this is getting data from a db
function getMembers() {
    return game.members;
}

function getMemberHTMLListItem(member) {
    var list = `<li>
    <div>
      <img src="http://www.molecule.lt/sites/default/files/Molecule_video.gif" alt=""/>
      <h1>${member.name}</h1>
      <p>${member.secretIdentity}</p>
  </div>
</li>`;
    return list;
}

function displayMembers() {
    var members = getMembers();
    var list = '';
    for (var i = 0; i < members.length; i++) {
        let member = members[i];
        list += getMemberHTMLListItem(member);
    }
    membersEl.innerHTML = list;
}

displayMembers();





// EXAMPLE CONCATENATING STRINGS
// HTML: <div class="wrapper"></div>
// let wrapper = document.querySelector('.wrapper');

// let days = [
//     {name:'M'}, 
//     {name:'T'}, 
//     {name:'W'}, 
//     {name:'T'}, 
//     {name:'F'}, 
//     {name:'S'}, 
//     {name:'S'}
// ];

// function getItemHTML(day){
//     return `<div>${day.name}</div>`;
// }

// function displayDays(){
//     let daysString = '';
//     for(let i = 0; i < days.length; i++){
//         let day = days[i];
//         daysString += getItemHTML(day);
//     }
//     wrapper.innerHTML = daysString;
// }

// displayDays();
