let box =  document.getElementById('box')
let temp = document.documentElement.scrollHeight;



let x = 1;

const appendDiv =  (limit = 26 + x) =>{
   
    while(x <=limit){
        let p = document.createElement("h2");
        p.innerText=`Masai Student ${x}`;
        box.append(p);
        x++
    }
}

appendDiv();


window.addEventListener("scroll" , ()=> {

 if(window.scrollY + window.innerHeight + 1 >= temp )
   appendDiv();


})
