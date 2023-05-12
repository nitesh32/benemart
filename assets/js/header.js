const b=document.getElementById("bars");
const nav=document.getElementById("nav-bar");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
var flag=0;
b.addEventListener('click',function(){
    if(flag==0){
        nav.style.left=0+"px";
        nav.style.transition=1+"s";
        flag=1;
        one.style.rotate=45+"deg";
        two.style.display="none";
        three.style.rotate=135+"deg";
        one.style.position="absolute";
        three.style.position="absolute";
        one.style.transition=1+"s";
        two.style.transition=1+"s";
        three.style.transition=1+"s";

    }
    else{
        one.style.rotate=0+"deg";
        two.style.display="block";
        three.style.rotate=0+"deg";
        one.style.position="static";
        three.style.position="static";
        nav.style.left=-200+"px";
        flag=0;
    }
});

