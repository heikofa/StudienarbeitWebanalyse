//Categories
var categories = [
    "ag",
    "be",
    "ge",
    "uni",
    "oft",
    "lang",
    "ort",
    "type",
    "competition"
];

var ag = "Wie alt sind Sie?";
var ge = "Geschlecht:";
var be = "Beschäftigung";
var uni = "In welcher Art von Bildungseinrichtung studieren Sie?";
var oft = "Wie oft spielen Sie Spiele auf einem Smartphone?";
var lang = "Wie lang spielen Sie durchschnittlich am Stück?";
var ort = "Wo spielen Sie gerne Smartphone-Games?";
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

//Antworten
var sonstige = "Sonstige";

var ag0 = "13 oder jünger";
var ag1 = "14-18";
var ag2 = "19-23";
var ag3 = "24-30";
var ag4 = "31-50";
var ag5 = "51 oder älter";

var ge0 = "weiblich";
var ge1 = "männlich";

var be0 = "Studium";
var be1 = "Ausbildung";
var be2 = "Schule";
var be3 = "Angestellt";
var be4 = "Selbstständig";
var be5 = "Arbeitslos";
var be6 = sonstige;

var uni0 = "Universität";
var uni1 = "Fachhochschule";
var uni2 = "Duale Hochschule";
var uni3 = "Pädagogische Hochschule";
var uni4 = "Musisch-künstlerische Hochschule";
var uni5 = "Theologische Hochschule";
var uni6 = sonstige;

var oft0 = "Mehrmals täglich";
var oft1 = "Täglich";
var oft2 = "Mehrmals pro Woche";
var oft3 = "Einmal pro Woche";
var oft4 = "Seltener";
var oft5 = "Nie";

var lang0 = "Gar nicht";
var lang1 = "Kurz (wenige Minuten)";
var lang2 = "Mittel (bis 30 Minuten)";
var lang3 = "Länger";

var ort0 = "Zuhause";
var ort1 = "Unterwegs (z.B. im ÖPNV)";
var ort2 = "In der Schule/Hochschule/Auf der Arbeit";
var ort3 = sonstige;

var art0 = "Strategie-Spiele (wie z.B. Clash of Clans)";
var art1 = "Level-Spiele (wie z.B. Angry Birds)";
var art2 = "One-Level-Spiele (wie z.B. Doodle Jump)";
var art3 = sonstige;

var wett0 = "Konfrontation mit eigenem Highscore";
var wett1 = "Leaderboards mit anderen Spielern";
var wett2 = "Wettbewerb motiviert mich nicht";
var wett3 = sonstige;


function arrayOfPossibleAnswersOf(category) {
    var arrayOfAnswers = [];
    var index = 0;
    while (true) {
        var potentialAnswer = window[category + index];
        if (!potentialAnswer) {
            return arrayOfAnswers;
        }
        arrayOfAnswers.push(potentialAnswer);
        index++;
    }
}

function categoryOf(answerId) {
    return answerId.substring(0, answerId.length - 1);
}

function answerIndexOf(answerId) {
    return answerId[answerId.length - 1];
}

function answerIsSonstiges(answerId) {
    return window[answerId] === "Sonstige";
}