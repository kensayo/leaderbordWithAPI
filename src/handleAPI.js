import { updateTable } from "./updateData";

var resp, message;
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5QQHSdSiCLaYlNeo8vj/scores/';

const getScores = () => {
    resp = undefined;
    fetch(api).then(function (response) { 
        return response.json()
    }).then(function (json) {
       updateTable(json) ;
    });
    return resp;
}

const addScore = (name, score) => {
    fetch(api, {
        method: 'POST',
        body: JSON.stringify({
            "user": name,
            "score": score
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json()).then(json => {
        console.log(json)
        message = json;
    });
    return message;
}

export {addScore, getScores}

// Crear Juego
/*
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
method: 'POST',
body: JSON.stringify({
    "name": "Kenny's Game"
}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response => response.json()).then(json => console.log(json));


{result: 'Game with ID: O5QQHSdSiCLaYlNeo8vj added.'}


// Crear nuevo score

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5QQHSdSiCLaYlNeo8vj/scores/', {
method: 'POST',
body: JSON.stringify({
    "user": "Kenny",
    "score":"John Doe"
}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response => response.json()).then(json => console.log(json));

// Obtener scores

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5QQHSdSiCLaYlNeo8vj/scores/').then(response => response.json()).then(json => console.log(json));
*/