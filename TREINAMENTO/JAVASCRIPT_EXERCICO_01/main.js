const circulo = document.querySelector('.circulo');

function seguirMouse(event) {
  const posicaoMouse = {
    eixoX: event.x,
    eixoY: event.y,
  }
  circulo.style.top = `${posicaoMouse.eixoY}px`;
  circulo.style.left = `${posicaoMouse.eixoX}px`;
}

window.addEventListener('mousemove', seguirMouse);