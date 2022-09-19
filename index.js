const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
passWordOne=document.getElementById("pass-one")
passWordTow=document.getElementById("pass-tow")


function generate(){
for (let i=0;i<characters.length; i++){
    let randomIndex11=Math.floor(Math.random()*characters.length)
    let randomIndex12=Math.floor(Math.random()*characters.length)
    let randomIndex13=Math.floor(Math.random()*characters.length)
    let randomIndex14=Math.floor(Math.random()*characters.length)
    let randomIndex15=Math.floor(Math.random()*characters.length)
    let randomIndex16=Math.floor(Math.random()*characters.length)
    let randomIndex17=Math.floor(Math.random()*characters.length)
    let randomIndex18=Math.floor(Math.random()*characters.length)


    let randomIndex21=Math.floor(Math.random()*characters.length)
    let randomIndex22=Math.floor(Math.random()*characters.length)
    let randomIndex23=Math.floor(Math.random()*characters.length)
    let randomIndex24=Math.floor(Math.random()*characters.length)
    let randomIndex25=Math.floor(Math.random()*characters.length)
    let randomIndex26=Math.floor(Math.random()*characters.length)
    let randomIndex27=Math.floor(Math.random()*characters.length)
    let randomIndex28=Math.floor(Math.random()*characters.length)
    let passTow=characters[randomIndex21]+characters[randomIndex22]+characters[randomIndex23]+characters[randomIndex24]+characters[randomIndex25]+characters[randomIndex26]+characters[randomIndex27]+characters[randomIndex28]
    let passOne=characters[randomIndex11]+characters[randomIndex12]+characters[randomIndex13]+characters[randomIndex14]+characters[randomIndex15]+characters[randomIndex16]+characters[randomIndex17]+characters[randomIndex18]
    document.getElementById("pass-one").textContent=passOne
    document.getElementById("pass-tow").textContent=passTow
    
}
}
