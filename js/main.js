//Slideshow container (images array)
var photos = new Array();
// first image group index = 0
photos[0] = new Array();
photos[0][0] = "1.jpg"
photos[0][1] = "2.jpg"
photos[0][2] = "3.jpg"
photos[0][3] = "4.jpg"
photos[0][4] = "5.jpg"
// second image group index = 1
photos[1] = new Array();
photos[1][0] = "6.jpg"
photos[1][1] = "7.jpg"
photos[1][2] = "8.jpg"
photos[1][3] = "9.jpg"
photos[1][4] = "10.jpg"
//third image group index = 2
photos[2] = new Array();
photos[2][0] = "11.jpg"
photos[2][1] = "12.jpg"
photos[2][2] = "13.jpg"
photos[2][3] = "14.jpg"
photos[2][4] = "15.jpg"
//

//global variables
var index = 0; // image index
var index2 = Math.floor(Math.random() * photos.length); //0; //group index
var count = 0;
var img;
var opacity = 0;
var ieOpacity = 0;
var opInterval;
var slideTimeout;


//

//nextPhoto function
function nextPhoto(){
    index++;
        if (count < 1){
            img = document.getElementById("ImgSlide"); // find top slide
            img.style.zIndex = 1; //lets make position lower then second slide

            img = document.getElementById("ImgSlide2"); // find lower slide
            img.style.zIndex = 2; //lets make this position higher then first slide

            count = 1;

                if (index >= photos[index2].length){
                    index = 0; //reset image index
                }
            img.src = "images/"+photos[index2][index];
            img.style.opacity = 0;
            img.style.filter = "alpha(opacity = 0)";
            opacity = 0.01;
            ieOpacity = 10;

        } else if (count = 1) {
            img = document.getElementById("ImgSlide2"); // find top slide
            img.style.zIndex = 1; //lets make position lower then second slide

            img = document.getElementById("ImgSlide"); // find lower slide
            img.style.zIndex = 2; //lets make this position higher then first slide

            count = 0; //reset our trigger

                if (index >= photos[index2].length){
                    index = 0; //reset image index
                }
            img.src = "images/"+photos[index2][index];
            img.style.opacity = 0;
            img.style.filter = "alpha(opacity = 0)";
            opacity = 0.01;
            ieOpacity = 10;
        }

        clearInterval(opInterval); //it will be interval for nextPhoto function which we will call from fadeIn function
            slideTimeout = setInterval("fadeIn()", 50);
}
//

//fadeIn function
function fadeIn(){
    if ((opacity <= 1) || (ieOpacity <= 100)){
        img.style.opacity = opacity;
        ieOpacity = 100 * opacity;
        img.style.filter = "alpha(opacity = "+ieOpacity+")";

        opacity += 0.05;

    } else {
        img.style.opacity = 1;
        img.style.filter = 100;
        opInterval = setInterval("nextPhoto()", 4000);
        clearInterval(slideTimeout);

    }
}
//

//startSlideshow function
function startSlideshow()
{
    nextPhoto();
}
//

//window onload function
window.onload = function onload()
{
    startSlideshow();
}
//