const menuLines = document.querySelector('.menu_lines')
const heroText = document.querySelector('.hero_inner>h1')
const menuSquare = document.querySelector('.menu_square')

menuLines.addEventListener('click', ()=>{
    if (menuSquare.style.left == '50%' && heroText.style.left == '-50%') {
        menuSquare.style.left = '150%'
        heroText.style.left = '50%'
    } else {
        menuSquare.style.left = '50%'
        heroText.style.left = '-50%'
    }
})

const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const a3 = document.querySelector('.a3')
const a4 = document.querySelector('.a4')

const mab1 = document.querySelector('.mab1')
const mab2 = document.querySelector('.mab2')
const mab3 = document.querySelector('.mab3')
const mab4 = document.querySelector('.mab4')

mab1.addEventListener('click', ()=>{
    a1.style.opacity = '1'
    a2.style.opacity = '0'
    a3.style.opacity = '0'
    a4.style.opacity = '0'
})
mab2.addEventListener('click', ()=>{
    a1.style.opacity = '0'
    a2.style.opacity = '1'
    a3.style.opacity = '0'
    a4.style.opacity = '0'
})
mab3.addEventListener('click', ()=>{
    a1.style.opacity = '0'
    a2.style.opacity = '0'
    a3.style.opacity = '1'
    a4.style.opacity = '0'
})
mab4.addEventListener('click', ()=>{
    a1.style.opacity = '0'
    a2.style.opacity = '0'
    a3.style.opacity = '0'
    a4.style.opacity = '1'
})

// Web Developement Script Section
const webDevRevealBtn = document.querySelector('.web_dev_skills>h2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4')

webDevRevealBtn.addEventListener('click', ()=>{
    p1.style.width = '90%'
    p2.style.width = '70%'
    p3.style.width = '50%'
    p4.style.width = '40%'
})

// Graphic Design Script Section
const graphicDesignRevealBtn = document.querySelector('.graphic_design_skills>h2')
const p5 = document.querySelector('.p5')
const p6 = document.querySelector('.p6')
const p7 = document.querySelector('.p7')

graphicDesignRevealBtn.addEventListener('click', ()=>{
    p5.style.width = '50%'
    p6.style.width = '80%'
    p7.style.width = '80%'
})

// 3d Modelling Script Section
const modellingRevealBtn = document.querySelector('.modelling_skills>h2')
const p8 = document.querySelector('.p8')
const p9 = document.querySelector('.p9')

modellingRevealBtn.addEventListener('click', ()=>{
    p8.style.width = '60%'
    p9.style.width = '30%'
})

// 2d Animation Script Section
const animationRevealBtn = document.querySelector('.animation_skills>h2')
const p10 = document.querySelector('.p10')

animationRevealBtn.addEventListener('click', ()=>{
    p10.style.width = '60%'
})