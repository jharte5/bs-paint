const colorClasses = document.querySelector('.current-brush')
const bigClass = colorClasses.classList

const currentColor = document.querySelector('.icon palette-icon')

function switchFirstColor() {
    bigClass.replace(bigClass[1], 'color-1')
}

document.querySelector('.color-1').addEventListener('click', switchFirstColor )

function switchSecondColor () {
    bigClass.replace(bigClass[1], 'color-2')

}
document.querySelector('.color-2').addEventListener('click', switchSecondColor)

function switchThirdColor () {
    bigClass.replace(bigClass[1], 'color-3')

}
document.querySelector('.color-3').addEventListener('click', switchThirdColor)

function switchFourthColor () {
    bigClass.replace(bigClass[1], 'color-4')
}
document.querySelector('.color-4').addEventListener('click', switchFourthColor)

function switchFifthColor () {
    bigClass.replace(bigClass[1], 'color-5')
}
document.querySelector('.color-5').addEventListener('click', switchFifthColor)

const squareClasses = document.querySelectorAll('.square')
for (let i = 0; i < squareClasses.length; i++) {   
    squareClasses[i].addEventListener('click', painting)    

}
function painting(event) {
        event.target.squareClasses[1]
        squareClasses.replace()
        
    }

