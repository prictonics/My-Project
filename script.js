document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#permit-questionnaire")

  const message = document.querySelector("#form-message")

  form.addEventListener("submit", (event) => {
     event.preventDefault();

     message.innerHTML =
     "Thank you for submitting the General Adoption Permit Questionnaire.";

     message.style.display = "block";
     message.style.color = "green";
     message.style.fontSize = "18px";

     form.reset();

     window.location.href = "../User_Data/user_information.html"


  });
});