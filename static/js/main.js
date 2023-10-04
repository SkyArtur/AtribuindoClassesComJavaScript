import {factoryElement} from "./modules/factoryStyleElement.js"



// atribuindo o mesmo estilo em vários elementos de mesma classe utilizando string como atributo.
factoryElement(
    'teste',
    'form-control bg-dark'
)

factoryElement(
    'label',
    'form-label w-100'
)
// atribuindo o mesmo estilo em vários elementos de mesma classe utilizando um Array unitário.
factoryElement(
    'teste2',
    ['form-control bg-warning']
)

// atribuindo estilos diferentes em vários elementos de mesma classe.
factoryElement(
    'teste3',
    ['form-control bg-success', 'form-control bg-primary']
)

// atribuindo estilo em um elemento pelo ID,
factoryElement(
    'teste7',
    'form-control bg-danger',
    true
)
