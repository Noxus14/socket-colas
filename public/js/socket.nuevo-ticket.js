//Comando para establecer  la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Usuario Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);

});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);

    });
});