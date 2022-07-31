
var i=0;
var images=[];
var time =2000;
images[0]="./mobile.png"
images[1]="./mobile2.png"
images[2]="./mobile3.png"
images[3]="./mobile4.png"


function changeImage(){
  document.mobiless.src=images[i];
  if(i<images.length - 1){
    i++
  }
  else{
    i=0
  }
  setTimeout("changeImage()",time);

}
window.onload=changeImage();
 

