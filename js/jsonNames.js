//Categories
var categories = [
    "ag",
    "ge",
    "be",
    "uni",
    "oft",
    "lang",
    "ort",
    "art",
    "wett",
    "rewardDaily",
    "rewardCurrency",
    "rewardDesign",
    "rewardOther",
    "games",
    "favoriteGame",
    "favoriteGameType",
    "motivationGoals",
    "motivationRewards",
    "motivationCompetition",
    "motivationSupport",
    "motivationEmotion",
    "emotions",
    "emotionTriggers"
];

var ag = "Wie alt sind Sie?";
var ge = "Geschlecht:";
var be = "Beschäftigung";
var uni = "In welcher Art von Bildungseinrichtung studieren Sie?";
var oft = "Wie oft spielen Sie Spiele auf einem Smartphone?";
var lang = "Wie lang spielen Sie durchschnittlich am Stück?";
var ort = "Wo spielen Sie gerne Smartphone-Games?";
var art = "Welche Art von Spielen bevorzugen Sie?";
var wett = "Welche Art von Wettbewerb motiviert Sie?";
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

var rewardDaily0 = "Gar nicht"
var rewardDaily1 = "sehr wenig"
var rewardDaily2 = "wenig"
var rewardDaily3 = "mittel"
var rewardDaily4 = "stark"
var rewardDaily5 = "sehr stark"

var rewardCurrency0 = "Gar nicht"
var rewardCurrency1 = "sehr wenig"
var rewardCurrency2 = "wenig"
var rewardCurrency3 = "mittel"
var rewardCurrency4 = "stark"
var rewardCurrency5 = "sehr stark"

var rewardDesign0 = "Gar nicht"
var rewardDesign1 = "sehr wenig"
var rewardDesign2 = "wenig"
var rewardDesign3 = "mittel"
var rewardDesign4 = "stark"
var rewardDesign5 = "sehr stark"

var rewardOther0 = "Gar nicht"
var rewardOther1 = "sehr wenig"
var rewardOther2 = "wenig"
var rewardOther3 = "mittel"
var rewardOther4 = "stark"
var rewardOther5 = "sehr stark"

var games0 = "FIFA17";
var games1 = "Pineapple Pen";
var games2 = "Block! Hexa Puzzle";
var games3 = "Piano Tiles 2";
var games4 = "Rolling Sky";
var games5 = "Subway Surfers";
var games6 = "Clash of Clans";
var games7 = "Flippy Bottle Extreme";
var games8 = "Color Switch";
var games9 = "Roll the Ball";
var games10 = "Temple Run";
var games11 = "Pou";
var games12 = "Hill Climbing Racing";
var games13 = "Candy Crush";
var games14 = "Angry Birds";
var games15 = "Fruit Ninja";
var games16 = "Geometry Dash";
var games17 = "Cut the rope";
var games18 = "2048";
var games19 = "Doodle Jump";
var games20 = "Plants vs. Zombies";
var games21 = "Jetpack Joyride";
var games22 = "Stack";
var games23 = "Dumb ways to die";
var games24 = "Flappy Birds";
var games25 = "Bloons Tower Defense 5";
var games26 = "Keins der aufgeführten";

var favoriteGame0 = sonstige;

var favoriteGameType0 = "Strategie-Spiel (wie z.B. Clash of Clans)";
var favoriteGameType1 = "Level-Spiel (wie z.B. Angry Birds)";
var favoriteGameType2 = "One-Level-Spiel (wie z.B. Doodle Jump)";
var favoriteGameType3 = sonstige;

var motivationGoals0 = "Nicht vorhanden";
var motivationGoals1 = "sehr wenig";
var motivationGoals2 = "wenig";
var motivationGoals3 = "mittel";
var motivationGoals4 = "stark";
var motivationGoals5 = "sehr stark";

var motivationRewards0 = "Nicht vorhanden";
var motivationRewards1 = "sehr wenig";
var motivationRewards2 = "wenig";
var motivationRewards3 = "mittel";
var motivationRewards4 = "stark";
var motivationRewards5 = "sehr stark";

var motivationCompetition0 = "Nicht vorhanden";
var motivationCompetition1 = "sehr wenig";
var motivationCompetition2 = "wenig";
var motivationCompetition3 = "mittel";
var motivationCompetition4 = "stark";
var motivationCompetition5 = "sehr stark";

var motivationSupport0 = "Nicht vorhanden";
var motivationSupport1 = "sehr wenig";
var motivationSupport2 = "wenig";
var motivationSupport3 = "mittel";
var motivationSupport4 = "stark";
var motivationSupport5 = "sehr stark";

var motivationEmotion0 = "Nicht vorhanden";
var motivationEmotion1 = "sehr wenig";
var motivationEmotion2 = "wenig";
var motivationEmotion3 = "mittel";
var motivationEmotion4 = "stark";
var motivationEmotion5 = "sehr stark";

var emotions0 = "Freude";
var emotions1 = "Spaß";
var emotions2 = "Angst";
var emotions3 = "Stress";
var emotions4 = "Spannung";
var emotions5 = "Nervosität";
var emotions6 = "Frustration";
var emotions7 = "Sonstige";

var emotionTriggers0 = "Ansprechende Grafik";
var emotionTriggers1 = "Sound-Effekte";
var emotionTriggers2 = "Emotionale Musik";
var emotionTriggers3 = "Humor";
var emotionTriggers4 = "Fatal Death (Starte bei 0 nach Versagen)";
var emotionTriggers5 = "Kein festes Ende, man kann sich immer verbessern";
var emotionTriggers6 = "Wettbewerb";
var emotionTriggers7 = "Belohnungen";
var emotionTriggers8 = "Steigende Schwierigkeit";
var emotionTriggers9 = "Roter Faden";
var emotionTriggers10 = "Sonstige";


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
    return answerId.replace(/[0-9]/g, '');
    //return answerId.substring(0, answerId.length - 1);
}

function answerIndexOf(answerId) {
    return answerId[answerId.length - 1];
}

function answerIsSonstiges(answerId) {
    return window[answerId] === "Sonstige";
}