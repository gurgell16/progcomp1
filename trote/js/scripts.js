function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let Mascote, Homenagem, Leite, kit, suplemento, soma, equipe, sangue
    // recupera o valor do mascote digitado pelo usuário
    Mascote = Number(document.getElementById("Mascote").value )
    // recupera o valor da homenagem digitado pelo usuário
    Homenagem = Number(document.getElementById("Homenagem").value)
    // recupera a qtde de litros de leite
    Leite = Number(document.getElementById("Leite").value)
     // recupera a qtde avulsa de kits de alimentação
    kit = Number(document.getElementById("kit").value)
    // recupera a qtde avulsa de suplemento 
    suplemento = Number(document.getElementById("suplemento").value) 
    // calcular a soma parcial
    soma = Mascote + Homenagem + (2 * Number(Leite))
    // vamos calcular a pontuacao considerando metas de kit e supl
    equipe = document.getElementById("equipe").value
    // doação de sangue
    sangue = Number(document.getElementById("sangue").value)
    if (equipe == "Laranja"){
        // verifica kit e suplemento
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