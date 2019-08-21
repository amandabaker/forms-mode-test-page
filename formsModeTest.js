
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


// Widgets

// Button
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



