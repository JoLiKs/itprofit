import './styles/main.scss'
import {send} from './ajax'
import {modal} from './modal'

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
h1.innerHTML = 'Форма обратной связи'
const name = create('input', main)
name.placeholder = 'Ваше имя'
const email = create('input', main)
email.type = 'email'
email.placeholder = 'Ваш E-mail'
const phone = create('input', main)
phone.placeholder = 'Ваш телефон'
const msg = create('textarea', main)
msg.placeholder = 'Ваше сообщение'
const btns = create('div', container)
btns.className = 'btns'
const btn_send = create('button', btns)
btn_send.innerHTML = 'Отправить'
btn_send.className = 'glow-on-hover'

btn_send.onclick = (e) => {
    //send(msg.innerHTML, 'http://localhost','POST')

}
const btn_modal = create('button', btns)
btn_modal.innerHTML = 'Модальное окно'
btn_modal.className = 'glow-on-hover'

btn_modal.onclick = (e) => {
    container.className = 'blur'
    root.append(modal)
}

