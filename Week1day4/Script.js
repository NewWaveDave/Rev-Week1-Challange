let btn =document.querySelector(`#btn`);
let btn2 =document.querySelector(`#btn2`);
let inputPoke =document.querySelector(`#pokeadd`);

btn.addEventListener('click',clickWait);
btn2.addEventListener('click',Poker);

function Poker(){

let url = `https://pokeapi.co/api/v2/pokemon/${inputPoke.value.toLocaleLowerCase()}`


    fetch(url)
    .then(response => response.json())
    .then( function(data) {
            console.log(data);
            var mainContainer = document.getElementById("addedPoke");
            for (var i = 0; i < data.forms.length; i++) {    
                alert(`Add to List:
Name: ${data.forms[i].name}
HP: ${data.stats[0].base_stat}`);
                var div =document.createElement("h3");
                div.innerHTML= data.forms[i].name;
                mainContainer.appendChild(div);
                var div =document.createElement("p");
                div.innerHTML= data.stats[0].base_stat;
                mainContainer.appendChild(div);

            }   
        })
    }


function clickWait(){
    document.getElementsByTagName('title')[0].innerHTML = 'Working. Please wait.';
    newTitle = 'Waiting.';
    setTimeout(function() {
        document.getElementsByTagName('title')[0].innerHTML = newTitle;
    }, 5000);

    
}