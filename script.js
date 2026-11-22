document.addEventListener("DOMContentLoaded", function () {

    const registrationForm = document.querySelector(".registration-form");

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("🎉 Congratulations! You have successfully registered for AURORA '26!");

        registrationForm.reset();

    });

});