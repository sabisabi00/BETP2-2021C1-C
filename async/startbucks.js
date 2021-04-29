
function realizarPedido(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Vanilla':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

const pedido1 = {tipo:'Vanilla', cliente: 'Juan'};
const pedido2 = {tipo:'Te helado', cliente: 'Maria'};

realizarPedido(pedido1, nombre => {
    console.log(`Pedido listo, llamar a: ${nombre}`);
});

realizarPedido(pedido2, nombre => {
    console.log(`Pedido listo, llamar a: ${nombre}`);
});

// function llamarcliente(cliente){
//     console.log(`Pedido listo, llamar a: ${cliente}`);
// }

// realizarPedido(pedido1, llamarcliente);
