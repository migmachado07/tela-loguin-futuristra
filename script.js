function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    
    if (username === "jianelinda" && password === "12345") {
        alert("✅ Login bem-sucedido! Bem-vindo, " + username + "!");
        window.location.href = "principal.html"; 
    }
    
    else if (username === "admin" && password !== "12345" && password !== "") {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
   
    else if (username !== "admin" && username !== "" && password === "12345") {
        errorMessage.textContent = "Usuário não encontrado.";
    }
    
    else if (username === "" && password !== "") {
        errorMessage.textContent = "O campo de usuário é obrigatório.";
    }
   
    else if (username !== "" && password === "") {
        errorMessage.textContent = "O campo de senha é obrigatório.";
    }
   
    else if (username === "" && password === "") {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
    }
    
    else {
        errorMessage.textContent = "Erro de conexão com o servidor. Tente novamente.";
    }
}
