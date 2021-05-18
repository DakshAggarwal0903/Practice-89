x=0
function update(){
x=x+1
document.getElementById("score").innerHTML="Score:"+x;
}
function save(){
 localStorage.setItem("Score",x)
}
function next(){
window.location="activity2.html";
}