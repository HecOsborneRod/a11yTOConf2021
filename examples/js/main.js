document.querySelectorAll('.see-more').forEach((button) => {
    button.addEventListener('click', (e) => { 
        let ul = e.currentTarget.previousElementSibling;
        ul.classList.toggle('expanded');
        ul.setAttribute('aria-expanded', ul.getAttribute('aria-expanded') == 'false');
    });
});

document.querySelectorAll('.card__button').forEach((button) => {
    button.addEventListener('click', (e) => { 
        let image = (button.closest('.card')).querySelector('.card__img');
        image.style.setProperty('--image-color', button.getAttribute('data-color'));
        button.closest('.card').querySelector('.card__button.selected').classList.remove('selected');
        button.classList.add('selected');
    })
});

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};