let currentPage = 0;

const pages = document.querySelectorAll(".form-page");
const progress = document.getElementById("progress");

function showPage(index) {

    pages.forEach((page, i) => {
        page.classList.remove("active");
        if (i === index) {
            page.classList.add("active");
        }
    });

    // Update progress bar
    let percent = ((index + 1) / pages.length) * 100;
    progress.style.width = percent + "%";
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Initialize first page
showPage(currentPage);
