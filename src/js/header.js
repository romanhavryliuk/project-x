const openMenuBtn = document.querySelector(".burger-icon-btn")
const closeMenuBtn = document.querySelector(".close-icon-btn")
const navMenu = document.getElementById("menuModal")

openMenuBtn.addEventListener("click", () => {
    openMenuBtn.style.display = "none"
    closeMenuBtn.style.display = "flex"
    navMenu.style.display = "flex"
})

closeMenuBtn.addEventListener("click", () => {
    openMenuBtn.style.display = "flex"
    closeMenuBtn.style.display = "none"
    navMenu.style.display = "none"
})