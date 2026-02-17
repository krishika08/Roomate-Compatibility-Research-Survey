document.addEventListener("DOMContentLoaded", function () {

    let currentPage = 0;
    const pages = document.querySelectorAll(".form-page");

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = "none";
            if (i === index) {
                page.style.display = "block";
            }
        });
    }

    window.nextPage = function () {

        const inputs = pages[currentPage].querySelectorAll("input[required]");
        let valid = true;

        inputs.forEach(input => {

            if (input.type === "radio") {
                const checked = pages[currentPage].querySelector(
                    `input[name="${input.name}"]:checked`
                );
                if (!checked) valid = false;
            }

            if (input.type === "text" && input.value.trim() === "") {
                valid = false;
            }
        });

        if (!valid) {
            alert("Please fill all required fields.");
            return;
        }

        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    };

    window.prevPage = function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    };

    showPage(currentPage);
});
