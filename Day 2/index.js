window.onload = function(){
    addColor();
} 

const btn = document.querySelector('.btn');
const randomColorBlock = document.getElementsByClassName('box');
    

function randomHexColorCode(){

    var chars = 'O123456789abcdef'
    var colorLength = 6;
    var color = '';

    for(var i = 0; i < colorLength; i++){
        let randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor +1)

      
    }
    return `#` + color
}

    function addColor(){
       
        for(let i = 0; i < randomColorBlock.length; i++){
            let newColor = randomHexColorCode();

            randomColorBlock[i].style.backgroundColor = newColor;
            randomColorBlock[i].innerHTML = newColor
        }
        }

  
       
    
