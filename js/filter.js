function filterPoll(dataToBeFiltered, activeFilter) {

    var filteredData = dataToBeFiltered;

    groupCategoriesInArray(activeFilter).forEach(function (category) {

        var categoryFilter = [];
        category.forEach(function (element) {
            var filterForElement = constructFilter(element);
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
            if (categoryOf(filter) === category) {
                categoryArray.push(filter);
            }
        });
        if (categoryArray.length) {
            categorizedActiveFilter.push(categoryArray);
        }
    });
    return categorizedActiveFilter;
}

function categoryOf(id) {
    return id.substring(0, id.length - 1);
}

function answerOf(id) {
    return id[id.length - 1];
}

function constructFilter(id) {
    var category = categoryOf(id);
    // var answer = answerOf(id);

    //TODO: Sonstige
    //TODO: Multiple Answers (currently some data is added multiple times due to multiple answers

    if (category === "uni") {
        return function (obj) {
            var uniId = id;
            return !constructFilter("be0")(obj) || obj[window.uni] === window[uniId];
        }
    }

    return function (obj) {
        return obj[window[category]].indexOf(window[id]) !== -1;
    }
}

var categories = [
    "ag",
    "be",
    "ge",
    "uni",
    "oft",
    "lang",
    "ort"
];