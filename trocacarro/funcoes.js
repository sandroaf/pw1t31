function enviaMsg() {
  
    var msg = "";
    var nome = document.getElementById("fnome").value; 
    var fone = document.getElementById("ffone").value;
    var email = document.getAnimations("femail").value;
    var text = document.getElementById("ftext").value;
    msg = "Contribuição: "+  text + "%0A%0APor: " + nome + " - " + fone + " - " + "email";
    link = "https://web.whatsapp.com/send/?phone=47999689513&text=" + msg;
    window.open(link,"_blank");
    return false;
}