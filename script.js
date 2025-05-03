const button = document.getElementById("open");
const message = `
ควายอั้ม
`;
const target = document.getElementById("M1");
const Music = document.getElementById("bgMusic");



button.addEventListener("click", () => {
    button.remove();
    Music.volume = 0.3;
    Music.play();
    target.innerHTML = "";
    let index = 0;

    const interval = setInterval(() => {
        target.innerHTML += message.charAt(index);
        index++;
        if (index === message.length) {
            clearInterval(interval);
        }
    }, 100);
});
