//====================
//Fonctions
//====================

//Afficher le loader
    function showLoader(){
        document.documentElement.style.setProperty("--loader-visible", "1");
    }
 
    //Cacher le loader
    function hideLoader() {
        document.documentElement.style.setProperty("--loader-visible", "0");
    }

//Gestion des erreurs GPS
    function handleError(error) {
        alert("GPS refusé ou indisponible");
    }

    function updateButtonsUI() {
        if (isRunning) {
            document.getElementById('BtnStart').disabled = true;
            document.getElementById('BtnStop').disabled = false;
        } else {
            document.getElementById('BtnStart').disabled = false;
            document.getElementById('BtnStop').disabled = true;
        }
    }

    function showCenterButton() {
        document.documentElement.style.setProperty("--btnCenter-visible", "1");
        document.getElementById('BtnCenter').style.pointerEvents = "auto";
    }

    function hideCenterButton() {
        document.documentElement.style.setProperty("--btnCenter-visible", "0");
        document.getElementById('BtnCenter').style.pointerEvents = "none";
    }

    function switchToStart() {
        document.documentElement.style.setProperty("--btnStart-visible", "1");
        document.getElementById('BtnStart').style.pointerEvents = "auto";

        document.documentElement.style.setProperty("--btnStop-visible", "0");
        document.getElementById('BtnStop').style.pointerEvents = "none";
    }

    function switchToStop() {
        document.documentElement.style.setProperty("--btnStop-visible", "1");
        document.getElementById('BtnStop').style.pointerEvents = "auto";

        document.documentElement.style.setProperty("--btnStart-visible", "0");
        document.getElementById('BtnStart').style.pointerEvents = "none";
    }