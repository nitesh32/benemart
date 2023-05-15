const b=document.getElementById("bars");
const nav=document.getElementById("nav-bar");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const form_one=document.getElementById("form_one");
const line_one=document.getElementById("line_one");
const form_two=document.getElementById("form_two");
const line_two=document.getElementById("line_two");
const form_three=document.getElementById("form_three");
const line_three=document.getElementById("line_three");
const form_four=document.getElementById("form_four");
const line_four=document.getElementById("line_four");
const form_five=document.getElementById("form_five");
const line_five=document.getElementById("line_five");
const form_six=document.getElementById("form_six");
const line_six=document.getElementById("line_six");

var flag=0;
b.addEventListener('click',function(){
    if(flag==0){
        nav.style.left=0+"px";
        nav.style.transition=1+"s";
        one.style.rotate=45+"deg";
        two.style.display="none";
        three.style.rotate=135+"deg";
        one.style.position="absolute";
        three.style.position="absolute";
        one.style.transition=1+"s";
        two.style.transition=1+"s";
        three.style.transition=1+"s";
        document.body.style.opacity=0.9;
        flag=1;

    }
    else{
        one.style.rotate=0+"deg";
        two.style.display="block";
        three.style.rotate=0+"deg";
        one.style.position="static";
        three.style.position="static";
        nav.style.left=-200+"px";
        document.body.style.opacity=1;
        flag=0;
    }
});

form_one.addEventListener("mouseenter",function(){
    line_one.style.width=100+"%";
    line_one.style.opacity=1;
    line_one.style.transition=1+"s";
    form_one.style.fontSize=1.1+"rem";
});
form_one.addEventListener("mouseleave",function(){
    line_one.style.width=0+"%";
    line_one.style.opacity=0;
    line_one.style.transition=1+"s";
    form_one.style.fontSize=1+"rem";
});

form_two.addEventListener("mouseenter",function(){
    line_two.style.width=100+"%";
    line_two.style.opacity=1;
    line_two.style.transition=1+"s";
    form_two.style.fontSize=1.1+"rem";
});
form_two.addEventListener("mouseleave",function(){
    line_two.style.width=0+"%";
    line_two.style.opacity=0;
    line_two.style.transition=1+"s";
    form_two.style.fontSize=1+"rem";
});
form_three.addEventListener("mouseenter",function(){
    line_three.style.width=100+"%";
    line_three.style.opacity=1;
    line_three.style.transition=1+"s";
    form_three.style.fontSize=1.1+"rem";
});
form_three.addEventListener("mouseleave",function(){
    line_three.style.width=0+"%";
    line_three.style.opacity=0;
    line_three.style.transition=1+"s";
    form_three.style.fontSize=1+"rem";
});
form_four.addEventListener("mouseenter",function(){
    line_four.style.width=100+"%";
    line_four.style.opacity=1;
    line_four.style.transition=1+"s";
    form_four.style.fontSize=1.1+"rem";
});
form_four.addEventListener("mouseleave",function(){
    line_four.style.width=0+"%";
    line_four.style.opacity=0;
    line_four.style.transition=1+"s";
    form_four.style.fontSize=1+"rem";
});
form_five.addEventListener("mouseenter",function(){
    line_five.style.width=100+"%";
    line_five.style.opacity=1;
    line_five.style.transition=1+"s";
    form_five.style.fontSize=1.1+"rem";
});
form_five.addEventListener("mouseleave",function(){
    line_five.style.width=0+"%";
    line_five.style.opacity=0;
    line_five.style.transition=1+"s";
    form_five.style.fontSize=1+"rem";
});
form_six.addEventListener("mouseenter",function(){
    line_six.style.width=100+"%";
    line_six.style.opacity=1;
    line_six.style.transition=1+"s";
    form_six.style.fontSize=1.1+"rem";
});
form_six.addEventListener("mouseleave",function(){
    line_six.style.width=0+"%";
    line_six.style.opacity=0;
    line_six.style.transition=1+"s";
    form_six.style.fontSize=1+"rem";
});

const catagory_butt=document.getElementById("cat");
const category_box=document.getElementById("category_box");
const close_cat=document.getElementById("close_cat");
var flag_1=0;

// console.log(catagory_butt);
catagory_butt.addEventListener("click",function(){
    if(flag_1==0){
        category_box.style.display="flex";
        flag_1=1;
    }
    else{
        category_box.style.display="none";
        flag_1=0;
    }
});
close_cat.addEventListener("click",function(){
    category_box.style.display="none";
    flag_1=0;
});

const form_cat_1=document.getElementById("cat_form_1");
const cat_line_1=document.getElementById("cat_line_1");
const form_cat_2=document.getElementById("cat_form_2");
const cat_line_2=document.getElementById("cat_line_2");
const form_cat_3=document.getElementById("cat_form_3");
const cat_line_3=document.getElementById("cat_line_3");
const form_cat_4=document.getElementById("cat_form_4");
const cat_line_4=document.getElementById("cat_line_4");
const form_cat_5=document.getElementById("cat_form_5");
const cat_line_5=document.getElementById("cat_line_5");

form_cat_1.addEventListener("mouseenter",function(){
    cat_line_1.style.width=100+"%";
    form_cat_1.style.fontSize=1.6+"rem";
    cat_line_1.style.transition=1+"s";
    cat_line_1.style.opacity=1;
});
form_cat_1.addEventListener("mouseleave",function(){
    cat_line_1.style.width=0+"%";
    form_cat_1.style.fontSize=1.5+"rem";
    cat_line_1.style.opacity=0;
});

form_cat_2.addEventListener("mouseenter",function(){
    cat_line_2.style.width=100+"%";
    form_cat_2.style.fontSize=1.6+"rem";
    cat_line_2.style.transition=1+"s";
    cat_line_2.style.opacity=1;
});
form_cat_2.addEventListener("mouseleave",function(){
    cat_line_2.style.width=0+"%";
    form_cat_2.style.fontSize=1.5+"rem";
    cat_line_2.style.opacity=0;
});

form_cat_3.addEventListener("mouseenter",function(){
    cat_line_3.style.width=100+"%";
    form_cat_3.style.fontSize=1.6+"rem";
    cat_line_3.style.transition=1+"s";
    cat_line_3.style.opacity=1;
});
form_cat_3.addEventListener("mouseleave",function(){
    cat_line_3.style.width=0+"%";
    form_cat_3.style.fontSize=1.5+"rem";
    cat_line_3.style.opacity=0;
});

form_cat_4.addEventListener("mouseenter",function(){
    cat_line_4.style.width=100+"%";
    form_cat_4.style.fontSize=1.6+"rem";
    cat_line_4.style.transition=1+"s";
    cat_line_4.style.opacity=1;
});
form_cat_4.addEventListener("mouseleave",function(){
    cat_line_4.style.width=0+"%";
    form_cat_4.style.fontSize=1.5+"rem";
    cat_line_4.style.opacity=0;
});

form_cat_5.addEventListener("mouseenter",function(){
    cat_line_5.style.width=100+"%";
    form_cat_5.style.fontSize=1.6+"rem";
    cat_line_5.style.transition=1+"s";
    cat_line_5.style.opacity=1;
});
form_cat_5.addEventListener("mouseleave",function(){
    cat_line_5.style.width=0+"%";
    form_cat_5.style.fontSize=1.5+"rem";
    cat_line_5.style.opacity=0;
});

