
function order(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
var pizzaSize= ["Small","Medium", "Large"];
var pizzaCrust= ["Crispy","Stuffed","Gluten-free"];
var pizzaTopping= ["Olives","Bacon","Pistacio","Onions","Sausage","Pepperoni","Cheese"];

order.prototype.cost= function(){
    if (this.size === pizzaSize[0]) {
        this.price += 500;
    } else if (this.size === pizzaSize[1]) {
        this.price += 800;
    } else if (this.size === pizzaSize[2]) {
        this.price += 1500;
   }
   if (this.crust === pizzaCrust[0]) {
    this.price += 100;
} else if (this.crust === pizzaCrust[1]) {
    this.price += 200;
} else if (this.crust === pizzaCrust[2]) {
    this.price += 300;
}
if (this.topping === pizzaTopping[0]) {
    this.price += 80;
} else if (this.topping === pizzaTopping[1]) {
    this.price += 100;
} else if (this.topping === pizzaTopping[2]) {
    this.price += 100;
} else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
} else if (this.topping === pizzaTopping[4]) {
    this.price += 100;
} else if (this.topping === pizzaTopping[5]) {
    this.price += 150;
} else if (this.topping === pizzaTopping[6]) {
    this.price += 100;
}
return this.price;
}

var totalCosts = [];
order.prototype.total = function() {
    var totalCosts = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        totalCosts += totalCosts[order];
    }
    return  total;
}

$(document).ready(function(){
    $("#checkout").click(function(event){
        event.preventDefault();
        var sizes= parseInt($("select#sizes").val());
        var crusts= parseInt($("select#crusts").val());
        var toppings=parseInt($("select#toppings").val());
        var sum= sizes+crusts+toppings;
        alert(sum)
        
        

        var newPizzaOrder= new order(sizes,crusts,toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);

        $("#SIZE").text(sizes);
        $("#CRUST").text(crusts);
        $("#TOPPING").text(toppings);
        $("#TOTAL").text(newPizzaOrder.total());
        
    });
});

    $(".delivery").click(function(){
        prompt("Insert your name")
        prompt("Insert your location")
        prompt("Insert your address")
        alert("You will be charged an extra of Ksh 150 on delivery")
        alert("Thank you for choosing the best pizza joint!Your order being processed and it will be deleiverd in the next 20 minutes")

    });

    $(".pick").click(function () {
        alert("please visit our nearest joint to pick up your package!!")
});
  
    
    




// function Address(street, city, county) {
//     this.street = street;
//     this.city = city;
//     this.county = county;
//   }


//   $(document).ready(function(){
//     $("#checkout").click(function(event){
//         event.preventDefault();
//         var flavour= parseInt($("#flavours :selected").val())
//         var size= parseInt($("#size :selected").val())
//         var crust= parseInt($("#crust :selected").val())
//         var toppings= parseInt($("#toppings :selected").val())
//         var number= parseInt($("#number").val())
//         var delivery= 250;

//         var total= (flavour + size + crust + toppings) * number;
//         var grandTotal = total + delivery ;

//         $("ul#list").append(
//             "<li>" + "Your pizza flavour is : " + $("#flavours option:selected").text() + "</li>" +
//             "<li>" +  "Your pizza size is : " + $("#sizes option:selected").text() + "</li>" +
//             "<li>" + "Your pizza crust is : " + $("#crusts option:selected").text() + "</li>" + 
//             "<li>" + "Your pizza topping is : " + $("#toppings option:selected").text() + "</li>" +
//             "<li>" + "Number of pizza ordered is :" + number + "</li>" +
//             "<li>" + "Total amount to be paid is : Ksh" + grandTotal + "</li>");
//         })
//         $(".deliver").click(function(){
//             var fields = prompt("Enter your address")
//             prompt("Enter your name")
//             prompt("Enter your location")
//             alert("Your order will be delivered at" + fields)
//             alert("Delivery cost is Kshs 100")
//         })
//         $(".pick").click(function(){
//             alert("Pick your order at the nearest Santorpia joint")
//         })
//     });
        