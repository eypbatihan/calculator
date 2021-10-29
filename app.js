

const ekranUst = document.querySelector(".content1") ;
const ekranOrta = document.querySelector(".content21");
const ekranAlt = document.querySelector(".content22");

const array = [];

const ac = document.querySelector(".content2");
ac.addEventListener("click",e =>{
    array.splice(0,array.length);
    ekranUst.innerHTML = "";
    ekranOrta.innerHTML ="";
    ekranAlt.innerHTML ="";
    
});

const signes = document.querySelector(".content3");
signes.addEventListener("click",e =>{
    const sign = array.includes("-");
    const sign1 = ekranAlt.innerHTML.includes("-")
    if(sign1 == false){
       array.unshift("-"); 
       ekranAlt.innerHTML = array.join("");
    }
    else if(sign == true){
        array.shift();
        ekranAlt.innerHTML = array.join("");

    }
});

const backspace = document.querySelector(".content4");

backspace.addEventListener("click",e =>{
    array.pop();
    ekranAlt.innerHTML = array.join("");
   
});



const yedi = document.querySelector(".content6");
yedi.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("7");
    ekranAlt.innerHTML = array.join("");}
   
});


const sekiz = document.querySelector(".content7");
sekiz.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("8");
    ekranAlt.innerHTML = array.join("");}
   
});

const dokuz = document.querySelector(".content8");
dokuz.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("9");
    ekranAlt.innerHTML = array.join("");}
   
});

const dort = document.querySelector(".content10");
dort.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("4");
    ekranAlt.innerHTML = array.join("");}
   
});

const bes = document.querySelector(".content11");
bes.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("5");
    ekranAlt.innerHTML = array.join("");}
   
});

const alti = document.querySelector(".content12");
alti.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("6");
    ekranAlt.innerHTML = array.join("");}
   
});

const bir = document.querySelector(".content14");
bir.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("1");
    ekranAlt.innerHTML = array.join("");}
   
});

const iki = document.querySelector(".content15");
iki.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("2");
    ekranAlt.innerHTML = array.join("");}
   
});

const uc = document.querySelector(".content16");
uc.addEventListener("click",e =>{
    if(array[0] !="0" || array[1] =="."){
    array.push("3");
    ekranAlt.innerHTML = array.join("");}
   
});

const sifir = document.querySelector(".content18");
sifir.addEventListener("click",e =>{
 if(array[0] !="0" || ekranAlt.innerHTML.includes(".")) {
    array.push("0");
    ekranAlt.innerHTML = array.join("");}
   
});

const virgul = document.querySelector(".content19");
virgul.addEventListener("click",e =>{
    const ondalık = ekranAlt.innerHTML.includes(".");
 if(ondalık == false){
     if(array =="" ){
         array.push("0");
         array.push(".");
         ekranAlt.innerHTML = array.join("");
     }
    else{
     array.push(".");
     ekranAlt.innerHTML = array.join("");}
    }
   
});



const diver = document.querySelector(".content5");
diver.addEventListener("click",e =>{
  ekranUst.innerHTML = array.join("");
  ekranOrta.innerHTML = "/";
  array.splice(0,array.length);
  ekranAlt.innerHTML = array.join("");
  
});

const carpma = document.querySelector(".content9");
carpma.addEventListener("click",e =>{
  ekranUst.innerHTML = array.join("");
  ekranOrta.innerHTML = "x";
  array.splice(0,array.length);
  ekranAlt.innerHTML = array.join("");
  
});

const toplama = document.querySelector(".content17");
toplama.addEventListener("click",e =>{
  ekranUst.innerHTML = array.join("");
  ekranOrta.innerHTML = "+";
  array.splice(0,array.length);
  ekranAlt.innerHTML = array.join("");
  
});

const cıkarma = document.querySelector(".content13");
cıkarma.addEventListener("click",e =>{
  ekranUst.innerHTML = array.join("");
  ekranOrta.innerHTML = "-";
  array.splice(0,array.length);
  ekranAlt.innerHTML = array.join("");
  
});

const islem = document.querySelector(".content20");
islem.addEventListener("click",e =>{
   
    if(ekranOrta.innerHTML == "/")
    {
    const sonuc = ekranUst.innerHTML / ekranAlt.innerHTML;
    array.splice(0,array.length);
    ekranAlt.innerHTML = array.join("");
    ekranUst.innerHTML = array.join("");
    ekranOrta.innerHTML = array.join("");
    array.push(sonuc);
    ekranAlt.innerHTML = array.join("");
   
   
   
    }
    else if(ekranOrta.innerHTML == "x")
    {
    const sonuc = ekranUst.innerHTML * ekranAlt.innerHTML;
    array.splice(0,array.length);
    ekranAlt.innerHTML = array.join("");
    ekranUst.innerHTML = array.join("");
    ekranOrta.innerHTML = array.join("");
    array.push(sonuc);
    ekranAlt.innerHTML = array.join("");
   
    }

    else if(ekranOrta.innerHTML == "+")
    {
    const sonuc = Number(ekranUst.innerHTML) + Number(ekranAlt.innerHTML);
    array.splice(0,array.length);
    ekranAlt.innerHTML = array.join("");
    ekranUst.innerHTML = array.join("");
    ekranOrta.innerHTML = array.join("");
    array.push(sonuc);
    ekranAlt.innerHTML = array.join("");
  
    }

    else if(ekranOrta.innerHTML == "-")
    {
    const sonuc = ekranUst.innerHTML - ekranAlt.innerHTML;
    array.splice(0,array.length);
    ekranAlt.innerHTML = array.join("");
    ekranUst.innerHTML = array.join("");
    ekranOrta.innerHTML = array.join("");
    array.push(sonuc);
    ekranAlt.innerHTML = array.join("");
 
    }
});







