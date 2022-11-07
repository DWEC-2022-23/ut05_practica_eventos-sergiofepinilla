const div1 = document.getElementById("numero");

document.getElementById("numero").addEventListener("dblclick",dobleclick);

function dobleclick(){
document.getElementById("numero").innerHTML = Number(document.getElementById("numero").innerHTML)*3;
}

div1.addEventListener("mouseover", function handleMouseOver() {
    div1.style.color = "white";
    div1.style.backgroundColor="black";
  });

div1.addEventListener("mouseout", function handleMouseOut() {
  div1.style.color = "black";
  div1.style.backgroundColor="white";
  });