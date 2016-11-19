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
    document.getElementById("notNever").innerHTML = number-numbers.oft[5];

}

function handleBarChartResult(element, category) {
    var possibleAnswers = arrayOfPossibleAnswersOf(category);
    var answerSplit = element[window[category]].toString().split(";");
    if(answerSplit[0]==""){
        return;
    }
    for(var possibleAnswerIndex =0;possibleAnswerIndex< possibleAnswers.length-1;possibleAnswerIndex++){
        if(answerSplit[0]==possibleAnswers[possibleAnswerIndex]){
            numbers[category][possibleAnswerIndex]++;
            answerSplit.splice(0,1);
        }
    }
    if(answerSplit.length>0){
        numbers[category][possibleAnswers.length-1]++;
        if(typeof sonstigeAntworten[category] == "undefined"){
            sonstigeAntworten[category]=[];
        }
        sonstigeAntworten[category].push(answerSplit[0]);
    }

    // var indexLast = numbers[category].length-1;
    // numbers[category][indexLast]=filteredData.length;
    // for(var index=indexLast-1;index >=0;index--){
    //     numbers[category][indexLast] -= numbers[category][index];
    // }
    // if(category != "ort"){
    //     numbers[category][indexLast] -= numbers.oft[5];
    // }
}
function showResults() {
    var filteredData = filterPoll(data, filterArray);
    resetNumbers();
    resetSonstige();
    filteredData.forEach(function (element) {
        window.categories.forEach(function (category) {
            // if (!numbers[category]){
            //     return;
            // }
            if(barChartCategories[category]){
                handleBarChartResult(element, category);
                return;
            }
            var found = false;
            var answers = arrayOfPossibleAnswersOf(category);
            for (var index in answers) {
                if (element[window[category]] === answers[index]) {
                    numbers[category][index]++;
                    found=true;
                    break;
                }
            }
            if(!found && element[window[category]] != ""){
                numbers[category][answers.length-1]++;
                if(typeof sonstigeAntworten[category] == "undefined"){
                    sonstigeAntworten[category]=[];
                }
                sonstigeAntworten[category].push(element[window[category]]);
            }
        });
    });
    //numbers.ort[3] = filteredData.length - numbers.ort[2] - numbers.ort[1] - numbers.ort[0];
    //numbers.art[3] = filteredData.length - numbers.art[2] - numbers.art[1] - numbers.art[0] - numbers.oft[5];
    //numbers.wett[3] = filteredData.length - numbers.wett[2] - numbers.wett[1] - numbers.wett[0] - numbers.oft[5];
    console.log(numbers.ort);
    setNumberOfTotalAnswers(filteredData.length);

    window.categories.forEach(function (category) {
        var totalNumberVotes= filteredData.length;
        if(barChartCategories[category]){
            if(category!= "ort"){
                totalNumberVotes -= numbers.oft[5];
            }
            showChart(arrayOfPossibleAnswersOf(category), numbers[category], window[category], category, totalNumberVotes, barChart);
            return;
        }
        showChart(arrayOfPossibleAnswersOf(category), numbers[category], window[category], category, totalNumberVotes, pieChart);
    });
    // showChart(arrayOfPossibleAnswersOf("oft"), numbers.oft, window.oft, 'chartHowOften', pieChart);
    // showChart(arrayOfPossibleAnswersOf("lang"), numbers.lang, window.lang, 'chartHowLong', pieChart);
    // showChart(arrayOfPossibleAnswersOf("ort"), numbers.ort, window.ort, 'chartWhere', barChart);
    // showChart(arrayOfPossibleAnswersOf("art"), numbers.art, window.art, 'chartType', barChart);
    console.log(sonstigeAntworten["art"]);
}

function getPercentValue(number) {
    var returnNumber= number*10000;
    returnNumber=Math.round(returnNumber);
    return returnNumber/100 + "%";
}
function showChart(toppings, slices, title, category,numberTotalVotes, chartType) {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var chartData;
        // Set chart options
        var options = {
            'title': title,
            'width': 400,
            'height': 300
        };
        if(category=="games"){
            options["width"]=842;
            options["height"]=800;
        }

        // Instantiate and draw our chart, passing in some options.
        if (document.getElementById("chart"+category) === null) {
            var div = document.createElement("div");
            div.className = "checkboxcontainer chartcontainer";
            div.id = "chart"+category;
            document.getElementById("charts").appendChild(div);
        }
        var chart;
        switch (chartType) {
            case pieChart:
                chartData = new google.visualization.DataTable();
                chartData.addColumn('string', 'Topping');
                chartData.addColumn('number', 'Slices');
                for (var i = 0; i < slices.length; i++) {
                    chartData.addRow([toppings[i], slices[i]]);
                }
                chart = new google.visualization.PieChart(document.getElementById("chart"+category));
                break;
            case barChart:
                var chartArray=[];
                chartArray.push(["Topping","Anzahl", {role:"annotation"}]);
                for (var i = 0; i < slices.length; i++) {
                    chartArray.push([toppings[i], slices[i], getPercentValue(slices[i]/numberTotalVotes)]);
                }
                chartData= google.visualization.arrayToDataTable(chartArray);
                chart = new google.visualization.BarChart(document.getElementById("chart"+category));
                options["legend"]= { position: "none" };

                break;
        }

        chart.draw(chartData, options);

        if(typeof sonstigeAntworten[category] != "undefined"){
            var button = document.createElement("button");
            button.className = "btn btn-primary";
            button.setAttribute("onClick","showSonstige('"+category+"')");
            button.innerHTML=window.sonstige;
            button.type="button";
            button.setAttribute("data-toggle","modal");
            button.setAttribute("data-target","#modalSonstige");
            document.getElementById("chart"+category).appendChild(button);
        }
    }

}

function resetNumbers() {
    // numbers.oft = [0, 0, 0, 0, 0, 0];
    // numbers.lang = [0, 0, 0, 0];
    // numbers.ort = [0, 0, 0, 0];
    // numbers.art = [0, 0, 0, 0];
    // numbers.competition = [0, 0, 0];
    window.categories.forEach(function (category) {
        var answers = arrayOfPossibleAnswersOf(category);
        numbers[category]=Array.apply(null, Array(answers.length)).map(Number.prototype.valueOf,0);
    });
}

function resetSonstige() {
    sonstigeAntworten = {};
    document.getElementById("listSonstige").innerHTML="";
}


function showSonstige(category){
    document.getElementById("listSonstige").innerHTML="";
    sonstigeAntworten[category].sort(function (a, b) {
        return a.toString().toLowerCase().localeCompare(b.toString().toLowerCase());
    });
    for(var index in sonstigeAntworten[category]){
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML=sonstigeAntworten[category][index];
        document.getElementById("listSonstige").appendChild(li);
    }


}
/**
 * variables
 */

var filterArray = [];
var numbers = {};
var barChartCategories={
    "ort":true,
    "art":true,
    "wett":true,
    "games":true
};
var sonstigeAntworten = {};
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

