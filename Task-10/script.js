function login(){
var email=document.getElementById("email").value;
var parol=document.getElementById("parol").value;

if(email=="aysnmehdiyeva521@gmail.com"){
    document.getElementById("email").style.background="#dfe4ea";
}

else{
    document.getElementById("email").style.background="#ff5e57";
}

if(parol=="12345"){
    document.getElementById("parol").style.background="#dfe4ea";
}

else{
    document.getElementById("parol").style.background="#ff5e57";
}

}