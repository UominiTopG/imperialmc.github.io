/* var n_img = 3;
var corrente = 1;
var intervalID;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

var slider = document.getElementById('img_slider');
slider.addEventListener('mouseover', function() {
    clearInterval(intervalID);
});

slider.addEventListener('mouseout', function() {
    intervalID = setInterval(succ, 5000);
});

var navButtons = document.querySelectorAll('#slider button');
for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mouseover', function() {
        clearInterval(intervalID);
    });
  
    navButtons[i].addEventListener('mouseout', function() {
        intervalID = setInterval(succ, 5000);
    });
}


 */