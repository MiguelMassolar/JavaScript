function calcular(tipo, valor){
    if(tipo === 'acao'){
        
        if(valor === 'c'){
            //Limpa o visor (id resultado)!
            document.getElementById('resultado').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            //Adiciona os símbolos de opereções matemáticas.
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
            
        }

    } else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}