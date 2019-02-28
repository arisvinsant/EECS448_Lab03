function manipulate(){
    let textDem = document.getElementById("magicText");
    textDem.style.borderWidth = document.getElementById("bdwidth").value
    textDem.style.backgroundColor = `rgb(${document.getElementById("backred").value}, ${document.getElementById("backgreen").value}, ${document.getElementById("backblue").value})`;
    textDem.style.borderColor = `rgb(${document.getElementById("bdred").value}, ${document.getElementById("bdgreen").value}, ${document.getElementById("bdblue").value})`;

}
