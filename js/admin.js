

var admin =JSON.parse(window.localStorage.getItem('user'));
var order = window.localStorage.getItem('ordered');
document.getElementById("ordered").innerHTML = order;
document.getElementById("name").innerHTML = admin.username; 
document.getElementById("email").innerHTML = admin.useremail; 
document.getElementById("password").innerHTML = admin.userpassword;

function logoff(){
    window.localStorage.clear();
    location.replace("index.html");
}
