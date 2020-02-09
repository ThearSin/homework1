var pic = [
    "kitty/kitty_bed.JPG",
    "kitty/kitty_basket.JPG",
    "kitty/kitty_laptop.jpg",
    "kitty/kitty_door.jpg",
    "kitty/kitty_sink.JPG",
    "kitty/kitty_wall.jpg"
];
var btn=document.querySelector("button");
var img=document.querySelector("img");
var counter=1;

btn.addEventListener("click", function(){
    if(counter ===6){
        counter=0
    }
    img.src=pic[counter]
    counter=counter+1

});