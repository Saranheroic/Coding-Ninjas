// datePicker.js

// Initialize Flatpickr on the input with id 'date'
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        dateFormat: "d-m-Y" // Set the desired format
    });
});
