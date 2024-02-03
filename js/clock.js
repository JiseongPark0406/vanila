const clcok = document.querySelector("h2.clock")

function sayhello(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
clcok.innerText = `${hours}:${minutes}:${seconds}`
}
sayhello();
setInterval(sayhello, 1000);

