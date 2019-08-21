
// Helpers
const onInvokeButton = (element, callback) => {
  element.addEventListener('click', callback);
  element.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      callback(event);
      event.preventDefault();
    }
  });
}

const setRole = (element, role) => {
  element.setAttribute('role', role);
};


// Widgets

// Button
const setupButton = () => {
  const button = document.getElementById('button-div');
  button.textContent = 'Test';
  const toggleButton = () => {
    if (button.textContent === 'Test') {
      button.textContent = 'Untest';
    } else {
      button.textContent = 'Test';
    }
  };
  onInvokeButton(button, toggleButton);
};
setupButton();


// Document Structure Roles
const setupList = (id) => {
  const list = document.getElementById(id);
  const listItems = Array.from(list.children);
  listItems.forEach((listItem, index) => {
    listItem.tabIndex = -1;
    listItem.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const offset = event.key === 'ArrowUp' ? -1 : 1;
        const newIndex = list.index + offset;
        if (newIndex < 0 || newIndex >= list.children.length)
          return;

        const oldElement = list.children[list.index];
        oldElement.tabIndex = -1;
        const newElement = list.children[newIndex];
        newElement.tabIndex = 0;
        newElement.focus();
        list.index = newIndex;
        event.preventDefault();
      }
    });
    onInvokeButton(listItem, (event) => {
      // unselect old, and select new
      list.children[list.index].tabIndex = -1;
      list.children[index].tabIndex = 0;
      list.children[index].focus();
      list.index = index;
      event.preventDefault();
    });
  });
  list.index = 0;
  list.children[0].tabIndex = 0;
}

setupList('list-div');
setupList('spans-list-div');
