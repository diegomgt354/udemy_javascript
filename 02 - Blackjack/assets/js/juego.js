const miModulo = (()=>{
    'use strict';
    
    /* 
    2C = Two of Clubs
    2D = Two of Diaminds
    2H = Two of Hearts
    2S = Two of Spades
    */

    let deck      = [];
    const letters = ['C','D','H','S'];
    const cardLetters = ['A','J','Q','K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const puntos = document.querySelectorAll('small');

    const divCartasJugadores = document.querySelectorAll(".divCartas");

    // funcion de inicializar el juego
    const inicializarJuego = (numjugadores = 2) =>{
        deck = crearDeck();
        puntosJugadores=[];
        for(let i=0;i<numjugadores;i++){
            puntosJugadores.push(0);// añadir elementos al final y retorna la cantidad de elementos
        }

        puntos.forEach(elem=>elem.innerText=0);
        divCartasJugadores.forEach(elem=>elem.innerHTML='');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    };
    
    
    // funcion para crear la baraja
    const crearDeck = ()=>{
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let letter of letters) {
                deck.push(i + letter);
            }     
        }
        for (let i of cardLetters) {
            for (let letter of letters) {
                deck.push(i + letter);
            }
        }
        return _.shuffle(deck);
    };

    // funcion que me pide una carta
    const pedirCarta = ()=>{
        if(deck.length === 0){
            throw 'No hay mas cartas';
        }
        return deck.pop(); // retorna el ultimo valor
    };

/*     const pedirCarta = ()=>{
        const posicion = Math.random()*deck.length;
        let elementoEliminado = deck.splice(posicion, 1); // retorna lista
        return elementoEliminado[0];
    }; */

    // funcion que retorna el valor de la carta
    const valorCarta = (carta)=>{
        const valor = carta.substring(0,carta.length-1);
        return  (isNaN(valor))?
                ((valor==='A')?11:10)
                :valor*1;
    };

    // Turno:0 primer jugador y el ultimo de la computadora
    const acumularPuntos = (carta,turno)=>{
        puntosJugadores[turno]+=valorCarta(carta);
        puntos[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta,turno)=>{
        let imgC = document.createElement('img');
        imgC.src = `assets/cartas/${carta}.png`;
        imgC.classList.add('carta');
        divCartasJugadores[turno].append(imgC);
    };

    const determinarGanador = ()=>{

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if(puntosComputadora===puntosMinimos){
                alert('Nadie gana :(');
            }else if(puntosMinimos>21){
                alert('Computadora gana.');
            }else if(puntosComputadora>21){
                alert('Jugador gana.');
            }else{
                alert('Computadora gana.');
            }
        }, 100);
    };

    // funcion de ejecucion de la computadora
    const turnoComputadora = (puntosMinimos)=>{
        let validador=true;
        let puntosComputadora=0;
        do {
            const carta = pedirCarta();
            
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
            
            crearCarta(carta,puntosJugadores.length-1);

            if(puntosMinimos>21){ validador=false; }
        } while ((puntosComputadora<puntosMinimos) && (puntosMinimos<=21) && validador);
        
        determinarGanador();
    };

    // eventos
    btnPedir.addEventListener('click',()=>{
        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta,0);

        crearCarta(carta,0);

        if(puntosJugador>21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador===21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
        
    });

    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);    
    });

    btnNuevo.addEventListener('click',()=>{

        inicializarJuego();

    });

    return {
        nuevoJuego : inicializarJuego
    };
})();
