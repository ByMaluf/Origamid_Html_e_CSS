//Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink)

//Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search)
function ativarProduto(parametros) {
  const elemento = document.getElementById(parametros)
  if (elemento) {
    elemento.checked = true
  }
}
parametros.forEach(ativarProduto)

//Ativar Perguntas
const perguntas = document.querySelectorAll('.perguntas dl div');

perguntas.forEach(pergunta => {
  const botoes = pergunta.querySelectorAll('button');
  const dd = pergunta.querySelector('dd');
  console.log(dd)
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const aria = botao.getAttribute('aria-controls');
      const ddId = dd.getAttribute('id');
      if (aria === ddId) {
        dd.classList.toggle('ativa')
      }
      console.log('O botão com aria-controls ' + aria + ' foi clicado!');
      console.log('O ID da tag <dd> é: ' + ddId);
    });
  });
});




