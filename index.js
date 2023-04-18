const container = document.querySelector("#container");

function create(){
    const gridItem = document.createElement("div");
    gridItem.classList.add("content");
    container.addEventListener("mousedown", function(event){
        gridItem.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "black";
        })
    });
    container.appendChild(gridItem);
}

const input = document.querySelector("#firstInput");
const viewVal = document.querySelector("#myVal");

input.addEventListener("input", function(val){
val = this.value;
viewVal.textContent = val;

for (var i = 0; i < val; i++){
    for (var j = 0; j < val; j++){
        create();
        container.style.gridTemplateColumns = `repeat(${val}, auto)`;
        container.style.gridTemplateRows = `repeat(${val}, auto)`;
    }
}
});

var randomColor = () =>{
    var round = Math.round;
    var random = Math.random;
    var total = 225;
    return 'rgb(' + round(random() * total) + ',' + round(random() * total) + ',' + round(random() * total) + ')';
}

//id= colorpicker

var typeColor = document.getElementById("colorpicker");

function colorPicker(){
typeColor.addEventListener("mouseover", function(event){
    var myColor = typeColor.value;
    return myColor;
});
}

function reset(){
    // container.innerHTML = '';
    container.removeChild(div);
    create();
}

var btn = document.querySelector("#reset");
    btn.addEventListener("click", function(){
        reset();
    });