window.onload = () => {
    let player = {     /*----------------creo el objeto*/
        elemento : document.getElementById('playerJS'),
        topPosition : 0,
        leftPosition : 0, /*----------------------p/controlar la posici+on del div*/
        mover : function(direccion){  /*p/evaluar lo q' le llegue*/
            switch (direccion){
                case 'ArrowFunction':
                    console.log('Me muevo hacia arriba');
                    break;


                default:
                    break;
            }

        }
    };

/*---------------Evento p/detectar cuando se aprieta una tecla del teclado--- */
onkeydown = (key) =>{
    player.mover(key.code);
}

}


