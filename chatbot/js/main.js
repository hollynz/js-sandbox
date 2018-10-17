var artists = new Array();
var johnMayer = {
    firstName: "John",
    lastName: "Mayer"
}
var beyonce = {
    firstName: "Beyonce",
    lastName: "Knowles"
}
artists.push(johnMayer);
artists.push(beyonce);


var listOrSingle = prompt('Do you want to get a list of artists or a single artist?');
search(listOrSingle);

function search (listOrSingle){
    if(listOrSingle==='list'){
        var i = 0;
        for(i; i < artists.length; i++){
            console.log(artists[i].firstName + ' ' + artists[i].lastName);
        }
        return;
    }
    else if(listOrSingle==='single'){
        var artistToSearch = prompt("What is the artist's first name?");
        // console.log(artistToSearch);
        var i = 0;
        for(i; i < artists.length; i++){
            // console.log(artists[i].firstName);
            if(artists[i].firstName.indexOf(artistToSearch)!=-1){
                console.log(artists[i].firstName + ' ' + artists[i].lastName);
                return;
            }
        }
        console.log('No artist found.');
    }
}

