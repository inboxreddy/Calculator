function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}
function equal(){
    var calc = document.form.textview.value;
    if(calc){
        document.form.textview.value = eval(calc);
    }
}
function clean(){
    document.form.textview.value = "";
}