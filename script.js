var palabra = ["one","all","an","each","other","many","some","two","more","long","new",
            "little","most","good","great","right","mean","old","any","same","three","small",
            "another","large","big","even","such","kind","still","high","every","own",
            "light","left","few","next","hard","both","white","four","second","enough",
            "above","young"]; 	

const paginaJuegoOnOff = document.querySelector(".pagina-juego");
const paginaInicialOnOff = document.querySelector(".pagina-inicial");
const cartel = document.querySelector(".cartel");
const cartelWin = document.querySelector(".cartelWin");

const acierto1 = document.querySelector("#acierto1");
const acierto2 = document.querySelector("#acierto2");
const acierto3 = document.querySelector("#acierto3");
const acierto4 = document.querySelector("#acierto4");
const acierto5 = document.querySelector("#acierto5");
const acierto6 = document.querySelector("#acierto6");
const acierto7 = document.querySelector("#acierto7");
const acierto8 = document.querySelector("#acierto8");

const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
const error5 = document.querySelector("#error5");
const error6 = document.querySelector("#error6");
const error7 = document.querySelector("#error7");
const error8 = document.querySelector("#error8");

const cuerda = document.querySelector(".rectangle17");
const cabeza = document.querySelector(".ellipse9");
const cuerpo = document.querySelector(".rectangle18");
const brazoDerecho = document.querySelector(".rectangle21");
const brazoIzquierdo = document.querySelector(".rectangle22");
const piernaDerecha = document.querySelector(".rectangle20");
const piernaIzquierda = document.querySelector(".rectangle19");

let mensajeAcierto = [acierto1,acierto2,acierto3,acierto4,acierto5,acierto6,acierto7,acierto8];
let mensajeError = [error1,error2,error3,error4,error5,error6,error7,error8];
let mensajeDibujo = [cuerda,cabeza,cuerpo,brazoDerecho,brazoIzquierdo,piernaDerecha,piernaIzquierda];

function btnIniciarJuego(){
    let palabraElegida = palabra[Math.floor(Math.random() * palabra.length)];
    numeroDeLetras = palabraElegida.length;
    letrasPalabraElegida = [];
    for (i=0;i<numeroDeLetras;i++) {        
        letrasPalabraElegida.push(palabraElegida[i]);
    }

    paginaJuegoOnOff.setAttribute("style","display:flex");
    paginaInicialOnOff.setAttribute("style","display:none");

    document.querySelector("#error1").setAttribute("style","display:flex");
    document.querySelector("#error2").setAttribute("style","display:flex");
    document.querySelector("#error3").setAttribute("style","display:flex");
    document.querySelector("#error4").setAttribute("style","display:flex");
    document.querySelector("#error5").setAttribute("style","display:flex");
    document.querySelector("#error6").setAttribute("style","display:flex");
    document.querySelector("#error7").setAttribute("style","display:flex");
    
    let numeroCaracteres = palabraElegida.length
    if (numeroCaracteres == 1){
        document.querySelector("#btn1").setAttribute("style","display:flex");
    }
    if (numeroCaracteres == 2){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
    }   
    if (numeroCaracteres == 3){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
    }
    if (numeroCaracteres == 4){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
        document.querySelector("#btn4").setAttribute("style","display:flex");
    }
    if (numeroCaracteres == 5){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
        document.querySelector("#btn4").setAttribute("style","display:flex");
        document.querySelector("#btn5").setAttribute("style","display:flex");
        
    }
    if (numeroCaracteres == 6){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
        document.querySelector("#btn4").setAttribute("style","display:flex");
        document.querySelector("#btn5").setAttribute("style","display:flex");
        document.querySelector("#btn6").setAttribute("style","display:flex");
    }
    if (numeroCaracteres == 7){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
        document.querySelector("#btn4").setAttribute("style","display:flex");
        document.querySelector("#btn5").setAttribute("style","display:flex");
        document.querySelector("#btn6").setAttribute("style","display:flex");
        document.querySelector("#btn7").setAttribute("style","display:flex");
    }
    if (numeroCaracteres == 8){
        document.querySelector("#btn1").setAttribute("style","display:flex");
        document.querySelector("#btn2").setAttribute("style","display:flex");
        document.querySelector("#btn3").setAttribute("style","display:flex");
        document.querySelector("#btn4").setAttribute("style","display:flex");
        document.querySelector("#btn5").setAttribute("style","display:flex");
        document.querySelector("#btn6").setAttribute("style","display:flex");
        document.querySelector("#btn7").setAttribute("style","display:flex");
        document.querySelector("#btn8").setAttribute("style","display:flex");
    }
}

