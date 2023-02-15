//var data = new Date()
var data1 = new Date(2023, 1, 14)
var data2 = new Date(2023, 2, 23)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())
document.write('<br /><br /><hr />')

document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())

document.write(Math.abs(data1.getTime() - data2.getTime()))


/*
//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

//Adicionar/Remover dias
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><br /><hr />')

//Adicionar/Remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><br /><hr />')

//Adicionar/Remover anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><br /><hr />')
*/