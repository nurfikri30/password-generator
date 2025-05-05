const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passOneEl = document.querySelector('.pass1');
const passTwoEl = document.querySelector('.pass2');
const btnPassword = document.querySelector('.btn-password')

let charlenght = characters.length;
console.log(getRandom())
 
let passOne = [];
let passTwo = [];

function getRandom(){
    return Math.floor(Math.random()*91)
}

// btnPassword.addEventListener("click",function(){
//     passOneEl.textContent = ""
//     passTwoEl.textContent = ""
//     for (let i = 0;i<15;i++){
//         let charsOne = characters[getRandom()];
//         passOneEl.textContent += charsOne

//         let charsTwo = characters[getRandom()];
//         passTwoEl.textContent += charsTwo
//     }
    
// });

btnPassword.addEventListener("click",function(){
    passOne = [];
    passTwo = [];
    for (let i = 0;i<15;i++){
        let charsOne = characters[getRandom()];
        passOne.push(charsOne)

        let charsTwo = characters[getRandom()];
        passTwo.push(charsTwo)
    }
    passOneEl.textContent = passOne.join('')
    passTwoEl.textContent = passTwo.join('')
});


let password = passOne.join('')
console.log(password)


