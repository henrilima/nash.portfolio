var def = 0;
setTimeout(() => window.scrollTo(0, 0), 100);

document.getElementById("nav").onclick = () => {
    if (def === 0) {
        def = 1;
        document.getElementById("icon").style.animation =
            "spin 0.6s ease-in-out forwards";
        document.getElementById("nav-display").style.animation =
            "appears 0.6s ease-in-out forwards";
    } else {
        def = 0;
        document.getElementById("icon").style.animation =
            "reverseSpin 0.6s ease-in-out forwards";
        document.getElementById("nav-display").style.animation =
            "reverseAppears 0.6s ease-in-out forwards";
    }
};

document.getElementById("1").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "HTML");
document.getElementById("2").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "CSS");
document.getElementById("3").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "SASS/SCSS");
document.getElementById("4").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "JavaScript");
document.getElementById("5").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "Bootstrap");
document.getElementById("6").onmouseenter = () =>
    (document.getElementById("visualizer").innerHTML = "MongoDB");

document.getElementById("avatar").onmouseenter = () =>
    (document.getElementById("avatar").style.transform = "scale(1.15)");
document.getElementById("avatar").onmouseleave = () =>
    (document.getElementById("avatar").style.transform = "scale(1)");

document.getElementById("instagram").onmouseenter = () =>
    (document.getElementById("instagram").style.transform = "scale(1.15)");
document.getElementById("instagram").onmouseleave = () =>
    (document.getElementById("instagram").style.transform = "scale(1)");
document.getElementById("github").onmouseenter = () =>
    (document.getElementById("github").style.transform = "scale(1.15)");
document.getElementById("github").onmouseleave = () =>
    (document.getElementById("github").style.transform = "scale(1)");
document.getElementById("whatsapp").onmouseenter = () =>
    (document.getElementById("whatsapp").style.transform = "scale(1.15)");
document.getElementById("whatsapp").onmouseleave = () =>
    (document.getElementById("whatsapp").style.transform = "scale(1)");

function scrollToTop() {
    window.scrollTo(0, 0);
};