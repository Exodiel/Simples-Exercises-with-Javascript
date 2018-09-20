//Strings

// 1
let contarOcurrencias = (cadena, aparicion) => {
    let nuevaCadena = cadena.split('')
    let i = 0
    // puede hacerse con la función map() de igual manera
    let comparar = nuevaCadena.filter(letra => {
        if (letra === aparicion) {
            i++
        }
    })
    console.log(i)
}

contarOcurrencias("lolo","o")

// 2
let agregarIndice = cadena =>{
    let nuevaCadena = cadena.split('')
    let i = 0
    let resultado = ''
    let comparar = nuevaCadena.map(letra => {
        i++
        resultado += `${letra+(i-1)}`
    })

    console.log(resultado)
}

agregarIndice("portadora")


// Arrays

// 1

let concatenar = arr => {
    console.log(arr.join(''))
}

concatenar(["h","o","l","a"])

// 2 

let transformarATipos = tipos =>{
    let arrTipos = []
    let nuevoTipo = tipos.filter(tipo => {
        if (typeof tipo == 'string') {
            arrTipos.push("string")
        } else if (typeof tipo == 'number') {
            arrTipos.push("number")
        } else if (typeof tipo == 'object') {
            arrTipos.push("object")
        } else if (typeof tipo == 'boolean') {
            arrTipos.push("boolean")
        } else if (typeof tipo == 'function') {
            arrTipos.push("function")
        } else if (typeof tipo == 'symbol') {
            arrTipos.push("symbol")
        }else {
            console.log("No se puede agregar")
        }
    })

    console.log(arrTipos)
}

transformarATipos([function(){}, true])


// Objects

// 1

let aArrayDeValores = objeto => {
    console.log(Object.values(objeto))
}

aArrayDeValores({ a: "f", b: true})

// 2

let concatenarObj = objeto => {
    let valores = Object.values(objeto)
    console.log(valores.join(''))
}

concatenarObj({ z: "sa", x:"ra", y:"sa"})