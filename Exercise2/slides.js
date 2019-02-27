let number = 1;
function moveBack(){
    number = number - 1;
    if(number==0){
        number = 5;
    }
    document.getElementById('slide').src = 'images/pic_' + number + '.jpeg';
}
function moveForward(){
    number = number + 1;
    if(number==6){
        number == 1;
    }
    document.getElementById('slide').src = 'images/pic_' + number) + '.jpeg';
}
