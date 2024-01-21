# Anotações - Origamid

## HTML & CSS Insights

### Tag `<img>`

- Por padrão, a tag `<img>` é tratada como `display: inline-block`.

### Propriedade `margin`

- A propriedade `margin` refere-se ao espaçamento externo do **documento** e não está relacionada ao modo de escrita (`writing-mode: vertical-rl;`).

- A propriedade `margin` pode colidir com outras, prevalecendo sempre a de maior valor.
  - A colisão **NÃO** se aplica quando se utiliza das tecnologias de Display `Grid` e `Flex`.

### Propriedade `div`

- Por padrão, o `width` de uma `<div>` é definido como `auto`.

### Propriedade `display: grid`

- Por padrão, uma grid tem apenas `uma coluna`.

#### Propriedades e Valores de Alinhamento

##### Propriedades:

- `align-content`: Alinhamento na VERTICAL.

- `justify-content`: Alinhamento na HORIZONTAL.

- `place-content`: Atalho para `align-content` e `justify-content`, **_respectivamente_**. Se apenas um valor for especificado, ele valerá para ambos.

  - Para esses tipos de alinhamento, deve haver espaço sobrando, caso contrário, eles não terão efeito.

##### Valores:

- `_start_`: Alinhado ao início - esquerda para a direita.

- `_center_`: Alinhado ao centro - requer espaço sobrando.

- `_end_`: Alinhado ao final.

- `_stretch_`: Valor `padrão` - estender o máximo possível.

- `_space-between_`: Distribui o espaço igualmente entre os elementos. Cada elemento é separado pelo mesmo espaço, com o primeiro elemento alinhado ao início e o último ao final.

- `_space-around_`: Distribui o espaço ao redor de cada elemento. Diferente de _space-between_, aqui o espaço é distribuído igualmente ao redor de cada elemento, resultando em um espaço meio maior nas extremidades.

- `_space-evenly_`: Distribui o espaço de forma igual entre e ao redor dos elementos. Todos os espaços - entre os elementos e entre os elementos e as bordas - são iguais.
