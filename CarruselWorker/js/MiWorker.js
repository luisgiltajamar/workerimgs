var i = 0;

function cambio() {
    if (++i >= 5)
        i = 1;

    postMessage(i + ".jpg");

    setTimeout("cambio()", 3000);

}

cambio();