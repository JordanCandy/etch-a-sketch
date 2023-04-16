const container = $("#container");
function create(){
            const gridItem = $("div");
            gridItem.addClass('content');
            container.append("<div></div>");
}

const input = $("#firstInput");
const viewVal = $("#myVal");

$("input").on("input", function(){
  var val = $(this).val();
    viewVal.text(val);

for (var i = 0; i < val; i++){
    for (var j = 0; j < val; j++){
        create();
        container.css("grid-template-columns", `repeat(${val}, auto)`);
        container.css("grid-template-rows", `repeat(${val}, auto)`);
    }
}
});


// function multiple(num){
//      num = Number(prompt("Number: "));
//     for (var i = 0; i < num; i++){
//         for (var j = 0; j < num; j++){
//             if(num < 100){
//             create();
//             container.css("grid-template-columns", `repeat(${num}, auto)`);
//             container.css("grid-template-rows", `repeat(${num}, auto)`);
            
//             }
//             else{
//                 return "error";
//                 break;
//             }
//     }
// }
// }