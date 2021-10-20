document.querySelectorAll('.see-more').forEach((button) => {
    button.addEventListener('click', (e) => { 
        let ul = e.currentTarget.previousElementSibling;
        ul.classList.toggle('expanded');
        ul.setAttribute('aria-expanded', ul.getAttribute('aria-expanded') == 'false');
    });
});