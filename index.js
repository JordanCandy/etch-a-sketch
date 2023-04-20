const container = document.querySelector("#container");
function create(){
    const gridItem = document.createElement("div");
    gridItem.classList.add("content");
   container.addEventListener("mousedown", function(event){
    gridItem.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "black";
    });//end of mouse over
   }); //end of mousedown
    container.appendChild(gridItem);
}


const input = document.querySelector("#firstInput");
const viewVal = document.querySelector("#myVal");

//get value of input range
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

//reset grid
function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
        viewVal.textContent = "2";
    }
}

var btn = document.querySelector("#reset");
    btn.addEventListener("click", reset);
