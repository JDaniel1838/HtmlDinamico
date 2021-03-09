

document.addEventListener("DOMContentLoaded", (e) => {
    const incluideHTML = (el, url) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e) => {
            if (xhr.readyState !== 4) return;


        if (xhr.status >= 200 && xhr.status < 300) {
            el.outerHTML = xhr.responseText;
            
        }else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
            el.outerHTML = `<div><p>Error: ${xhr.status}: ${message}</p></div>`
        }
        });

        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
        xhr.send();
    }

    //Por cada data include ejecuta la funcion includeHTML
    document.querySelectorAll("[data-include]").forEach(el => incluideHTML(el, el.getAttribute("data-include")));
});


 
