// datePicker.js

// Initialize Flatpickr on the input with id 'date'
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        
        dateFormat: "y-d-m"
    });
});
const namesList = document.getElementById('names-list');
const names = ['Alice', 'Bob', 'Charlie', 'David'];
const nameItems = names.map(name => `<li>${name}</li>`);
namesList.innerHTML = nameItems.join('');