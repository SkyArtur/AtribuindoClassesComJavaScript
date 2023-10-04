import {promiseGetElement} from "./promiseGetElement.js"
import {setStyleElement} from "./setStyleElement.js"

export function factoryElement(element, style, byID = false){
    promiseGetElement({element, style, byID})
        .then(setStyleElement)
}
