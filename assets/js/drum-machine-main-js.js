function playDrumMachineLetters(str) {
    let displayDrumMachineAudioName = document.getElementById('display');
    
    if (str === "q" || str === "Q") {
        displayDrumMachineAudioName.innerHTML = "Bass Drum";
    } else if (str === "w" || str === "W") {
        displayDrumMachineAudioName.innerHTML = "Cow Bell";
    } else if (str === "e" || str === "E") {
        displayDrumMachineAudioName.innerHTML = "Crash 1";
    } else if (str === "a" || str === "A") {
        displayDrumMachineAudioName.innerHTML = "Crash 2";
    } else if (str === "s" || str === "S") {
        displayDrumMachineAudioName.innerHTML = "HHOPEN 2";
    } else if (str === "d" || str === "D") {
        displayDrumMachineAudioName.innerHTML = "HICONGA";
    } else if (str === "z" || str === "Z") {
        displayDrumMachineAudioName.innerHTML = "SNARE 1";
    } else if (str === "x" || str === "X") {
        displayDrumMachineAudioName.innerHTML = "TAMB 1";
    } else if (str === "c" || str === "C") {
        displayDrumMachineAudioName.innerHTML = "TOM 1";
    } else {
        alert("The button you press on the Drum Machine is not available.");
    }

    var audioID = document.getElementById(str);
    audioID.play();
}

window.document.onkeyup = function(event) {
    let keyPress = event.key;
    if (keyPress === "q" || keyPress === "Q") {
        playDrumMachineLetters('Q');
    } else if (keyPress === "w" || keyPress === "W") {
        playDrumMachineLetters('W');
    } else if (keyPress === "e" || keyPress === "E") {
        playDrumMachineLetters('E');
    } else if (keyPress === "a" || keyPress === "A") {
        playDrumMachineLetters('A');
    } else if (keyPress === "s" || keyPress === "S") {
        playDrumMachineLetters('S');
    } else if (keyPress === "d" || keyPress === "D") {
        playDrumMachineLetters('D');
    } else if (keyPress === "z" || keyPress === "Z") {
        playDrumMachineLetters('Z');
    } else if (keyPress === "x" || keyPress === "X") {
        playDrumMachineLetters('X');
    } else if (keyPress === "c" || keyPress === "C") {
        playDrumMachineLetters('C');
    } else {
        alert("The button you press on the Drum Machine is not available.");
    }
}

function switchOnDrumMachine() {
    alert("Turn On The Drum Pad");

    document.getElementById("drum-pad-1").disabled = false;
    document.getElementById("drum-pad-2").disabled = false;
    document.getElementById("drum-pad-3").disabled = false;
    document.getElementById("drum-pad-4").disabled = false;
    document.getElementById("drum-pad-5").disabled = false;
    document.getElementById("drum-pad-6").disabled = false;
    document.getElementById("drum-pad-7").disabled = false;
    document.getElementById("drum-pad-8").disabled = false;
    document.getElementById("drum-pad-9").disabled = false;

    document.getElementById("switch-on").disabled = true;
    document.getElementById("switch-off").disabled = false;
}

function switchOffDrumMachine() {
    alert("Turn Off The Drum Pad");
    
    document.getElementById("drum-pad-1").disabled = true;
    document.getElementById("drum-pad-2").disabled = true;
    document.getElementById("drum-pad-3").disabled = true;
    document.getElementById("drum-pad-4").disabled = true;
    document.getElementById("drum-pad-5").disabled = true;
    document.getElementById("drum-pad-6").disabled = true;
    document.getElementById("drum-pad-7").disabled = true;
    document.getElementById("drum-pad-8").disabled = true;
    document.getElementById("drum-pad-9").disabled = true;
    
    document.getElementById("switch-off").disabled = true;
    document.getElementById("switch-on").disabled = false;
}

/* function playAudioLetterQ(str) {
    var audioLetterQ = document.getElementById(str);
    audioLetterQ.play();
} */

/* function playAudioLetterW() {
    var audioLetterW = document.getElementById("W");
    audioLetterW.play();
}

function playAudioLetterE() {
    var audioLetterE = document.getElementById("E");
    audioLetterE.play();
}

function playAudioLetterA() {
    var audioLetterA = document.getElementById("A");
    audioLetterA.play();
}

function playAudioLetterS() {
    var audioLetterS = document.getElementById("S");
    audioLetterS.play();
}

function playAudioLetterD() {
    var audioLetterD = document.getElementById("D");
    audioLetterD.play();
}

function playAudioLetterZ() {
    var audioLetterZ = document.getElementById("Z");
    audioLetterZ.play();
}

function playAudioLetterX() {
    var audioLetterX = document.getElementById("X");
    audioLetterX.play();
}

function playAudioLetterC() {
    var audioLetterC = document.getElementById("C");
    audioLetterC.play();
} */