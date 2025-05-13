
document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop, 
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});

