const Characters = ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","(",")",
                     "-","+","_","[","]","{","}",";",":",".","/","|","?","Q","W","E","R","T","Y",
                     "U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N",
                     "M","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k",
                     "l","x","c","v","b","n","m"];

  function getPassword() {
    
        
    
   
    let password = "";
    let clength = Characters.length

    while(password.length < 20){
         
        password = password.concat(Characters[randomNumber(clength)])
    }
    password = password.substring(0, 15);
    document.getElementById("password").value = password

  }

    function randomNumber(e){
        return Math.floor(Math.random() * e)
    }

   
