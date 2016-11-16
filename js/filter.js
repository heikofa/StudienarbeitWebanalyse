function filterPoll(dataToBeFiltered, activeFilter) {

    var filteredData = dataToBeFiltered;

    activeFilter.forEach(function (element) {
        var filterForElement = einzelFilter[element];
        filteredData = filteredData.filter(filterForElement);
    });
    return filteredData;
}

var einzelFilter = {
    ag0: function (obj) {
        return obj[window.age] === window.ag0;
    },
    ag1: function (obj) {
        return obj[window.age] === window.ag1;
    },
    ag2: function (obj) {
        return obj[window.age] === window.ag2;
    },
    ag3: function (obj) {
        return obj[window.age] === window.ag3;
    },
    ag4: function (obj) {
        return obj[window.age] === window.ag4;
    },
    ag5: function (obj) {
        return obj[window.age] === window.ag5;
    },
    gew: function (obj) {
        return obj[window.gender] === window.gew;
    },
    gem: function (obj) {
        return obj[window.gender] === window.gem;
    },
    be0: function (obj) {
        return obj[window.job] === window.be0;
    },
    be1: function (obj) {
        return obj[window.job] === window.be1;
    },
    be2: function (obj) {
        return obj[window.job] === window.be2;
    },
    be3: function (obj) {
        return obj[window.job] === window.be3;
    },
    be4: function (obj) {
        return obj[window.job] === window.be4;
    },
    be5: function (obj) {
        return obj[window.job] === window.be5;
    },
    be6: function (obj) {
        return obj[window.job] === window.be6;
    },
    uni0: function (obj) {
        return obj[window.uni] === window.uni0;
    },
    uni1: function (obj) {
        return obj[window.uni] === window.uni1;
    },
    uni2: function (obj) {
        return obj[window.uni] === window.uni2;
    },
    uni3: function (obj) {
        return obj[window.uni] === window.uni3;
    },
    uni4: function (obj) {
        return obj[window.uni] === window.uni4;
    },
    uni5: function (obj) {
        return obj[window.uni] === window.uni5;
    },
    uni6: function (obj) {
        return obj[window.uni] === window.uni6;
    }
};