document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const departmentField = document.getElementById("department");
    const emailField = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        // Clear previous error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(error) {
            error.remove();
        });

        let isValid = true;

        if (nameField.value.trim() === "") {
            isValid = false;
            showError(nameField, "Name is required");
        }

        if (departmentField.value.trim() === "") {
            isValid = false;
            showError(departmentField, "Department is required");
        }

        if (emailField.value.trim() === "") {
            isValid = false;
            showError(emailField, "Email is required");
        } else if (!validateEmail(emailField.value.trim())) {
            isValid = false;
            showError(emailField, "Invalid email format");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(field, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.style.color = "red";
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
