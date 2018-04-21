    var socket = io();

    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    //escuchar
    socket.on('disconnect', function() {
        console.log('Perdimos conexion con el servidor');
    });

    //Los emits son para enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'Renysh',
        mensaje: 'Hola Mundo'
    }, function(resp) {
        console.log('Respuesta server:', resp);
    });

    //Escuchar informacion
    socket.on('enviarMensaje', function(mensaje) {
        console.log('Servidor:', mensaje);
    });