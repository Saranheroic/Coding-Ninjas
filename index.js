// datePicker.js

// Initialize Flatpickr on the input with id 'date'
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        
        dateFormat: "y-d-m"
    });
});
