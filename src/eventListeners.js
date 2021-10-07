import { getScores } from './handleAPI';
import addItem from './addItem';

const addListeners = () => {
  const updateButton = document.getElementById('update');
  const submitButton = document.getElementById('submit');

  getScores();

  updateButton.addEventListener('click', () => {
    getScores();
  });

  submitButton.addEventListener('click', () => {
    addItem();
  });
};

export default addListeners;
