function verificaPalindromo(string) {
    if (!string) return;
   return  string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("ana"))


function verificaPalindromo2(string) {
    
    if (!string) return;
    
    
    if (!string) {
       string.trim() 
    } 

    for (let i = 0; i < string.length / 2 ; i++){

        if (string[i] !== string[string.length - 1 - [i]]) return false;

        // console para debugar variaveis
        console.log(string[string.length - 1 - [i]])
         // console para debugar variaveis
        console.log(string.length / 2 + " string / 2")
         // console para debugar variaveis
        console.log(string[i] + " string [i]")
    }
    return true;
}
console.log(verificaPalindromo2("aposasopa"))