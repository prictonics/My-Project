document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#user-form");
  const paymentButton = document.getElementById("payment-button");
  const message = document.querySelector("#application-form");

  form.addEventListener("submit", (event) => {
     event.preventDefault();

     message.innerHTML =
     "Thank you for submitting your Adoption form.";

     message.style.display = "block";
     message.style.color = "green";
     message.style.fontSize = "18px";
     
     paymentButton.hidden = false;
  });

  paymentButton.addEventListener("click", () => {
     window.location.href = "payment.html";
  });

     form.reset();


});
