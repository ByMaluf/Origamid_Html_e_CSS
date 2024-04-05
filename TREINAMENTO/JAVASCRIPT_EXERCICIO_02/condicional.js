/* 
1 - Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console.
*/

const botao = document.querySelector('button');
const div = document.querySelector('div');

if (botao) {
  botao.addEventListener('click', somar);

  function somar() {
    let numero = +div.innerText;
    if (numero < 10) {
      div.innerText = ++numero;
    }
    if (numero >= 10) {
      console.log('Para no 10 irmão');
    }
  }
}



