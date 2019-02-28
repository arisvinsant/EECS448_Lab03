let imageArr = ["images/pic_1.jpeg", "images/pic_2.jpeg","images/pic_3.jpeg","images/pic_4.jpeg","images/pic_5.jpeg" ];
let number = 1;
function moveBack(){
    number = number - 1;
    if(number==0){
        number = 5;
    }
     document.getElementById("slide").src = imageArr[number-1];
}
function moveForward(){
    number = number + 1;
    if(number==5){
        number = 1;
    }
     document.getElementById("slide").src = imageArr[number-1];
}
