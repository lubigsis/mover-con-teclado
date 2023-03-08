window.onload = () => {

    let player = {     /*------------------------------creo el objeto*/
        elemento : document.getElementById('playerJS'),
        topPosition : 0,
        leftPosition : 0, /*----------------------p/controlar la posici+on del div*/
        step : 25, //velocidad del div
        mover : function(direccion){  /*p/evaluar lo q' le llegue*/
            switch (direccion){
                case 'ArrowUp':
                    this.topPosition = this.topPosition - this.step;
                    this.elemento.style.top = this.topPosition + 'px'; /*p/actualizar CSS*/
                    break;

                case 'ArrowDown':
                    this.topPosition = this.topPosition + this.step;
                    this.elemento.style.top = this.topPosition + 'px'; 
                    break;

                case 'ArrowRight':
                    this.leftPosition = this.leftPosition + this.step;
                    this.elemento.style.left = this.leftPosition + 'px'; 
                    break;

                case 'ArrowLeft':
                    this.leftPosition = this.leftPosition - this.step;
                    this.elemento.style.left = this.leftPosition + 'px'; 
                    break;

                default:
                    break;
            }

        }
    };

/*-------------------------------------------Evento p/detectar cuando se aprieta una tecla del teclado--*/
onkeydown = (key) =>{
    player.mover(key.code);
}


/*-------------------------------------------------------------creo al objeto enemigo*/
let enemigo = {
    elemento : document.getElementById('enemigo'),
    topPosition : 500,
    leftPosition : 500,
    step : 13,
    playerLeftPosition : 0,
    playerTopPosition : 0,
    //-----------------------------------------métodos---------------------
    chase: function(player) {  //busco la posición del jugador, almaceno el Top y el Left
        this.playerTopPosition = player.elemento.offsetTop;
        this.playerLeftPosition = player.elemento.offsetLeft;
        
    //si ambas posiciones son diferentes,
        if(this.playerTopPosition != this.topPosition || this.playerLeftPosition != this.leftPosition) {
            //----
            if(this.playerTopPosition > this.topPosition) {
                this.topPosition = this.topPosition + this.step;
            } else {
                this.topPosition = this.topPosition - this.step;
            }
    //--------------------------------------------------ahora con el Left
            if(this.playerLeftPosition > this.leftPosition) {
                this.leftPosition = this.leftPosition + this.step;
            } else {
                this.leftPosition = this.leftPosition - this.step;
            }

            this.mover()
        }

    }, 

    //--------------------
    mover: function() {
        this.elemento.style.top = this.topPosition + 'px';
        this.elemento.style.left = this.leftPosition + 'px';
    }
}

//-------------para que lo corra cada 50ms
 let game = setInterval(() => {  
    enemigo.chase(player);
}, 50);

}






