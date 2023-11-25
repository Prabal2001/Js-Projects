const apiURL = 'https://api.github.com/users/';
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const getUser = async(username) => {
    const response = await fetch(apiURL + username);
     const data =  await response.json();
     console.log(data);
     const card = `
     <div class="card">
     <div>
         <img class="avatar" src= "${data.avatar_url}" alt="Florin Pop">
     </div>
     <div class="user-info">
         <h2>${data.name}</h2>
         <p>${data.bio}</p>

         <ul class="info">
             <li>###<strong>${data.followers}</strong></li>
             <li>##<strong>${data.following}</strong></li>
             <li>###<strong>${data.public_repos}</strong></li>
         </ul>

         <div id="repos">
             
         </div>
     </div>
 </div> 
 </div>
 `
   main.innerHTML = card;
  }



  searchBox.addEventListener("focusout",()=>{
          formSubmit();
   })

 const getRepos = async(username) => {
    const repos = document.getElementById("#repos");
       const response = await fetch(apiURL + username + "/repos");
       const data =  await response.json();
       data.forEach((item) => {
           const elem = document.createElement("a");
           elem.classList.add("repo");
           elem.href = item.html_url;
           elem.href = item.url;
           elem.innerText = item.name;
           elem.target="_blank";
            repos.appendChild(elem);
       })
 }


 const formSubmit = () => {
  
    if(searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value="";
    }
    return false;
 }
{/* <a class="repo" href="#" target="_blank">Repo 1</a>
             <a class="repo" href="#" target="_blank">Repo 2</a>
             <a class="repo" href="#" target="_blank">Repo 3</a> */}