





const slider = document.getElementById("resolution");
const resVal = document.getElementById("resVal");
const screen = document.getElementById("screen");
const colorSel = document.getElementById("color");
const rgb = document.getElementById("rgb");
const shade = document.getElementById("shade");
const clearBtn = document.getElementById("resetBtn");
clearBtn.addEventListener('click', () => reset());
let mouseDown = false;
let res = slider.value * (16 / 9);
resVal.innerText = res + ' x ' + slider.value;
colorSel.value = "black";
createPixels();

document.getElementsByTagName("body")[0].addEventListener('mousedown', () => mouseDown = true);
document.getElementsByTagName("body")[0].addEventListener('mouseup', () => mouseDown = false);

slider.oninput = function() {
    res = this.value * (16 / 9);
    resVal.innerText = res + ' x ' + this.value;
    resetRes();
};

function reset(){
    colorSel.value = 000000;
    rgb.checked = false;
    shade.checked = false;
    resetRes();
}

function resetRes(){
    if (screen.children.length > 0) {
        let childCount = screen.children.length;
        for (let i = 0 ; i < childCount; i++){
            screen.removeChild(screen.lastChild);  
        };
        createPixels();
    };
};
function randColor(){
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;
    colorSel.value = "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
};
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

function divHover(){
    const Pixels = document.querySelectorAll('.pixel');
    Pixels.forEach((pixel) => {
        
            pixel.addEventListener('mouseover', () => {
                if (mouseDown === true) {
                    if (rgb.checked === true){
                        randColor();
                    };
                    pixel.style.backgroundColor = colorSel.value;
                    if (shade.checked === true){
                    pixel.style.opacity = (+pixel.style.opacity + .1);
                    };
                };
        });
    });
};

function createPixels(){
    //res = length
    //slider.value = height
    let pixelRow;
    let pixel;
    for (let resHeight = 1 ; resHeight <= slider.value ; resHeight++){
        pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow');
        for(let resLenth = 1 ; resLenth <= res ; resLenth++){
            pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.removeAttribute("draggable");
            pixelRow.appendChild(pixel);
        }
        screen.appendChild(pixelRow);
    };
    divHover();
};

