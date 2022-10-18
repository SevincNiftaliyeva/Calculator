let operant1 = "";
let operant2 = "";
let operator = "";
let cavab = "";
function display() {
    $('.output').html(operant1 + operator + operant2);
    $('.c').html(cavab);
   
}
$('.reqem').on('click', function () {
    if(cavab){
        return
    }
    if (!operator) {
        operant1 += this.value;
    } else {
        operant2 += this.value;
    }
    display();
});
$('.operator').on('click', function () {
    if(operant2){
        return;
    }
    operator = this.value;
    display();
});
$('.equal').on('click', function () {
    if (operator === '/') {
        cavab = parseInt(operant1) / parseInt(operant2);
    }
    else if (operator === '+') {
        cavab = parseInt(operant1) + parseInt(operant2);
    }
    else if (operator === '-') {
        cavab = parseInt(operant1) - parseInt(operant2);
    }
    else if (operator === '*'){
        cavab = parseInt(operant1) * parseInt(operant2);
    }

    display();
   
});
$('.clear').on('click',function(){
 operant1 = "";
operant2 = "";
operator = "";
cavab = "";
display();
})
