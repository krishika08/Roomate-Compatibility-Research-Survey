document.addEventListener("DOMContentLoaded", function () {

    let currentPage = 0;
    const pages = document.querySelectorAll(".form-page");
    const progress = document.getElementById("progress");
    const form = document.getElementById("multiStepForm");

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active");
            if (i === index) {
                page.classList.add("active");
            }
        });

        // Update Progress Bar
        let percent = ((index + 1) / pages.length) * 100;
        progress.style.width = percent + "%";

        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Validate current page before moving next
    function validatePage(pageIndex) {
        const currentFields = pages[pageIndex].querySelectorAll("input[required]");
        
        for (let field of currentFields) {

            if (field.type === "radio") {
                const name = field.name;
                const checked = pages[pageIndex].querySelector(`input[name="${name}"]:checked`);
                if (!checked) {
                    alert("Please answer all required questions before continuing.");
                    return false;
                }
            } else {
                if (!field.value.trim()) {
                    alert("Please fill all required fields before continuing.");
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

    // Submit Animation
    form.addEventListener("submit", function (e) {

        // Optional success message before submission
        alert("Thank you! Your response has been submitted successfully 🎉");

        // Optional: redirect after 1 second
        setTimeout(() => {
            window.location.href = "thankyou.html"; 
            // Remove above line if you don’t want redirect
        }, 1000);

    });

    // Initialize first page
    showPage(currentPage);

});
