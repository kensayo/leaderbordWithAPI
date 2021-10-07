import * as API from './handleAPI';

const addListeners = () => {
  const updateButton = document.getElementById('update');
  const submitButton = document.getElementById('submit');

  updateButton.addEventListener('click', () => {
    API.getScores();
  });

  submitButton.addEventListener('click', () => {
    API.addScore("Viviana", "150");
  });
};

export default addListeners;
