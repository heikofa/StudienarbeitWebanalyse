/**
 * functions
 */

function toggleCheckbox(cb) {
    //changeVisibilityOfStudyIfNecessary(cb);
    editFilter(cb);
    showResults();
}

function editFilter(cb) {
    var index = filterArray.indexOf(cb.id)
    if (index > -1) {
        filterArray.splice(index, 1)
    }
    else {
        filterArray.push(cb.id)
    }
}

function changeVisibilityOfStudyIfNecessary(cb) {
    if (cb.id == "be0") {
        if (cb.checked) {
            document.getElementById("studium").style.visibility = "visible";
        } else {
            document.getElementById("studium").style.visibility = "collapse";
        }
    }
}

function setNumberOfTotalAnswers(number) {
    document.getElementById("total").innerHTML = number;
}

function showResults() {
    var filteredData = filterPoll(data, filterArray);
    resetNumbers();
    filteredData.forEach(function (element) {
        window.categories.forEach(function (category) {

            if (!numbers[category]){
                return;
            }

            var answers = arrayOfPossibleAnswersOf(category);
            for (var index in answers) {
                if (element[window[category]] === answers[index]) {
                    numbers[category][index]++;
                }
            }
        });
    });
    numbers.ort[3] = filteredData.length - numbers.ort[2] - numbers.ort[1] - numbers.ort[0] - numbers.oft[5];
    numbers.art[3] = filteredData.length - numbers.art[2] - numbers.art[1] - numbers.art[0] - numbers.oft[5];
    console.log(numbers.oft);
    setNumberOfTotalAnswers(filteredData.length);
    showChart(arrayOfPossibleAnswersOf("oft"), numbers.oft, window.oft, 'chartHowOften', pieChart);
    showChart(arrayOfPossibleAnswersOf("lang"), numbers.lang, window.lang, 'chartHowLong', pieChart);
    showChart(arrayOfPossibleAnswersOf("ort"), numbers.ort, window.ort, 'chartWhere', barChart);
    showChart(arrayOfPossibleAnswersOf("art"), numbers.art, window.art, 'chartType', barChart);

}

function showChart(toppings, slices, title, divID, chartType) {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        // Create the data table.
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Topping');
        chartData.addColumn('number', 'Slices');
        for (var i = 0; i < slices.length; i++) {
            chartData.addRow([toppings[i], slices[i]]);
        }
        // Set chart options
        var options = {
            'title': title,
            'width': 400,
            'height': 300
        };

        // Instantiate and draw our chart, passing in some options.
        if (document.getElementById(divID) === null) {
            var div = document.createElement("div");
            div.className = "checkboxcontainer";
            div.id = divID;
            document.getElementById("charts").appendChild(div);
        }
        var chart;
        switch (chartType) {
            case pieChart:
                chart = new google.visualization.PieChart(document.getElementById(divID));
                break;
            case barChart:
                chart = new google.visualization.BarChart(document.getElementById(divID));
                break;
        }

        chart.draw(chartData, options);
    }

}

function resetNumbers() {
    numbers.oft = [0, 0, 0, 0, 0, 0];
    numbers.lang = [0, 0, 0, 0];
    numbers.ort = [0, 0, 0, 0];
    numbers.art = [0, 0, 0, 0];
    numbers.competition = [0, 0, 0];
}

/**
 * variables
 */

var filterArray = [];
var numbers = {
    oft: [],
    lang: [],
    ort: [],
    art: [],
    competition: []
};
var data;
var pieChart = 0;
var barChart = 1;
/**
 * executed code
 */

window.onload = function() {
    initCheckboxes();
};

resetNumbers();
$.getJSON("data/data.json", function (obj) {
    data = obj;
});

