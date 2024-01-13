let registrationForm = document.getElementById("registrationForm");
let confirmationMessage = document.getElementById("confirmationMessage");


registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    registrationForm.style.display = "none";

    confirmationMessage.style.display = "block";
});
