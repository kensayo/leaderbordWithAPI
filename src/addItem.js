import { addScore } from './handleAPI.js';
import Swal from 'sweetalert2';

const addItem = () => {
  const score = document.getElementById('score');
  const user = document.getElementById('user');

  if (score.value === "" || user.value === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'All inputs are mandatory',
    })
  } else if (isNaN(score.value)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Score must be a number',
    })
  } else {
    addScore(score.value, user.value);
  }

};

export default addItem;