const container = document.querySelector("#container");

// function create(){
//     const gridItem = document.createElement("div");
//     gridItem.classList.add("content");
//     container.addEventListener("mousedown", function(event){
//         gridItem.addEventListener("mouseover", function(event){
//             event.target.style.backgroundColor = "black";
//         });
//          gridItem.addEventListener("mouseover", function(event){
  //        event.target.style.backgroundColor = colorPicker();
//      });
//     });

//     document.querySelector("#colors").addEventListener("click", function(event){
//         container.addEventListener(
//             "mousedown", function(event){
//     ;
//     container.appendChild(gridItem);
// }

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

//reset container
var btn = document.querySelector("#reset");
btn.addEventListener("click", function(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
        viewVal.textContent = "2";
    }
});