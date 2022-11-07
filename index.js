
let eleCount = document.getElementById("count-el");

let count = 0;

function increment() {
    count += 1;
    console.log(count);
    eleCount.innerText = count;
}
