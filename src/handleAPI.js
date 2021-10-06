class API {
    constructor() {
        this.scores = []
        this.api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5QQHSdSiCLaYlNeo8vj/scores/'
    }

    getScores() {
        fetch(this.api).then(response => response.json()).then(json => {
            console.log(json)
            this.scores = json.parse()
        });
        return this.scores;
    }

    addScore(name, score) {
        let message;
        fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5QQHSdSiCLaYlNeo8vj/scores/', { 
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
}

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