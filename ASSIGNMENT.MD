# Assignment

### Construir uma aplicação para consulta de informação from the SpaceX API (https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs)


## **PARTE 1**

### **Construção de uma aplicação com 2 entradas de menu diferentes**
    1 - launches
    2 - rockets

### 1 - Listar todos os SpaceX launches (https://api.spacexdata.com/v4/launches)
    - os launches devem ser mostrados em formato card (utilizar material-ui) e com PELO MENOS a seguinte
    informação:
        - launch number
        - mission name
        - mission year
        - success or failure
        - name of the rocket
        - image

### 2 - Listar todos os Rockets (https://api.spacexdata.com/v4/rockets)
    - os rockets devem ser mostrados em formato card (utilizar material-ui) e com PELO MENOS a seguinte
    informação:
        - name
        - if it is active
        - cost per launch
        - country
        - image


## **PARTE 2**

### **Adicionar funcionalidade de navegação, ao clicar nos cards tanto dos launches como dos rockets será mostrado o detalhe do mesmo**

- url launches: (https://api.spacexdata.com/v4/launches/{{id}})
- url rockets: (https://api.spacexdata.com/v4/rockets/{{id}})

O detalhe deve conter toda a informação ja presente no card e mais a que
acharem relevante ou interessante (fica ao vosso critério)

### O detalhe pode ser mostrado utilizando qualquer uma das seguintes maneiras:
    - MODAL -> com opção de fecho
    - OVERLAY -> com opção de fecho
    - NEW ROUTE -> com opção de voltar para tras

### Informação Adicional do rocket (BONUS QUEST)
    - O detalhe do rocket deve obrigatoriamnte conter o launch a que este pertenceu
    - Ao clicar no launch deve ser mostrada o detalhe do mesmo


## **PARTE 3**

### **Adicionar filtragem, deve ser possivel filtrar as listagens**

### Filtros Launches
    - number (input)
    - success or failure (checkbox)

### Filtros Rockets
    - name (input)
    - if it is asctive (checkbox)
    - max cost per launch


## **PARTE 4**

### **Criar Favoritos**

- Launches e Rockets terão listagens de favoritos diferentes
- os cards terão um simbolo que representa que são favoritos (ao criterio do dev)
- apenas é possivel adicionar e remover dos favoritos no detalhe do mesmo

### **Adicionar filtro as listagens para ver apenas os favoritos**
- Deve ser possivel filtrar nas listagens para mostrar apenas os favoritos


## **PARTE 5**

### **ERROR HANDLING**
- Chamadas a API do detalhe de rockets devem conter um RNG que irá fazer a chamada falhar 1/3 das vezes
- Isto pode ser implementado com um MATH.RANDOM entre 1 e 3 , e utilizando um url inexistente apenas para dar erro de 404
- A apresentação do erro fica ao critério do developer

-------------------------------------------------------------------------------------


### **TECNOLOGIAS A UTILIZAR**
 - AXIOS
 - REDUX
 - REACT-ROUTER
 - TYPESCRIPT
 - MATERIAL-UI
 - SCSS
 - HOOKS (WHEN POSSIBLE)

# **NOTAS**
 - A informação não necessita ser persistente, ou seja no momento de refresh da aplicação
 tudo é resetado e volta do estado inicial
 - As filtragens são feitas sobre a informação que ja está do nosso lado, não é feita
 atraves de params para a API
 - Os Favoritos são apenas locais e ficam guardados na store do FE
 - Tanto as filtragens como os favoritos desaparecem em refresh
