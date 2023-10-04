export function setStyleElement(objElement) {
    if (objElement.byID) {
        objElement.element.setAttribute('class', objElement.style)
    } else {
        const [...element] = objElement.element
        if (typeof objElement.element === 'string') {
            element.forEach(e => {
                e.attributes.getNamedItem('class').value += ` ${objElement.style}`
            })

        } else {
            if (objElement.element.length === 1) {
                element.forEach(e => {
                    e.attributes.getNamedItem('class').value += ` ${objElement.style[0]}`
                })
            } else {
                element.forEach((e, i) => {
                    e.attributes.getNamedItem('class').value += ` ${objElement.style[i]}`
                })
            }
        }
    }
}