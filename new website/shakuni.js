// d = prompt("Your name");
//  const name2 = document.getElementById("name1");
//  (name2.innerHTML = ("Hello" +" " + d));

 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 let myDate = new Date();
const mt1 = document.getElementById('mt2');

 (mt1.innerHTML = (myDate.toLocaleDateString("en-US", options)));

 
let mm = myDate.getMonth();

let month1 = document.getElementById("month");
  
let no = mm+1;
let href = document.getElementById(no).src;

month.src = href;

if(mm == 0){
   month1.remove()
}
 
  
  let head = document.getElementById("head1");

  setTimeout(() => {
    head.innerText = "Maantra Tim";
  }, "2000");

  setTimeout(() => {
    head.innerText = "Maantra Ti";
  }, "3000");
  setTimeout(() => {
    head.innerText = "Maantra T";
  }, "4000");
  setTimeout(() => {
    head.innerText = "Maantra";
  }, "5000");
  setTimeout(() => {
    head.innerText = "Maantr";
  }, "6000");
  setTimeout(() => {
    head.innerText = "Maantr";
  }, "7000");
  setTimeout(() => {
    head.innerText = "Maant";
  }, "8000");
  setTimeout(() => {
    head.innerText = "Maan";
  }, "9000");
  setTimeout(() => {
    head.innerText = "Maa";
  }, "10000");
  setTimeout(() => {
    head.innerText = "Ma";
  }, "11000");
  setTimeout(() => {
    head.innerText = "M";
  }, "12000");
  setTimeout(() => {
    head.innerText = "मां";
  }, "13000");
  setTimeout(() => {
    head.innerText = "मांत्रा:";
  }, "14000");
  setTimeout(() => {
    head.innerText = "मांत्रा: स";
  }, "15000");
  setTimeout(() => {
    head.innerText = "मांत्रा: सम";
  }, "16000");
  setTimeout(() => {
    head.innerText = "मांत्रा: समय";
  }, "17000");
 
  
  
  const mediaQuery = window.matchMedia('(max-width: 500px)')
// Check if the media query is true
if (mediaQuery.matches) {
document.getElementById("right").remove();
   

}


  let down = document.getElementById("btn1");
  down.setAttribute("onclick",( "location.href="+"'"+href+"'"));


  