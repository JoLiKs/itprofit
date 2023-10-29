export const send = (msg, url, method) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, 'https://'+url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            console.log(xhr.responseText);
        }
    };
    xhr.send();
}
