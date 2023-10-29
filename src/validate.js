export const validate = (elements) => {
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i].value)
        if (elements[i].value.trim() === '') {
            return {"code": 1, "msg": "Все поля обязательны к заполнению"}
        }
    }
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!elements[1].value.match(pattern)) {
        return {"code": 2, "msg": "Поле email должно содержать конкретный адрес электронной почты"}
    }
    return {"code": 0, "msg": "Success"}
}

