function get(){
   x= localStorage.getItem("Score");
   document.getElementById("Xscore").innerHTML="Score:"+x;
}
function back(){
    window.location="activity_1.html"
}