const updateTable = (scores) => {
        
    removeItems();
    
    scores.result.forEach(element => {

        const list = document.getElementById('list');
        const item = document.createElement('li');
        const name = document.createElement('strong');
        
        item.setAttribute('class','list-group-item');
        name.appendChild(document.createTextNode(element.user + ": "));

        item.append(name);
        item.appendChild(document.createTextNode(element.score));

        list.append(item);
    });
}

const removeItems = () => {

    const list = document.getElementById('list');

    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
}

export { updateTable }