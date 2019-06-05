var a = 6;

function test(){
    function again(){
        var a = 8;
        alert(a);
    }
    again();
    alert(a);
}
test();
alert(a);
function orange(blueberry){
    if(blueberry > 10){
        var a = 5;
    }
    else{
        var a = 108;
    }
    orange(3);
}