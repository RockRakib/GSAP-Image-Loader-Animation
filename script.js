document.addEventListener("DOMContentLoaded", function () {
    gsap.set("nav", { y: -150 });
    const digit1 = document.querySelector(".digit-1");
    const digit2 = document.querySelector(".digit-2");
    const digit3 = document.querySelector(".digit-3");
    function splitTextIntoSpans(selector) {
        let elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            let text = element.innerText;
            let splitedtext = text
                .split("")
                .map(function (char) {
                    return `<span>${
                        char === " " ? "&nbsp;&nbsp" : char
                    }</span>`;
                })
                .join("");
            element.innerHTML = splitedtext;
        });
    }
    splitTextIntoSpans(".header h1");
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            digit3.appendChild(div);
        }
    }
    const finalDigit = document.createElement("div");
    finalDigit.className = "num";
    finalDigit.textContent = "0";
    digit3.appendChild(finalDigit);

    function animate(digit, duration, delay = 1) {
        const numHeight = digit.querySelector(".num").clientHeight;
        const totalDistance =
            (digit.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(digit, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power3.inOut",
        });
    }
    animate(digit3, 5);
    animate(digit2, 6);
    animate(digit1, 2, 5);
    gsap.to(".progress-bar", {
        width: "30%",
        duration: 2,
        ease: "power3.inOut",
        delay: 7,
    });
    gsap.to(".progress-bar", {
        width: "100%",
        opacity: 0,
        duration: 2,
        ease: "power3.inOut",
        delay: 8.5,
        onComplete: () => {
            gsap.set(".pre-loader", {
                display: "none",
            });
        },
    });
    gsap.to(".hero-imgs >img", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1,
        ease: "power$.inOut",
        stagger: 0.25,
        delay: 9,
    });
    gsap.to(".hero", {
        scale: 1.24,
        duration: 3,
        ease: "power3.inOut",
        delay: 9,
    });
    gsap.to("nav", {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 11,
    });
    gsap.to("h1 span", {
        top: "0px",
        stagger: 0.23,
        duration: 1,
        ease: "power3.inOut",
        delay: 12,
    });
});
