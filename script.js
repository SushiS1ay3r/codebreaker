function validateInput(event)
{   
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let failMsg = document.getElementById("failMsg");
    let successMsg = document.getElementById("successMsg");

    if (username !=="Caesar Cipher" || password !=="314159265")
    {
        failMsg.innerHTML = "Incorrect. Try Again :)";
        successMsg.innerHTML = "";
        return false;
    }

    else
    {
        failMsg.innerHTML = "";
        successMsg.innerHTML = "Success!"
        setTimeout(function()
        {
           window.location.href = "codebreaker.html"; 
        }, 2000);

    }

    document.querySelector("form").addEventListener("submit", validateInput)
}
