let btn =document.querySelector(`#btn`);
let inputres =document.querySelector('#inputed')
let InArry=[];

btn.addEventListener('click', myfunc)


function myfunc() {
 
    
  
  Toastify({

    text: InArry,
    
    duration: 3000
    
    }).showToast();
  }