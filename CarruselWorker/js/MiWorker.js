var i = 0;

function cambio() {
    if (++i >= 5)
        i = 1;

    postMessage(i + ".jpg");

    setTimeout("cambio()", 3000);

}

function dimeAlgo(evt) {
    if (evt.data=="PARAR") {

        self.close();

    }


}

addEventListener("message", dimeAlgo);
cambio();