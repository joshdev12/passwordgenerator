function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890@#$&*";
    let passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength.length; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);       
    }
    document.getElementById("password").value = password;
};

function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copyText");  
}