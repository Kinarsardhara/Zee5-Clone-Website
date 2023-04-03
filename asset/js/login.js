document.getElementById('submit').addEventListener("click",function(event)){
    event.preventDefault();

    checkData();
}

var entervalue = document.getElementById("entervalue");

function checkData(){

    var entervaluein = entervalue.ariaValueMax.trim();
    alert(entervaluein)
}