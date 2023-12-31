import {clear_inps} from './index'

export const send = (data, url, method) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, 'http://'+url, true);

    xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && JSON.parse(xhr.response).status === "success") {
            clear_inps()
            console.log(JSON.parse(xhr.response).message)
        }
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400 && JSON.parse(xhr.response).status === "error") {
            console.log(JSON.parse(xhr.response).message)
        }
    };
    xhr.send(`name=${data[0]}&email=${data[1]}&phone=${data[2]}&msg=${data[3]}`);
}
