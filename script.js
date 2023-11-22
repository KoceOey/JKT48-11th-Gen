document.addEventListener('DOMContentLoaded', function () {
    const contentElements = document.querySelectorAll('.member');
    let currentContentIndex = 0;

    function showContent(index) {
        contentElements.forEach((content, i) => {
            if (i === index) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function () {
        currentContentIndex = (currentContentIndex - 1 + contentElements.length) % contentElements.length;
        showContent(currentContentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentContentIndex = (currentContentIndex + 1) % contentElements.length;
        showContent(currentContentIndex);
    });

    // Show the initial content
    showContent(currentContentIndex);
});