var request = new XMLHttpRequest();

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
    var request = new XMLHttpRequest();

    request.open('GET', 'http://aws.random.cat/meow', true);

    request.onload = function(){
        var image = document.getElementById("meow");
        var data = JSON.parse(this.response);
        console.log(data);
        console.log(data.file);
        image.src = data.file;
    }

    request.send();
}

