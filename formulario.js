




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



