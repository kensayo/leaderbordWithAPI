import refreshList from './handleRefresh.js';
import handleSubmit from './handleSubmit.js';

const addListeners = () => {
  const updateButton = document.getElementById('update');
  const submitButton = document.getElementById('submit');

  updateButton.addEventListener('click', () => {
    refreshList();
  });

  submitButton.addEventListener('click', () => {
    handleSubmit();
  });
};

export default addListeners;
