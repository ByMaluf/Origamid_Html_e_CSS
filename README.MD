# Anotações - Origamid

<center>
<img src="./md.img/origamid.svg" alt="Origamid" height="50" width="300">
</center>

## HTML & CSS Insights

### Tag `<img>`

- Por padrão, a tag `<img>` é tratada como `display: inline-block`.
- Se a imagem for apenas decorativa deixar o texto alternativo vazio.

### Propriedade `margin`

- A propriedade `margin` refere-se ao espaçamento externo do **documento** e não está relacionada ao modo de escrita (`writing-mode: vertical-rl;`).

- A propriedade `margin` pode colidir com outras, prevalecendo sempre a de maior valor.
  - A colisão **NÃO** se aplica quando se utiliza das tecnologias de Display `Grid` e `Flex`.

### Tag `<div>`

- Por padrão, o `width` de uma `<div>` é definido como `auto`.

### Propriedade `box-shadow`

- A propriedade box-shadow **_NÃO_** aceita valores em porcentagem.

### Propriedade `display: grid`

- Por padrão, uma grid tem apenas `uma coluna`.

#### Propriedades e Valores de Alinhamento

##### Propriedades:

- `align-content`: Alinhamento na VERTICAL.

- `justify-content`: Alinhamento na HORIZONTAL.

- `justify-items`: Define o alinhamento padrão para todos os itens dentro de um container de grid ao longo do eixo da linha (horizontal).

- `align-items`: Define o alinhamento padrão para todos os itens dentro de um container Flex ou grid ao longo do eixo transversal (vertical em Flexbox, horizontal ou vertical em Grid, dependendo da orientação da grid).

- `justify-self`: Define o alinhamento de um item específico dentro de sua área de grid ao longo do eixo da linha (horizontal).

- `align-self`: Define o alinhamento de um item específico dentro de sua área em um container Flex ou grid ao longo do eixo transversal (vertical em Flexbox, horizontal ou vertical em Grid).

- `place-content`: Atalho para `align-content` e `justify-content`, **_respectivamente_**. Se apenas um valor for especificado, ele valerá para ambos.
- `place-items`: Atalho para definir `align-items` e `justify-items` ao mesmo tempo. Se apenas um valor for especificado, ele será aplicado a ambos os eixos.

- `place-self`: Atalho para definir `align-self` e `justify-self` para um item específico. Se apenas um valor for especificado, ele será aplicado a ambos os eixos.

  - Para esses tipos de alinhamento, deve haver espaço sobrando, caso contrário, eles não terão efeito.

##### Valores:

- `_start_`: Alinhado ao início - esquerda para a direita.

- `_center_`: Alinhado ao centro - requer espaço sobrando.

- `_end_`: Alinhado ao final.

- `_stretch_`: Valor `padrão` - estender o máximo possível.

- `_space-between_`: Distribui o espaço igualmente entre os elementos. Cada elemento é separado pelo mesmo espaço, com o primeiro elemento alinhado ao início e o último ao final.

- `_space-around_`: Distribui o espaço ao redor de cada elemento. Diferente de _space-between_, aqui o espaço é distribuído igualmente ao redor de cada elemento, resultando em um espaço meio maior nas extremidades.

- `_space-evenly_`: Distribui o espaço de forma igual entre e ao redor dos elementos. Todos os espaços - entre os elementos e entre os elementos e as bordas - são iguais.

- [Guia Grid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)

### `OUTROS`

# Lighthouse do Google Chrome

O Lighthouse do Google Chrome é uma **ferramenta automatizada de código aberto** usada para melhorar a qualidade das páginas web. Ela ajuda desenvolvedores e webmasters a avaliar e otimizar suas páginas em diversas áreas críticas:

## Performance

- Avalia o tempo de carregamento e a rapidez da interação da página.
- Métricas incluem Largest Contentful Paint, First Input Delay, e Cumulative Layout Shift.

## Acessibilidade

- Verifica a acessibilidade para usuários com deficiências.
- Inclui a avaliação de contraste de cores, etiquetas em formulários, e uso de ARIA.

## Melhores Práticas

- Analisa o uso de práticas recomendadas na web, como HTTPS e formatos de imagem corretos.

## SEO (Search Engine Optimization)

- Orientações para tornar a página mais amigável para mecanismos de busca.
- Verificação de metatags, textos alternativos em imagens, e links acessíveis.

## Progressive Web App (PWA)

- Avalia se o site cumpre os critérios para ser um PWA, incluindo a capacidade de funcionar offline e receber notificações push.

O Lighthouse pode ser usado no Google Chrome (ferramentas de desenvolvedor) ou como uma extensão independente. Ele gera um relatório com pontuações e recomendações para otimização do site, experiência do usuário e visibilidade em mecanismos de busca.

Claro, aqui está o texto sobre `clean-css-cli` formatado com marcação Markdown:

---

