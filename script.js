const xhr = new XMLHttpRequest();

function onclick(){
    var data;
    xhr.onreadystatechange = function() {
    console.log(this.status);
    if(this.readyState === 4){
        if(this.status === 200)
        {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            console.log(`joke : ${JSON.parse(this.responseText).value}`)
            data = JSON.parse(this.responseText).value;
            console.log(`data is ${data}`)
            document.querySelector('#joke').innerHTML = data;   
        }
        else{
            document.querySelector('#joke').innerHTML = 'something went wrong(not funny)';
        }
    }
    };
    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.send();
}

document.querySelector('#joke-btn').addEventListener('click',onclick);
document.addEventListener('DOMContentLoaded',onclick)