function btnNuevoJuego(){
    document.querySelector("#error1").setAttribute("style","display:none");
    document.querySelector("#error2").setAttribute("style","display:none");
    document.querySelector("#error3").setAttribute("style","display:none");
    document.querySelector("#error4").setAttribute("style","display:none");
    document.querySelector("#error5").setAttribute("style","display:none");
    document.querySelector("#error6").setAttribute("style","display:none");
    document.querySelector("#error7").setAttribute("style","display:none");
   
    document.querySelector("#btn1").setAttribute("style","display:none");
    document.querySelector("#btn2").setAttribute("style","display:none");
    document.querySelector("#btn3").setAttribute("style","display:none");
    document.querySelector("#btn4").setAttribute("style","display:none");
    document.querySelector("#btn5").setAttribute("style","display:none");
    document.querySelector("#btn6").setAttribute("style","display:none");
    document.querySelector("#btn7").setAttribute("style","display:none");
    document.querySelector("#btn8").setAttribute("style","display:none");

    for (i=0;i<7;i++) {
        mensajeDibujo[i].setAttribute("style","visibility:hidden")
    }

    for (i=0;i<8;i++) {
        mensajeAcierto[i].value = "";
    }    

    for (i=0;i<7;i++) {
        mensajeError[i].value = "";
    }

    cartel.setAttribute("style","visibility:hidden");
    cartelWin.setAttribute("style","visibility:hidden");

    cont = 0;

    btnIniciarJuego();
    flag2 = true; 
    numAciertos = 0;
    letrasIngresadas = [];
    flag4 = true;   
}

function filtroCaracter(caracter) {
    var filtro = 'abcdefghijklmnñopqrstuvwxyz';
    if (filtro.indexOf(caracter) != -1){        
        return true;
    } 
}

var cont = 0 
numAciertos = 0;
var flag2 = true;
var letrasIngresadas = [];
var flag4 = true;

document.onkeydown = (e) => {
    var flag3 = true;

    let letraIngresada = e.key;
    letrasIngresadas.push(letraIngresada);
    console.log(letrasIngresadas);

    if (flag4 == false) {
        for (i=0;i<letrasIngresadas.length-1;i++) {
            if (letraIngresada == letrasIngresadas[i]) {
                flag3 = false;
                
            }           
        }
        console.log(letraIngresada);
    }

    flag4 = false;
    

    if (flag2 == true && flag3 == true) {
            
    
        letraFiltrada = filtroCaracter(letraIngresada);
        

        if (letraFiltrada == true) {
            var flag1 = false
            for (i=0;i<numeroDeLetras;i++) {
                if (letraIngresada == letrasPalabraElegida[i]) {
                    mensajeAcierto[i].value = letraIngresada;
                    flag1 = true
                    numAciertos++;
                }
            }

            if (numAciertos == letrasPalabraElegida.length) {
                cartelWin.setAttribute("style","visibility:visible");
                flag2 = false
            }
        
            
        
            if (flag1 != true) {        
                mensajeError[cont].value = letraIngresada;        
                mensajeDibujo[cont].setAttribute("style","visibility:visible");
                cont++
            }
        
            if (cont == 7) {
                cartel.setAttribute("style","visibility:visible");
                flag2 = false
            }        
        }
    }  
        
} 


    


