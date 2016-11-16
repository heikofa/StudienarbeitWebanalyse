function filter(dataToBeFiltered, activeFilter) {

    filteredData = dataToBeFiltered;

    activeFilter.forEach(function (element) {
        filteredData.filter(einzelFilter[element]);
    });
    return filteredData;
}

var einzelFilter = {
    ag0:function (obj) {
        return obj[age] === "13 und Jünger";
    },
    ag1:function (obj) {
        return obj[age] === "14-18";
    },
    ag2:function (obj) {
        return obj[age] === "19-23";
    },
    ag3:function (obj) {
        return obj[age] === "24-30";
    },
    ag4:function (obj) {
        return obj[age] === "31-50";
    },
    ag5:function (obj) {
        return obj[age] === "51 und älter";
    },
    gew:function (obj) {
        return obj[gender] === "weiblich";
    },
    gem:function (obj) {
        return obj[gender] === "männlich";
    },
    be0:function (obj) {
        return obj[job] === "Studium";
    },
    be1:function (obj) {
        return obj[job] === "Ausbildung";
    },
    be2:function (obj) {
        return obj[job] === "Schule";
    },
    be3:function (obj) {
        return obj[job] === "Angestellt";
    },
    be4:function (obj) {
        return obj[job] === "Selbstständig";
    },
    be5:function (obj) {
        return obj[job] === "Arbeitslos";
    },
    be6:function (obj) {
        return obj[job] === "Sonstige";
    },
    uni0:function (obj) {
        return obj[uni] === "Universität";
    },
    uni1:function (obj) {
        return obj[uni] === "Fachhochschule";
    },
    uni2:function (obj) {
        return obj[uni] === "Duale Hochschule";
    },
    uni3:function (obj) {
        return obj[uni] === "Pädagogische Hochschule";
    },
    uni4:function (obj) {
        return obj[uni] === "Musisch-künstlerische Hochschule";
    },
    uni5:function (obj) {
        return obj[uni] === "Theologische Hochschule";
    },
    uni6:function (obj) {
        return obj[uni] === "Sonstige";
    }
};