var allprice = 0;
var iphone11 = 0;


$("#btnprice1").on("click" , function(){
var goods1 = 10000;
allprice += goods1;
$("#all-price").html(allprice +" د.ع");
})// goods 1

$("#btnprice2").on("click" , function(){
    var goods2 = 873785;
    allprice += goods2;
    $("#all-price").html(allprice +" د.ع");
    })// goods 2

$("#btnprice3").on("click" , function(){
    var goods3 = 13250 ;
    allprice += goods3;
    $("#all-price").html(allprice +" د.ع");
    })// goods 3   

$("#btnprice4").on("click" , function(){
     var goods4 = 446556 ;
     allprice += goods4;
     $("#all-price").html(allprice +" د.ع");
     })// goods 4

    $(".btn-all-price").on("click" , function(){
    $(".all-price").removeClass("d-none");
}) // remove d-none

