let valores =[8, 1, 7, 4, 2, 9]

//console.log(valores)
/*
PRIMEIRA MANEIRA
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

SEGUNDA MANEIRA
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//TERCEIRA MANEIRA
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}