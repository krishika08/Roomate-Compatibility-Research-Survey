document.addEventListener("DOMContentLoaded", function () {

    let currentPage = 0;
    const pages = document.querySelectorAll(".form-page");
    const progress = document.getElementById("progress");
    const form = document.getElementById("multiStepForm");
    const container = document.querySelector(".container");

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active");
            if (i === index) {
                page.classList.add("active");
            }
        });

        let percent = ((index + 1) / pages.length) * 100;
        progress.style.width = percent + "%";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function validatePage(pageIndex) {
        const requiredFields = pages[pageIndex].querySelectorAll("input[required]");

        for (let field of requiredFields) {

            if (field.type === "radio") {
                const checked = pages[pageIndex].querySelector(`input[name="${field.name}"]:checked`);
                if (!checked) {
                    alert("Please answer all required questions.");
                    return false;
                }
            } else {
                if (!field.value.trim()) {
                    alert("Please fill all required fields.");
                    return false;
                }
            }
        }

        return true;
    }

    window.nextPage = function () {
        if (validatePage(currentPage)) {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        }
    };

    window.prevPage = function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    };

    // THANK YOU MESSAGE (No redirect)
    form.addEventListener("submit", function (e) {

        e.preventDefault(); // Stop default submission

        // Send form data to Google
        fetch(form.action, {
            method: "POST",
            mode: "no-cors",
            body: new FormData(form)
        });

        // Replace form with thank you message
        container.innerHTML = `
            <div class="thank-you">
                <h1>🎉 Thank You!</h1>
                <p>Your response has been submitted successfully.</p>
                <p>We appreciate your time and participation.</p>
            </div>
        `;
    });

    showPage(currentPage);
});
