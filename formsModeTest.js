
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
const setupList = () => {
    const list = document.getElementById('list-div');
    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement('div');
        listItem.tabIndex = -1;
        setRole(listItem, 'listitem');
        listItem.textContent = `List item ${i}`;
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
        list.appendChild(listItem);
    }
    list.index = 0;
    list.children[0].tabIndex = list.index;
}
setupList();