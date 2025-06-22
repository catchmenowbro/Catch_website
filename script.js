
const lines = [
    "Is your name Google? Because you’ve got everything I’m searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you made of stardust? Because every time I see you, my universe lights up.",
    "Even the moon feels shy when you smile.",
    "If beauty were a crime, you'd be serving a life sentence."
];

let index = 0;
const lineElement = document.getElementById("line");

function showLine() {
    lineElement.textContent = lines[index];
    index = (index + 1) % lines.length;
}

setInterval(showLine, 3000);
showLine();
