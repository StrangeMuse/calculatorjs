
function e1(x){
    document.getElementById("text1").value+=x;
}
function e2(){
    var x = document.getElementById("text1").value;
    document.getElementById("text1").value = eval(x);
}
