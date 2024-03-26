const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');

console.log(nav);
console.log(produtos);
console.log(produtos.href);
//console.log(produtos.remove()); //Remove complemente o elemento do conteúdo
console.dir(nav)

nav.style.cssText = `
  background-color: black;
  padding: 1rem;
  border: 10px solid pink;
`;

produtos.style.cssText = `
  color: red;
  text-decoration: none;
  font-family: Arial;
  padding: 20px;
  border-radius: 4px;
`;

produtos.style.backgroundColor = 'yellow';

nav.classList.add('ativo')