/**
 * functions
 */

function toggleCheckbox(cb) {
    changeVisibilityOfStudyIfNecessary(cb);
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

function showResults() {
    var filteredData = filterPoll(data, filterArray);
    resetNumbers();
    filteredData.forEach(function (element) {
        if (element[howOften] === window.oft0) {
            numberHowOften[0]++;
        }
        if (element[howOften] === window.oft1) {
            numberHowOften[1]++;
        }
        if (element[howOften] === window.oft2) {
            numberHowOften[2]++;
        }
        if (element[howOften] === window.oft3) {
            numberHowOften[3]++;
        }
        if (element[howOften] === window.oft4) {
            numberHowOften[4]++;
        }
        if (element[howOften] === window.oft5) {
            numberHowOften[5]++;
        }

        if (element[howLong] === window.lang0) {
            numberHowLong[0]++;
        }
        if (element[howLong] === window.lang1) {
            numberHowLong[1]++;
        }
        if (element[howLong] === window.lang2) {
            numberHowLong[2]++;
        }
        if (element[howLong] === window.lang3) {
            numberHowLong[3]++;
        }

        if (element[where] === window.ort0) {
            numberWhere[0]++;
        }
        if (element[where] === window.ort1) {
            numberWhere[1]++;
        }
        if (element[where] === window.ort2) {
            numberWhere[2]++;
        }

        if (element[type] === window.art0) {
            numberType[0]++;
        }
        if (element[type] === window.art1) {
            numberType[1]++;
        }
        if (element[type] === window.art2) {
            numberType[2]++;
        }

        if (element[competition] === window.wett0) {
            numberCompetition[0]++;
        }
        if (element[competition] === window.wett1) {
            numberCompetition[1]++;
        }
        if (element[competition] === window.wett2) {
            numberCompetition[2]++;
        }
    });
    numberWhere[3]= filteredData.length-numberWhere[2]-numberWhere[1]-numberWhere[0]-numberHowOften[5];
    numberType[3]= filteredData.length-numberType[2]-numberType[1]-numberType[0]-numberHowOften[5];
    console.log(numberHowOften);
    showChart([window.oft0,window.oft1,window.oft2,window.oft3,window.oft4,window.oft5], numberHowOften,window.howOften,'chartHowOften',pieChart);
    showChart([window.lang0,window.lang1,window.lang2,window.lang3], numberHowLong,window.howLong,'chartHowLong',pieChart);
    showChart([window.ort0,window.ort1,window.ort2,window.ort3], numberWhere,window.where,'chartWhere',barChart);
    showChart([window.art0,window.art1,window.art2,window.art3], numberType,window.type,'chartType',barChart);

}

function showChart(toppings, slices, title, divID, chartType){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        // Create the data table.
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Topping');
        chartData.addColumn('number', 'Slices');
        for(var i=0; i< slices.length; i++){
            chartData.addRow([toppings[i],slices[i]]);
        }
        // Set chart options
        var options = {'title':title,
            'width':400,
            'height':300};

        // Instantiate and draw our chart, passing in some options.
        if(document.getElementById(divID)===null){
            var div = document.createElement("div");
            div.className="checkboxcontainer";
            div.id=divID;
            document.getElementById("charts").appendChild(div);
        }
        var chart;
        switch(chartType){
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
    numberHowOften = [0, 0, 0, 0, 0, 0];
    numberHowLong = [0, 0, 0, 0];
    numberWhere = [0, 0, 0, 0];
    numberType = [0, 0, 0, 0];
    numberCompetition = [0, 0, 0];
}

/**
 * variables
 */

var filterArray = [];

var numberHowOften, numberHowLong, numberWhere, numberType, numberCompetition, data;
var pieChart=0;
var barChart=1;
/**
 * executed code
 */
resetNumbers();
$.getJSON("data/data.json", function (obj) {
    data = obj;
});

