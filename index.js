const increase=document.getElementById("incre");
const reset=document.getElementById('reset');
const decrease=document.getElementById('decre');
const counterlabel=document.getElementById('counter');
let count=0;
increase.onclick=function(){
    count++;
    counterlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    counterlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    counterlabel.textContent=count;
}