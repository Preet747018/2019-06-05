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