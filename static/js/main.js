import {factoryElement} from "./modules/factoryStyleElement.js"
import {promiseGetElement} from "./modules/promiseGetElement.js"
import {setStyleElement} from "./modules/setStyleElement.js"


// atribuindo o mesmo estilo em vátios elementos de mesma classe.
promiseGetElement(factoryElement(
    'teste',
    'form-control bg-dark'
)).then(setStyleElement)

// atribuindo estilos diferentes em vários elementos de mesma classe.
promiseGetElement(factoryElement(
    'test2',
    ['form-control bg-success', 'form-control bg-primary']
)).then(setStyleElement)

// atribuindo estilo em um elemento pelo ID,
promiseGetElement(factoryElement(
    'teste3',
    'form-control bg-danger',
    true
)).then(setStyleElement)