function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    const hexColor = randomColor.toString(16).padStart(6, '0');
    return `#${hexColor}`;
}
let count = parseInt(sessionStorage.getItem("timer")) || 0;

function counter() {
    const secondi = document.getElementById("secondi");
    count++;
    sessionStorage.setItem("timer", count);
    secondi.innerText = count;
    secondi.style.color = getRandomColor();
}

window.onload = function () {
    setInterval(counter, 1000);
}