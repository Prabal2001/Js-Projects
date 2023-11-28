let cin = document.getElementById("c-input");

let fout = document.getElementById("f-out");

let btn = document.getElementById("btn");

  function getInput() {
   let val = cin.value;
   let fahrenheit = 9/5*val + 32;
    return fahrenheit;
}
btn.addEventListener("click",() => {
        let res = getInput();
     fout.innerHTML = "The temp in &deg; F is " + "" +  res;
        
})
