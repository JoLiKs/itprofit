import "./styles/main.scss"
import {send} from "./ajax"
import {modal} from "./modal"
import Inputmask from "inputmask"
import {validate} from "./validate"

const root = document.querySelector('#root')


export const create = (el, parent) => {
    let elem = document.createElement(el.toString())
    parent.append(elem)
    return elem
}
export const container = create('div', root)

const main = create('div', container)
main.className = 'main'
const h1 = create('h1', main)
h1.innerText = 'Форма обратной связи'
const name = create('input', main)
name.placeholder = 'Ваше имя'
const email = create('input', main)
email.type = 'email'
email.placeholder = 'Ваш E-mail'
const phone = create('input', main)
phone.placeholder = 'Ваш телефон'
const im = new Inputmask("+999 999999999");
im.mask(phone);
const msg = create('textarea', main)
msg.placeholder = 'Ваше сообщение'
const label_error = create('div', main)
label_error.className = 'label_error'
const btns = create('div', container)
btns.className = 'btns'
const btn_send = create('button', btns)
btn_send.innerText = 'Отправить'
btn_send.className = 'glow-on-hover'
btn_send.onclick = () => {
    const valid = validate([name, email, phone, msg])
    if (valid.code !== 0) {
        label_error.style.visibility = 'visible'
        label_error.innerText = valid.msg
        return
    }
    label_error.innerText = ''
    label_error.style.visibility = 'hidden'
    send([name.value, email.value, phone.value, msg.innerText], 'localhost:9090/api/registration/','POST')

}
const btn_modal = create('button', btns)
btn_modal.innerText = 'Модальное окно'
btn_modal.className = 'glow-on-hover'

btn_modal.onclick = () => {
    container.className = 'blur'
    root.append(modal)
}
export const clear_inps = () => {
    name.value = ''
    email.value = ''
    phone.value = ''
    msg.value = ''
}
