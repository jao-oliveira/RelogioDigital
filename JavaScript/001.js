
function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    var h = data.getHours()
    var m = data.getMinutes()
    var s = data.getSeconds()
    
    //ADD 0 A ESQUERDA SEMPRE HORA, MINUTO OU SEGUNDO FOR MENOR Q 10
    if (h < 10) h = '0'+ h 
    if (m < 10) m = '0'+ m 
    if (s < 10) s = '0'+ s

    msg.innerHTML = `${h}:${m}:${s}`
    
    //ADD 0 A ESQUERDA SEMPRE Q 
    if (h >= 0 && h < 12){
        //bom dia!
        img.src = 'imagens/dia.png'
        //muda cor de fundo de acordo com horario
        document.body.style.backgroundColor = '#5c8ad8'
    } else if (h > 12 && h <18 ) {
        //boa tarde!
        img.src = 'imagens/tarde.png'
        //muda cor de fundo de acordo com horario
        document.body.style.backgroundColor = '#F0580F'
    } else{
        //boa noite!
        img.src = 'imagens/noite.png'
        //muda cor de fundo de acordo com horario
        document.body.style.backgroundColor = '#383f4d'
    }

}
//atualiza horario de 1 em 1 segundo
function initTime(){
    setInterval (carregar, 1000);

    msg.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
}   

