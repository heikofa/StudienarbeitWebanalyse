function filterPoll(dataToBeFiltered, activeFilter) {

    filteredData = dataToBeFiltered;

    activeFilter.forEach(function (element) {
        filteredData.filter(einzelFilter[element]);
    });
    return filteredData;
}

var einzelFilter = {
    ag0: function (obj) {
        return obj[window.age] === "13 und Jünger";
    },
    ag1: function (obj) {
        return obj[window.age] === "14-18";
    },
    ag2: function (obj) {
        return obj[window.age] === "19-23";
    },
    ag3: function (obj) {
        return obj[window.age] === "24-30";
    },
    ag4: function (obj) {
        return obj[window.age] === "31-50";
    },
    ag5: function (obj) {
        var age = obj[window.age];
        return age === "51 und älter";
    },
    gew: function (obj) {
        return obj[window.gender] === "weiblich";
    },
    gem: function (obj) {
        return obj[window.gender] === "männlich";
    },
    be0: function (obj) {
        return obj[window.job] === "Studium";
    },
    be1: function (obj) {
        return obj[window.job] === "Ausbildung";
    },
    be2: function (obj) {
        return obj[window.job] === "Schule";
    },
    be3: function (obj) {
        return obj[window.job] === "Angestellt";
    },
    be4: function (obj) {
        return obj[window.job] === "Selbstständig";
    },
    be5: function (obj) {
        return obj[window.job] === "Arbeitslos";
    },
    be6: function (obj) {
        return obj[window.job] === "Sonstige";
    },
    uni0: function (obj) {
        return obj[window.uni] === "Universität";
    },
    uni1: function (obj) {
        return obj[window.uni] === "Fachhochschule";
    },
    uni2: function (obj) {
        return obj[window.uni] === "Duale Hochschule";
    },
    uni3: function (obj) {
        return obj[window.uni] === "Pädagogische Hochschule";
    },
    uni4: function (obj) {
        return obj[window.uni] === "Musisch-künstlerische Hochschule";
    },
    uni5: function (obj) {
        return obj[window.uni] === "Theologische Hochschule";
    },
    uni6: function (obj) {
        return obj[window.uni] === "Sonstige";
    }
};