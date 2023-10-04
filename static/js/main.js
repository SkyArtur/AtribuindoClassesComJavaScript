import {factoryElement} from "./modules/factoryStyleElement.js"
import {promiseGetElement} from "./modules/promiseGetElement.js"
import {setStyleElement} from "./modules/setStyleElement.js"


// atribuindo o mesmo estilo em vários elementos de mesma classe utilizando string como atributo.
promiseGetElement(factoryElement(
    'teste',
    'form-control bg-dark'
)).then(setStyleElement)

promiseGetElement(factoryElement(
    'label',
    'form-label w-100'
)).then(setStyleElement)

// atribuindo o mesmo estilo em vários elementos de mesma classe utilizando um Array unitário.
promiseGetElement(factoryElement(
    'teste2',
    ['form-control bg-warning']
)).then(setStyleElement)

// atribuindo estilos diferentes em vários elementos de mesma classe.
promiseGetElement(factoryElement(
    'teste3',
    ['form-control bg-success', 'form-control bg-primary']
)).then(setStyleElement)

// atribuindo estilo em um elemento pelo ID,
promiseGetElement(factoryElement(
    'teste7',
    'form-control bg-danger',
    true
)).then(setStyleElement)
