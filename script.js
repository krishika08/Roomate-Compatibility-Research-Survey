const form = document.getElementById("roomieForm");
const submitBtn = document.getElementById("submitBtn");
const formSection = document.getElementById("formSection");
const thankYouSection = document.getElementById("thankYouSection");
const newResponseBtn = document.getElementById("newResponseBtn");
const progressBar = document.getElementById("progressBar");

let submitted = false;

// Progress Logic
form.addEventListener("input", () => {
  let progress = 0;

  if (document.getElementById("studyInput").value.trim() !== "") progress += 33;
  if (document.querySelector('input[name="entry.682599904"]:checked')) progress += 33;
  if (document.querySelector('input[name="entry.2078507498"]:checked')) progress += 34;

  progressBar.style.width = progress + "%";
});

// Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  const errors = document.querySelectorAll(".error");
  errors.forEach(err => err.textContent = "");

  const study = document.getElementById("studyInput");
  const living = document.querySelector('input[name="entry.682599904"]:checked');
  const shared = document.querySelector('input[name="entry.2078507498"]:checked');

  if (study.value.trim() === "") {
    study.nextElementSibling.textContent = "This field is required";
    valid = false;
  }

  if (!living) {
    document.querySelector("#livingGroup").nextElementSibling.textContent = "Please select one option";
    valid = false;
  }

  if (!shared) {
    document.querySelector("#sharedGroup").nextElementSibling.textContent = "Please select one option";
    valid = false;
  }

  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";
  submitted = true;
  form.submit();
});

// Thank You Trigger
document.querySelector("iframe").addEventListener("load", function () {
  if (submitted) {
    formSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
    progressBar.style.width = "100%";
    form.reset();
    submitted = false;
  }
});

newResponseBtn.addEventListener("click", function () {
  thankYouSection.classList.add("hidden");
  formSection.classList.remove("hidden");
  progressBar.style.width = "0%";
  submitBtn.disabled = false;
  submitBtn.innerText = "Submit";
});
