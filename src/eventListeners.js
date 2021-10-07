import { getScores } from './handleAPI.js';
import addItem from './addItem.js';

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
