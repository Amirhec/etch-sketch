let buttonSize = document.querySelector('#size')
buttonSize.addEventListener('click', function(){
let selectedSize = beforeSelectedSize()
grid(selectedSize)

})

function beforeSelectedSize(){
    let input = prompt('please enter a value for your grid')
    if(input > 100 || input < 0){
        return alert("please enter a number between 0-100")
    }else{
        return input
    }
}



function grid(selectedSize){
    let sketchboard= document.querySelector('.sketch-content');
    sketchboard.style.gridTemplateColumns = `repeat(${selectedSize},1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${selectedSize},1fr)`;
}

