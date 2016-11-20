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

    if(barChartCategories[category]){
        return function (obj) {
            var splitAnswers= obj[window[category]].toString().split(";");
            if(id != window[category+(arrayOfPossibleAnswersOf(category).length-1)]){
                return splitAnswers.includes(window[id]);
            }
            for(var index= 0; index< arrayOfPossibleAnswersOf(category).length-2;index++){
                splitAnswers.splice(splitAnswers.indexOf(category+index),1);
            }
            return splitAnswers.length>0;
        }
    }

    if (answerIsSonstiges(id)) {
        return function (obj) {
            var objHasAnswerSonstiges = true;
            arrayOfPossibleAnswersOf(category).forEach(function (answer) {
                if (obj[window[category]] === answer && answer !== window.sonstige) {
                    objHasAnswerSonstiges = false;
                }
            });
            return objHasAnswerSonstiges;

        }
    }



    //TODO: Sonstige
    //TODO: Multiple Answers (currently some data is added multiple times due to multiple answers

    return function (obj) {
        return obj[window[category]] === window[id];
    }
}

function notUniFilter(obj) {
    return !constructFilter("be0")(obj);
}
