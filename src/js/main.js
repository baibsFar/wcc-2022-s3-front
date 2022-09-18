
window.addEventListener('DOMContentLoaded', () => {

    const cheeseBtn = document.querySelector('#cheese-btn')
    const exitBtn = document.querySelector('#exit-btn')
    const menuBurger = document.querySelector('#burger-menu')
    
    cheeseBtn.addEventListener('click', () => {
        menuBurger.classList.toggle('-translate-x-full')
    })

    exitBtn.addEventListener('click', () => {
        menuBurger.classList.toggle('-translate-x-full')
    })

})