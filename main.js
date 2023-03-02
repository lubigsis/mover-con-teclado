window.onload = () => {
    let player = {     /*----------------creo el objeto*/
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

/*---------------Evento p/detectar cuando se aprieta una tecla del teclado--- */
onkeydown = (key) =>{
    player.mover(key.code);
}

}


