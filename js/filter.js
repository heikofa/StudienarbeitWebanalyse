function filterPoll(dataToBeFiltered, activeFilter) {

    var filteredData = dataToBeFiltered;

    groupCategoriesInArray(activeFilter).forEach(function (answersOfOneCategory) {

        var categoryFilter = [];
        if (categoryOf(answersOfOneCategory[0]) === "uni") {
            if (activeFilter.indexOf("be0") === -1) {
                return;
            }
            categoryFilter = categoryFilter.concat(filteredData.filter(notUniFilter));
        }
        answersOfOneCategory.forEach(function (element) {
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

function constructFilter(id) {
    var category = categoryOf(id);

    if (answerIsSonstiges(id)) {
        return function (obj) {
            var objHasAnswerSonstiges = true;
            arrayOfPossibleAnswersOf(category).forEach(function (answer) {
                if (obj[window[category]] === answer) {
                    objHasAnswerSonstiges = false;
                }
            });
            return objHasAnswerSonstiges;

        }
    }


    //TODO: Sonstige
    //TODO: Multiple Answers (currently some data is added multiple times due to multiple answers

    return function (obj) {
        return obj[window[category]].indexOf(window[id]) !== -1;
    }
}

function notUniFilter(obj) {
    return !constructFilter("be0")(obj);
}
