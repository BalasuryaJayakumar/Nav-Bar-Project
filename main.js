const button = document.querySelector(".header_btn")
const main = document.querySelector(".main")

button.addEventListener("click", (event) => {
    main.classList.toggle("main_block");
})

button.addEventListener("click", (event) => {
    button.classList.toggle("rotate");
})