//input type range
//color picker
const container = $("#container");
function create(){

            const gridItem = $("div");
            gridItem.addClass('content');
            container.append("<div></div>");
            container.on("mouseenter", function(event){
            // var targets = event.target;
            return this;
            });
 }

const input = $("#firstInput");
const viewVal = $("#myVal");

$("#firstInput").on("input",function(val){
val = $(this).val();
viewVal.text(val);

for (var i = 0; i < val; i++){
    for (var j = 0; j < val; j++){
        create();
        container.css("grid-template-columns", `repeat(${val}, auto)`);
        container.css("grid-template-rows", `repeat(${val}, auto)`);
            
    }
}
});

function randomColor(){
var round = Math.round;
var random = Math.random;
var total = 255;
return 'rgb(' + round(random() * total) + ',' + round(random() * total) + ',' + round(random() * total) + ')';
}

$("#colorpicker").change(function(){
    $("div").css("color", $(this).val());
});