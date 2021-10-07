import updateTable from './updateData.js';
import Swal from 'sweetalert2';

let message;
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5vqhBn3iKlrJoDtpjB0E/scores/';

async function getScores() {
  const response = await fetch(api);
  const list = await response.json();
  updateTable(list);
}

const addScore = (name, score) => {
  fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then((json) => {
    Swal.fire({
      icon: 'success',
      text: json.result
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    })
  });
  return message;
};

export { addScore, getScores };
