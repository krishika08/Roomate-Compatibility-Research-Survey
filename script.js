document.addEventListener("DOMContentLoaded", function () {

    let currentPage = 0;
    const pages = document.querySelectorAll(".form-page");

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active");
            if (i === index) {
                page.classList.add("active");
            }
        });
    }

    window.nextPage = function () {
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
