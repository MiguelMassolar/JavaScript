function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Por favor, verifique seus dados e tente novamente.')

    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let gênero = ''
        
        let img = document.createElement('img') //Cria uma tag <img> no arquivo
        img.setAttribute('id', 'foto') //adiciona um id para a tag!
        
    if (fsex[0].checked) {
            gênero = 'Homem'
            
            if (idade >=0 && idade <=10){ //Vai identificar uma criança!
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){ //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){ //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else { //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

 } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade <=10){ //Vai identificar uma criança!
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){ //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){ //Adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            } else { //Idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img) //adiciona um elemento, que neste caso são as imagens!
    }
}