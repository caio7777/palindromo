function verificaPalindromo(string) {
    if (!string) return;
   return  string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("ana"))


function verificaPalindromo2(string) {
    
    if (!string) return;
    

    for (let i = 0; i < string.length / 2 ; i++){

        if (string[i] !== string[string.length - 1 - [i]]) return false;

        // console para debugar variaveis
        console.log(string[i] + string[string.length - 1 - [i]])
         // console para debugar variaveis
     
         // console para debugar variaveis
       
    }
    return true;
}
console.log(verificaPalindromo2("agordaamaadroga"))