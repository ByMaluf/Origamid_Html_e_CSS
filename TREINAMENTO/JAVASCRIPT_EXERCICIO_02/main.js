const links = document.querySelectorAll('nav a');

links.forEach(ativarLink);

function ativarLink(link) {
    if (link.href === window.location.href) {
        link.style.backgroundColor = 'black';
        link.style.color = 'white';
    }
}

