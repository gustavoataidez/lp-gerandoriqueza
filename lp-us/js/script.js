function detectarDispositivo() {
    const dispositivoMovel = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (dispositivoMovel) {
        // Se for um dispositivo móvel, redireciona para a página mobile.html
        window.location.href = "indexm.html";
    }
}

window.onload = function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0, n = links.length; i < n; i++) {
        var href = links[i].href.trim() +
                (links[i].href.indexOf("?") > 0 ? '&' : '?') +
                document.location.search.replace('?', '').toString();
        links[i].href = href;
    }
}

