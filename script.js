// DOM Elements

const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav1')
const nav2 = document.getElementById('nav2')
const nav3 = document.getElementById('nav3')
const nav4 = document.getElementById('nav4')
const nav5 = document.getElementById('nav5')

const navArray = [nav1, nav2, nav3, nav4, nav5]



// Toggle Menu Bars
function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change')

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    const isActive = overlay.classList.contains('overlay-active')
    isActive ? animateInOut('right', 'left') : animateInOut('left', 'right')
    isActive ? slideInOut('in', 'out') : slideInOut('out', 'in')
}

// Animate In or Out - Overlay
function animateInOut(classToAdd, classToRemove) {
    overlay.classList.replace(
        `overlay-slide-${classToRemove}`, 
        `overlay-slide-${classToAdd}`
    )
}

// Slide In or Out Animation - Nav
function slideInOut(classToAdd, classToRemove) {
    navArray.forEach((nav, i) => {
        nav.classList.replace(
            `slide-${classToRemove}-${i + 1}`, 
            `slide-${classToAdd}-${i + 1}`
        )
    })
}



// Event Listeners

menuBars.addEventListener('click', toggleNav)
navArray.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})