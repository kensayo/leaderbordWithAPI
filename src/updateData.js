const removeItems = () => {
  const list = document.getElementById('list');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const updateTable = (scores) => {
  removeItems();

  scores.result.forEach((element, i) => {
    const list = document.getElementById('list');
    const item = document.createElement('li');
    const name = document.createElement('strong');

    item.setAttribute('class', 'list-group-item');
    name.appendChild(document.createTextNode(`${element.score}: `));

    if (i % 2 === 0) {
      item.classList.add('bg-light');
    }

    item.append(name);
    item.appendChild(document.createTextNode(element.user));

    list.append(item);
  });
};

export default updateTable;
