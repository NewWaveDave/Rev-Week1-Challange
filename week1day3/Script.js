let btn =document.querySelector(`#btn`);
let inputres =document.querySelector('#inputed')
let InArry=[];

btn.addEventListener('click', myfunc)


function myfunc() {
 
    InArry.push(inputres.value)
    alert (InArry);
  }