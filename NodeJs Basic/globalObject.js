const int = setInterval(() => {
    console.log("set interval ");
}, 1000);

setTimeout(() => {
    console.log("global time ");
    clearInterval(int);
}, 3000);
console.log(__dirname);
console.log(__filename);
console.log(document.querySelector);

