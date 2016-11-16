/**
 * Created by Heiko on 16.11.2016.
 */
var age = "Wie alt sind Sie?";
var gender = "Geschlecht";
var job = "Beschäftigung";
var uni = "In welcher Art von Bildungseinrichtung studieren Sie?";
var howOften = "Wie oft spielen Sie Spiele auf einem Smartphone?";
var howLong = "Wie lang spielen Sie durchschnittlich am Stück?";
var where = "Wo spielen Sie gerne Smartphone-Games?";
var type = "Welche Art von Spielen bevorzugen Sie?";
var competition = "Welche Art von Wettbewerb motiviert Sie?";
var rewardDaily = "Wie stark motivieren Sie die verschiedenen Arten von Belohnungen? [Belohnungen für tägliches Spielen]";
var rewardCurrency = "Wie stark motivieren Sie die verschiedenen Arten von Belohnungen? [Belohnungen, die Sie im Spiel weiterbringen]";
var rewardDesign = "Wie stark motivieren Sie die verschiedenen Arten von Belohnungen? [Belohnungen zur Gestaltung (z. B. ein neuer Hut)]";
var rewardOther = "Wie stark motivieren Sie die verschiedenen Arten von Belohnungen? [Sonstige Belohnungen]";
var games = "Welche der folgenden Spiele haben Sie installiert?";
var favoriteGame = "Welches Smartphone-Spiel ist Ihr Lieblingsspiel?";
var favoriteGameType = "Um welchen Spielmodus handelt es sich?";
var motivationGoals = "Wie stark motivieren Sie die folgenden Aspekte, dieses Spiel zu spielen? [Feste Ziele]";
var motivationRewards = "Wie stark motivieren Sie die folgenden Aspekte, dieses Spiel zu spielen? [Belohnungen]";
var motivationCompetition = "Wie stark motivieren Sie die folgenden Aspekte, dieses Spiel zu spielen? [Wettbewerb]";
var motivationSupport = "Wie stark motivieren Sie die folgenden Aspekte, dieses Spiel zu spielen? [Unterstützung durch Freunde]";
var motivationEmotion = "Wie stark motivieren Sie die folgenden Aspekte, dieses Spiel zu spielen? [Emotionen]";
var emotions = "Welche Emotionen fühlen Sie häufig beim Spielen dieses Spiels?";
var emotionTriggers = "Welche der folgenden Elemente rufen Ihrer Meinung nach diese Emotionen bei diesem Spiel hervor?";

var data;
$.getJSON("data/data.json", function(obj) {
    data = obj;
});


function toggleCheckbox(cb){
    changeVisibilityOfStudyIfNecessary(cb);
    showResults();
}

function changeVisibilityOfStudyIfNecessary(cb) {
    if(cb.id=="be0") {
        if (cb.checked) {
            document.getElementById("studium").style.visibility = "visible"
        } else {
            document.getElementById("studium").style.visibility = "collapse"
        }
    }
}

function showResults(){


}

function filter(data) {

    return data;
}