var admin =JSON.parse(window.localStorage.getItem('user'));


const   searchBtn = document.getElementById('search-icon')
        searchBar = document.getElementById('search-bar')
        searchBtnExit = document.getElementById('search-exit');

        
searchBtn.addEventListener('click', () => {
searchBar.classList.add("open");
 })

searchBtnExit.addEventListener('click', () => {
    searchBar.classList.remove("open");
})


const   mobileBtn = document.getElementById('menu-origin')
        nav = document.getElementById('nav')
        mobileBtnExit = document.getElementById('menu-exit');

        
mobileBtn.addEventListener('click', () => {
nav.classList.add("open");
 })

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove("open");
})

if (admin.login){
    document.getElementById("login").src = "/image/user (1).svg";
    document.getElementById("login-link").href ="admin.html";
}
else{
    document.getElementById("login").src = "/image/user.svg";
}

