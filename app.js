
var ms = 0;
var sec = 0;
var min = 0;
var h = 0;
var click = false;

function  CommencerClick() {
    click = true;
    ms = 0;
    sec = 0;
    min = 0;
    h = 0;
}

function ContinuerClick() {
    if (ms === 0) {
        click = false;
    } else {
        click = true;
    }
}

function stopClick() {
    click = false;
}

function chronoMetre() {
    if (click) {
        ms++;
        if (ms === 10) {
            sec++;
            ms = 0;
            if (sec === 60) {
                min++;
                sec = 0;
                if (min === 60) {
                    h++;
                    min = 0;
                    if (h >= 24) {
                        h = 0;
                    }
                }
            }
        }
    }
    document.getElementById("chrono").innerHTML = h + " h : " + min + " min : " + sec + " s : " + ms + " ms ";
}

function Reprendre() {
    ms = 0;
    sec = 0;
    min = 0;
    h = 0;
    document.getElementById("list_enregistrement").innerHTML="";
    document.getElementById("chrono").innerHTML = h + " h : " + min + " min : " + sec + " s :" + ms + " ms ";
    click = false;
}

function Enregistrer()
{   
   var list_enregistrement = document.getElementById("list_enregistrement");
   list_enregistrement.innerHTML += "<li>"+h + " h : " + min + " min : " + sec + " s : " + ms + " ms "+"</li>"


}