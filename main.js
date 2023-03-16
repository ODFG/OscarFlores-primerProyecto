// Bienvenida a la pàgina
alert('Bienvenido a Playeras to Go!')

const comprarProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        producto = prompt('¿Quieres comprar playera negra, blanca o roja?')
        cantidad = parseInt(prompt('¿Cuántas quieres comprar?'))

        let cantidadValidada = validarCantidad(cantidad)

        switch (producto) {
            case 'negra':
                precio = 700
                break
            case 'blanca':
                precio = 600
                break
            case 'ambos' :
                precio = 500
                break
            default :
                alert('Alguno de los datos ingresador no es correcto!')
                preccio = 0
                cantidad = 0
                break
        }

        subtotal += precio * cantidadValidada

        seguirComprando = confirm('¿Desea seguir comprando?')

    } while (seguirComprando)

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        alert('Debe agregar una cantidad válida!')
        cantidad = parseInt(prompt('¿Cuántas quieres comprar?'))
    }

    return cantidad

};

const aplicarDescuento = (subtotal) => {
    const descuento = 0.80

    if  (subtotal >= 5000) {
        return subtotal * descuento
    } else {
        return subtotal
    }
};

const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Quieres envío a domicilio?')

    if (quiereEnvio && subtotal >=3000) {
        alert('Tienes envío gratis. El total de la compra es: $'+subtotal)
    } else if (quiereEnvio && subtotal < 3000) {
        subtotal += 1000
        alert('El envío cuesta $500. El total mas envío es: $'+subtotal)
    } else  {
        alert('El total de tu compra es: $'+subtotal)
    }

    return subtotal

};

const mostrarDetalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de $'+precioFinal+' . Gracias por su compra!')
};

const subtotal = comprarProducto ()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio (subtotalConDescuento)

mostrarDetalleDeCompra (precioFinal)


