let buttonSize = document.querySelector('#size')
buttonSize.addEventListener('click', adjustSize)
function adjustSize(){
    let input = prompt('please enter a value for your grid')
    return input
}
let selectSize = adjustSize()

function grid(selectSize){
    let sketchboard= document.querySelector('.sketch-content');
    sketchboard.style.gridTemplateColumns = `repeat(${selectSize},1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${selectSize},1fr)`;
}

grid(selectSize);