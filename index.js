window.addEventListener('scroll', function() {
    const scrollContent = document.getElementById('scroll-content');
    if (window.scrollY > 200) { // Adjust the value as needed
        scrollContent.classList.remove('hidden');
    }
});