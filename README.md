<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sade Chat</title>

<style>
body{
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background-color:#ece5dd;
}

/* Header */
.header{
    background-color:#075e54;
    color:white;
    padding:15px;
    text-align:center;
    font-size:20px;
    font-weight:bold;
}

/* Chat Area */
.chat-container{
    height:75vh;
    overflow-y:auto;
    padding:15px;
    display:flex;
    flex-direction:column;
}

/* Message Styles */
.message{
    max-width:70%;
    padding:10px 15px;
    margin:5px 0;
    border-radius:10px;
    font-size:14px;
}

.sent{
    align-self:flex-end;
    background-color:#dcf8c6;
}

.received{
    align-self:flex-start;
    background-color:white;
}

/* Input Area */
.input-area{
    position:fixed;
    bottom:0;
    width:100%;
    display:flex;
    background:white;
    padding:10px;
}

.input-area input{
    flex:1;
    padding:10px;
    border-radius:20px;
    border:1px solid #ccc;
    outline:none;
}

.input-area button{
    background:#25d366;
    border:none;
    color:white;
    padding:10px 15px;
    margin-left:10px;
    border-radius:50%;
    cursor:pointer;
    font-weight:bold;
}

</style>
</head>

<body>

<div class="header">Sade</div>

<div class="chat-container" id="chat"></div>

<div class="input-area">
    <input type="text" id="messageInput" placeholder="Andika ujumbe...">
    <button onclick="sendMessage()">➤</button>
</div>

<script>
function sendMessage(){
    let input = document.getElementById("messageInput");
    let messageText = input.value.trim();
    if(messageText === "") return;

    let chat = document.getElementById("chat");

    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message","sent");
    messageDiv.innerText = messageText;

    chat.appendChild(messageDiv);

    chat.scrollTop = chat.scrollHeight;

    input.value = "";

    // Automatic reply (demo)
    setTimeout(()=>{
        let reply = document.createElement("div");
        reply.classList.add("message","received");
        reply.innerText = "Ujumbe wako umepokelewa ✔";
        chat.appendChild(reply);
        chat.scrollTop = chat.scrollHeight;
    },1000);
}
</script>

</body>
</html>
