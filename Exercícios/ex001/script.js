function modifica(){
    document.getElementById('texto').style.background = '#FFFF00'
}

function validaCampo(){
    var valorCampo = document.getElementById('texto').value

    if(valorCampo <= 3) {
        document.getElementById('texto').style.background = '#FF0000'
    } 
    
    if(valorCampo >= 4){
        document.getElementById('texto').style.background = '#00FF00'
    }
}