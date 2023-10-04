export function promiseGetElement(objElement) {
    return new Promise((resolve, reject) => {
        try {
            if (!objElement.byID) {
                objElement.element = document.getElementsByClassName(objElement.element)
            } else {
                objElement.element = document.getElementById(objElement.element)
            }
            return resolve(objElement)
        } catch (err) {
            reject(err)
        }
    })
}