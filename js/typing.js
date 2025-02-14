document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById("typing-effect");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add("show");
                observer.disconnect(); // Evita que a animação reinicie
            }
        });
    });

    observer.observe(target);
});