let cart=[];


function loadbtns(){
    
let btns = document.getElementsByName("add");

btns.forEach( addbtn =>  addbtn.addEventListener("click",function() {
    let mname=addbtn.parentElement.children[1].innerHTML;
   
    let mprice=addbtn.parentElement.children[3].innerHTML;
    let mcount=addbtn.parentElement.children[5].children[1].value;
    let to=addbtn.parentElement.children[7].children[1].innerHTML;


    let obj={name:mname,price:mprice ,count:mcount ,total:to}
    cart.push(obj);
    diplaycart();

}) );
}
loadbtns();

function diplaycart(){
    let cart1=document.getElementById("cart");
    cart1.innerHTML='';
    let div1=document.createElement("div");
    div1.innerHTML="your cart is";
    div1.style.background= "White";
    let alltotal=0;
    let allcount=0;

    cart1.appendChild(div1);
    for(let i=0;i<cart.length;i++){
        let div=document.createElement("div");
        let span1=document.createElement("span");
        span1.innerHTML=cart[i].name;
        let span2=document.createElement("span");
        span2.innerHTML=cart[i].price;
        let span3=document.createElement("span");
        span3.innerHTML=cart[i].count;
        allcount=allcount+parseInt(cart[i].count);
        let span4=document.createElement("span");
        span4.innerHTML=cart[i].total;
        alltotal =  alltotal +  parseFloat(cart[i].total);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span4);


        cart1.appendChild(div);


        /// styleing 
        switch(cart[i].name){
            case "Apple" :
                div.style.backgroundColor = "red";
                break;
             case "Orange" :
                div.style.backgroundColor = "orange";
                break;
                case "Banana" :
                    div.style.backgroundColor = "yellow";
                    break;
    
        }

    }
let discount = 0 ;
if(5<allcount && allcount < 10 ){
    alltotal=alltotal-alltotal*0.05;
    discount = 5;
} else {
if(allcount>=10){
    alltotal=alltotal-alltotal*0.15;
    discount = 15;

}
}





//print output

let spancount=document.createElement("span");
spancount.innerHTML="count :" +allcount;
    let spantotal=document.createElement("span");
    spantotal.innerHTML="Total:" + alltotal + " $";
    let spandiscount=document.createElement("span");
    spandiscount.innerHTML="Discount:" + discount + "%";
let divfinal=document.createElement("div");
divfinal.appendChild(spancount);
divfinal.appendChild(spantotal);
divfinal.appendChild(spandiscount);

cart1.appendChild(divfinal);
divfinal.style.backgroundColor="blue";
divfinal.style.color="white";


}



function countchange(){
let co=document.getElementsByName("count");


co.forEach(countpro => countpro.addEventListener("change",function(){
    let pri=countpro.parentElement.parentElement.children[3].innerHTML;
    let price2=parseFloat(pri);
    let count2=countpro.value;
    let count3=parseFloat(count2);
    let to=countpro.parentElement.parentElement.children[7].children[1];
    to.innerHTML=price2*count3 + " $";
}

))}
countchange();

//// plus 
function pluschange(){
let pluses=document.getElementsByName("plus");
pluses.forEach(plusbtn => plusbtn.addEventListener("click",function(){
let count=plusbtn.parentElement.children[1];
let count1=parseInt(count.value)+1;
count.value=count1;



///updae 
let pri=count.parentElement.parentElement.children[3].innerHTML;
let price2=parseFloat(pri);
let count2=count.value;
let count3=parseFloat(count2);
let to=count.parentElement.parentElement.children[7].children[1];
to.innerHTML=price2*count3 + " $";



}))
}
pluschange();


/// minus
function minuschange(){
let minuses=document.getElementsByName("minus");
minuses.forEach(minusbt => minusbt.addEventListener("click",function(){
let count=minusbt.parentElement.children[1];
let count1=parseInt(count.value)-1;
count.value=count1;

///updae 
let pri=count.parentElement.parentElement.children[3].innerHTML;
let price2=parseFloat(pri);
let count2=count.value;
let count3=parseFloat(count2);
let to=count.parentElement.parentElement.children[7].children[1];
to.innerHTML=price2*count3 + " $";

}))}
minuschange();
///new product btn
let newbtn=document.getElementById("newbtn");
newbtn.addEventListener("click",addnewpro);
function addnewpro(){
    let newpro=document.getElementById("newpro").value;
    let newpri=document.getElementById("newpri").value;
    let main=document.getElementById("items");

    main.innerHTML +=' <div class="item">'+
   ' <label> Product name</label>'+
    '<label id="name">'+newpro+'</label>'+
    '<label> Product price</label>'+
    '<label id="price">'+newpri+'</label>'+
    '<label> Product count</label>'+
    '<div class="itemcount"> <button class="minus" name="minus"> -</button>'+
        '<input type="number" name="count" id="count">'+
        '<button class="plus" name="plus"> +</button>'+
    '</div>'+
    '<button id="add" name="add">Add to cart</button>'+
    '<div> <label> Total</label> <span id="total">0.00$</span></div>'+
'</div>';

 loadbtns();
pluschange();
minuschange();
countchange();
}
let show =true;
let icon1=document.getElementById("icon");
icon1.addEventListener("click" ,hide);
function hide(){
   

    let product=document.getElementById("pro");
    if(show==true){
    product.style.display="none";
    
}
else {product.style.display="flex";}
show = !show ;

}
let showcart=true;
let carti=document.getElementById("carticon");
carti.addEventListener("click",hidecart);
function hidecart(){
    let carts=document.getElementById("cart");
    let cartcont1=document.getElementById("cartcount");
    if(showcart==true){
        carts.style.display="none";
        cartcont1.innerHTML=cart.length;
        
    }
    else{carts.style.display="flex";
    cartcont1.innerHTML='';
}
    showcart=!showcart;

}







