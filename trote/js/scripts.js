function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let Mascote, Homenagem, Leite, kit, suplemento, soma, equipe, sangue
    Mascote = Number(document.getElementById("Mascote").value )
    Homenagem = Number(document.getElementById("Homenagem").value)
    Leite = Number(document.getElementById("Leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value) 
    soma = Mascote + Homenagem + (2 * Number(Leite))
    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        if(kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10) * 15)
        }
        if (sangue >= 97){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
    }
    else if (equipe == "Preta"){
        if(sangue >=52){

        }
    }
    else if (equipe == "Roxa"){

    }
    else if (equipe == "Verde"){

    }
    else{

    }
    sangue = Number(document.getElementById("sangue").value)
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
     
}