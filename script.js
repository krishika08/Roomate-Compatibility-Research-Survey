let currentPage = 0;
const pages = document.querySelectorAll(".form-page");
const form = document.getElementById("multiStepForm");

// Show page
function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove("active");
        if (i === index) {
            page.classList.add("active");
        }
    });
}

// Validate current page before moving next
function nextPage() {

    const inputs = pages[currentPage].querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
        if (input.type === "radio") {
            const name = input.name;
            const checked = pages[currentPage].querySelector(`input[name="${name}"]:checked`);
            if (!checked) valid = false;
        } else if (!input.value) {
            valid = false;
        }
    });

    if (!valid) {
        alert("Please complete all required fields before continuing.");
        return;
    }

    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

// Previous page
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Show thank you after submit
form.addEventListener("submit", function() {

    setTimeout(() => {
        form.style.display = "none";
        const thankYou = document.createElement("div");
        thankYou.classList.add("thank-you");
        thankYou.innerHTML = "🎉 Thank you! Your response has been submitted successfully.";
        thankYou.style.display = "block";
        document.querySelector(".container").appendChild(thankYou);
    }, 800);
});
