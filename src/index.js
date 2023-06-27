document.addEventListener("mousemove", function (event) {
    let ball = document.getElementById("ball");
    let x = event.clientX;
    let y = event.clientY;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
});

window.addEventListener("scroll", function () {
    let ball = document.getElementById("ball");
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    ball.style.transform = "translate(" + scrollX + "px, " + scrollY + "px)";
});




