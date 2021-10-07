import Swal from 'sweetalert2';
import { addScore } from './handleAPI.js';

const addItem = () => {
  const score = document.getElementById('score');
  const user = document.getElementById('user');
  if (score.value === '' || user.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'All inputs are mandatory',
    });
  } else {
    addScore(score.value, user.value);
  }
};

export default addItem;