var name = document.getElementById('name');
var email = document.getElementById('email');
var mensagem = document.getElementById('mensagem');
var asunto = document.getElementById('asunto');



function enviarFormulario(){
   console.log ('Enviando enviarFormulario...');

   var mensagemError = [];

   if(name.value === null || name.value === ''){
    mensagemError.push('Digite seu nome');
   }

   
   if(email.value === null || email.value === ''){
    mensagemError.push('Digite seu email');
   }

   
   if (message.value === null || menssage.value === ''){
    mensagemError.push('Digite sua mensagem');
   }

   
   if(asunto.value === null || asunto.value === ''){
    mensagemError.push('informe o asunto');
   }

   error.innerHTML = mensagemError.join(', ');
    return false;
}

//API
fetch ('https://api.github.com/users/Rosanny1/repos')
.then(resp => resp.json())
.then(resp => {
 
  var github = document.getElementById('GitHub')

  resp.map((item)=>{
   
    var li = document.createElement('li')

    var link = document.createElement('a')
   
  
    
    link.href = item.html_url

    link.innerHTML = item.html_url
   
  
    link.innerHTML= (item.name)
    link.target='_blank'

    li.append(link)
   

    github.append(li)
  })
})

document.addEventListener("DOMContentloaded", function startApp() {
  
})



