





const slider = document.getElementById("resolution");
const resVal = document.getElementById("resVal");
let res = slider.value * (16 / 9);
resVal.innerText = res + ' x ' + slider.value;


slider.oninput = function() {
    res = this.value * (16 / 9);
    resVal.innerText = res + ' x ' + this.value;
};

function resetRes(){

}

function clear(){

}

function createPixels(){
    const screen = document.getElementById("screen");
    if (screen.children.length > 0) {
        for (let i = 0; i < screen.children.length; i++)
            screen.lastChild.del
        };

}

