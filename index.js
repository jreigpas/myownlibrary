function capitalize(sentence){
    let result = []
    let words = sentence.split(" ");
    words.forEach(word => { 
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalizedWord)         
    })
    let converted = result.join(" ");
    return converted;
}

//frase = "este es un ejemplo";
//console.log(capitalize(frase));

module.exports = capitalize;