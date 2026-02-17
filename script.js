const form = document.getElementById("roomieForm");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("formMessage");

let submitted = false;

document.querySelector("iframe").addEventListener("load", function () {
  if (submitted) {
    message.textContent = "Form submitted successfully 🎉";
    message.className = "success";
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
    submitted = false;
  }
});

form.addEventListener("submit", function () {
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";
  message.textContent = "";
  submitted = true;
});
