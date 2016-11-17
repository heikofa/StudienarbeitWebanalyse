function filterPoll(dataToBeFiltered, activeFilter) {

    var filteredData = dataToBeFiltered;

    groupCategoriesInArray(activeFilter).forEach(function (category) {

        var categoryFilter = [];
        category.forEach(function (element) {
            var filterForElement = einzelFilter[element];
            categoryFilter = categoryFilter.concat(filteredData.filter(filterForElement));

        });
        filteredData = categoryFilter;
    });

    return filteredData;
}

function groupCategoriesInArray(activeFilter) {

    var categorizedActiveFilter = [];
    window.categories.forEach(function (category) {
        var categoryArray = [];
        activeFilter.forEach(function (filter) {
            if (filter.lastIndexOf(category, 0) === 0) {
                categoryArray.push(filter);
            }
        });
        if (categoryArray.length) {
            categorizedActiveFilter.push(categoryArray);
        }
    });
    return categorizedActiveFilter;
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
        return uniXFilter("uni0", obj);
    },
    uni1: function (obj) {
        return uniXFilter("uni1", obj);
    },
    uni2: function (obj) {
        return uniXFilter("uni2", obj);
    },
    uni3: function (obj) {
        return uniXFilter("uni3", obj);
    },
    uni4: function (obj) {
        return uniXFilter("uni4", obj);
    },
    uni5: function (obj) {
        return uniXFilter("uni5", obj);
    },
    uni6: function (obj) {
        return uniXFilter("uni6", obj);
    }
};

function uniXFilter(xAsString, obj) {
    return !window.einzelFilter.be0(obj) || obj[window.uni] === window[xAsString];
}

var categories = [
    "ag",
    "be",
    "ge",
    "uni"
];