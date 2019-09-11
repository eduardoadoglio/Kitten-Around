var request = new XMLHttpRequest();
var numGatos = 1;


request.open('GET', 'http://aws.random.cat/meow', true);

request.onload = function(){
    var image = document.getElementById("meow");
    var data = JSON.parse(this.response);
    console.log(data);
    console.log(data.file);
    image.src = data.file;
}

request.send();


function newCat(){
    numGatos++;
    var counter = document.getElementById("num");
    var request = new XMLHttpRequest();

    request.open('GET', 'http://aws.random.cat/meow', true);

    request.onload = function(){
        var image = document.getElementById("meow");
        var data = JSON.parse(this.response);
        image.src = data.file;
        counter.innerHTML = numGatos;
    }

    request.send();
}

