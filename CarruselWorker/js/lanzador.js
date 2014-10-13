var trabajador;

function pintar(evt) {
    document.getElementById("imagen").src = "imgs/" + evt.data;
}

function error(err) {

    alert(err.message);

}

function parar() {
    if (trabajador != undefined) {
       // trabajador.terminate();
        
        trabajador.postMessage("PARAR");

        trabajador = undefined;

    }


}

function lanzar() {
    if (typeof (Worker) !== "undefined" &&
        trabajador == undefined) {

        trabajador = new Worker("js/MiWorker.js");
        trabajador.onmessage = pintar;
        trabajador.onerror = error;

    }


}

(function() {
    document.getElementById("btnStart").addEventListener("click", lanzar);
    document.getElementById("btnStop").addEventListener("click", parar);

})();