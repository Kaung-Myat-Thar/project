var login = false;

function loginbtn(){
    var nameStored = "Kaung Myat Thar";
    var emailStored = "14kkaung2@gmail.com";
    var passwordStored = "RWD-1223";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if ( name != nameStored && email == emailStored && password == passwordStored){
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="wrong name";
    }
    else if( name != nameStored && email != emailStored && password == passwordStored){
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="wrong name";
        
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="wrong email";
    }
    else if( name != nameStored && email == emailStored && password != passwordStored){
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="wrong name";

        document.getElementById("password").value="";
        document.getElementById("password").placeholder="wrong password";
    }
    else if( name == nameStored && email != emailStored && password == passwordStored){
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="wrong email";
    }

    else if( name == nameStored && email== emailStored && password != passwordStored){
        document.getElementById("password").value="";
        document.getElementById("password").placeholder="wrong password";
    }

    else if ( name == nameStored && email != emailStored && password != passwordStored){
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="wrong email";

        document.getElementById("password").value="";
        document.getElementById("password").placeholder="wrong password";
    }
    else if( name != nameStored && email != emailStored && password != passwordStored){
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="wrong name";

        document.getElementById("email").value="";
        document.getElementById("email").placeholder="wrong email";

        document.getElementById("password").value="";
        document.getElementById("password").placeholder="wrong password";
    }
    else{
        const person = {
            username : name ,
            useremail : email,
            userpassword : password,
            login: true,
        }
        window.localStorage.setItem('user', JSON.stringify(person));
        location.replace("/admin.html");
    }
}

