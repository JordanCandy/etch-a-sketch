const container = document.querySelector("#container");

const container = $("#container");
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


function multiple(num){
    num = Number(prompt("Number"));
    for (var i = 0; i < num; i++){
        for (var j = 0; j < num; j++){
            if(num < 100){
            create();
            container.style.gridTemplateColumns = `repeat(${num}, auto)`;
            container.style.gridTemplateRows = `repeat(${num}, auto)`;
            }
            else{
                return "error";
                break;
            }
    }
}
}

function reset(){
    document.querySelector(".content").innerHTML = '';
    create();
}
