//TODO : type animation fonksiyonu oluştur.

export function typeAnimation(string, element) {
    if (string && element) {
        element.classList.add("typeAnimation");

        let index = 0;

        const interval = setInterval(() => {
            element.textContent = string.slice(0, index);
            index++;

            if (index === string.length + 1) {
                clearInterval(interval);
                element.classList.remove("typeAnimation");
            }
        }, 300);
    }
}

const p = document.querySelector(".p");

typeAnimation("Hello World", p);