# Uso de `clean-css-cli` para Otimização de CSS

<center>
  <img src="./md.img/clean-css.svg" alt="clean-css">
</center>

---

`clean-css-cli` é um pacote no npm (Node Package Manager) que fornece uma ferramenta de linha de comando para otimizar arquivos CSS. Esta ferramenta é uma interface CLI (Command Line Interface) para `clean-css`, uma biblioteca popular para otimização de CSS.

### Características

- **Minificação**: Comprime arquivos CSS, removendo espaços, comentários e otimizando nomes para reduzir o tamanho.
- **Reescrita de URL**: Ajusta ou reescreve URLs dentro dos arquivos CSS.
- **Combinação de Arquivos**: Une múltiplos arquivos CSS em um único arquivo.

### Como Usar

1. **Instalação**:
   ```bash
   npm install -g clean-css-cli
   ```
2. **Execução**:
   ```bash
   cleancss -o arquivo-otimizado.css arquivo-original.css
   ```
   Isso processa `arquivo-original.css` e cria uma versão otimizada `arquivo-otimizado.css`.

### Benefícios

- **Melhoria de Performance**: Reduz o tamanho dos arquivos CSS, acelerando o carregamento do site.
- **Facilidade de Uso**: Pode ser facilmente integrado em processos de build e deployment.

### Considerações

- **Personalização**: Oferece várias opções para diferentes necessidades de otimização.
- **Integração com Ferramentas de Build**: Pode ser usado com Gulp, Webpack, etc., para automação.

`clean-css-cli` é uma ferramenta eficiente para desenvolvedores que buscam otimizar o desempenho do site através da redução do tamanho dos arquivos CSS. Ele oferece funcionalidades úteis como minificação, reescrita de URL e combinação de arquivos, tornando-se um recurso valioso no desenvolvimento front-end.

- [clean-css-cli](https://www.npmjs.com/package/clean-css-cli)

---

# Linha de Comando (CLI)

### Movimentar (Bash)

- **Mover para a pasta sites**:

  ```bash
  cd sites
  ```

- **Mover para a pasta anterior**:

  ```bash
  cd ..
  ```

- **Mover para a pasta sites dentro de Desktop**:

  ```bash
  cd ~/Desktop/sites
  ```

- **Mover para o diretório principal do sistema / home**:

  ```bash
  cd ~
  ```

- **Limpar a tela**:
  ```bash
  clear
  ```

### Listar e Criar (Bash)

- **Listar diretórios e arquivos**:

  ```bash
  ls
  ```

- **Listar diretórios, arquivos, invisíveis e detalhes**:

  ```bash
  ls -all
  ```

- **Criar o diretório site**:

  ```bash
  mkdir site
  ```

- **Criar o arquivo index.html**:
  ```bash
  touch index.html
  ```

### Remover (Bash)

- **Remover o arquivo index.html**:

  ```bash
  rm index.html
  ```

- **Remover o diretório site e todos os arquivos dentro dele**:
  ```bash
  rm -r site
  ```

### Navegação e Auto-Completação

- **Acessar o comando anterior**:

  - Use a seta para cima ou para baixo.

- **Auto-completar o comando**:
  - Pressione a tecla tab.

---

## Pseudo-seletores e Pseudo-elementos no CSS

No desenvolvimento web, especialmente em relação ao CSS, o termo "pseudo" refere-se a "pseudo-classes" e "pseudo-elementos". Estes são usados para definir estados especiais ou subconjuntos de elementos.

### Pseudo-classes

Uma **pseudo-classe** é usada para definir um estado especial de um elemento. Por exemplo:

- `:hover` aplica um estilo quando o usuário passa o mouse sobre um elemento.
- `:active`, `:focus`, e `:visited` são usadas para links.
- `:first-child` seleciona o primeiro filho de um elemento.

**Exemplo:**

```css
a:hover {
  color: red;
}
```

Neste exemplo, a pseudo-classe `:hover` muda a cor de um elemento `<a>` quando ele é passado por um mouse.

### Pseudo-elementos

**Pseudo-elementos** são usados para estilizar partes específicas de um elemento, como:

- `::before` e `::after` inserem conteúdo antes ou depois do conteúdo de um elemento.
- São frequentemente usados para adicionar decorações ou formatar uma parte específica de um texto.

**Exemplo:**

```css
p::first-line {
  font-weight: bold;
}
```

Aqui, o pseudo-elemento `::first-line` aplica um estilo à primeira linha de todos os parágrafos.

### Por que "Pseudo"?

Esses seletores são chamados de "pseudo" porque não selecionam elementos reais no DOM (Document Object Model) de forma direta. Em vez disso, eles se referem a estados, ações ou partes de elementos que não são explicitamente definidos no HTML. Eles permitem que os desenvolvedores apliquem estilos de forma mais dinâmica e específica sem a necessidade de adicionar classes ou IDs adicionais no HTML.

---
