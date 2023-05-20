function myFunction(){
    alert("YOUR PURCHASE HAS BEEN MADE");
};

const hearts=document.getElementsByClassName('fas fa-heart');

for(let i of hearts) {
    i.addEventListener('click', function() {
        i.classList.toggle('red');
    })
}



function totally(){
    var cartitemcontainer = document.getElementsByClassName('gopipop')[0]
    var cartitems = cartitemcontainer.getElementsByClassName('section')
    console.log(cartitems)
    var toti= 0
    for (var i = 0; i < cartitems.length; i++) {
        var cartitem = cartitems[i]
        var skateprice = cartitem.getElementsByClassName('pricy')[0]
        var skatequantity = cartitem.getElementsByClassName('quanb')[0]
        var price = parseFloat(skateprice.innerText)
        var quantity = skatequantity.value
       toti = toti + (price * quantity)
        
    }
    document.getElementsByClassName('toti')[0].innerText = toti

}
totally()
function quanchan(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    totally()
}
var quantityinputs = document.getElementsByClassName('quanb')
    for (var i = 0; i < quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener('change', quanchan)
    }
