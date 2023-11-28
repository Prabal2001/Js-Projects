let cnt = 0;
 let count = document.getElementById("initial-value");

 let incbtn = document.getElementById("increase");

 let decbtn = document.getElementById("decrease");

 let reset = document.getElementById("reset");

 
   
 incbtn.addEventListener("click",() => {
    cnt++;
    count.innerHTML = cnt;
 })

 decbtn.addEventListener("click",() => {
    cnt--;
    if(cnt < 0) {
       cnt=0;
       count.innerHTML=0;
    }
     else {
        count.innerHTML = cnt;
     }
 })

 reset.addEventListener("click",() => {
      cnt=0;
      count.innerHTML = cnt;
 })
