function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        document.body.style.backgroundColor = '#f2c197'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f3a54d'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#523e61'
    }
}
