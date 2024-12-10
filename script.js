const aleatorio = Math.floor( 1 +Math.random() * 10 )
var adivinha = Number(prompt("adivinhe o numero"))
function adivinharNumber(){
if( aleatorio == adivinha) {
    alert(`Parabéns você acertou `)

}
else if( aleatorio > adivinha) {

    alert(`o numero esta muito baixo`)
}
else{ 

    alert(`esse numero esta muito alto`)
}
}

adivinharNumber()