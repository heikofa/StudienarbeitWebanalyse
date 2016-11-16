/**
 * Created by Heiko on 16.11.2016.
 */
var filterArray = new Array;

var numberHowOften = [0,0,0,0,0,0];
var numberHowLong = [0,0,0,0];
var numberWhere = [0,0,0,0];

var data;
$.getJSON("data/data.json", function(obj) {
    data = obj;
});


function toggleCheckbox(cb){
    changeVisibilityOfStudyIfNecessary(cb);
    editFilter(cb);
    showResults();
}
function editFilter(cb){
    var index = filterArray.indexOf(cb.id)
    if(index>-1){
        filterArray.splice(index,1)
    }
    else{
        filterArray.push(cb.id)
    }
}

function changeVisibilityOfStudyIfNecessary(cb) {
    if(cb.id=="be0") {
        if (cb.checked) {
            document.getElementById("studium").style.visibility = "visible";
        } else {
            document.getElementById("studium").style.visibility = "collapse";
        }
    }
}

function showResults(){
    var filteredData = filterPoll(data, filterArray);
    resetNumbers();
    filteredData.forEach(function(element){
        if(element[howOften]===window.oft0){
            numberHowOften[0]++;
        }
        if(element[howOften]===window.oft1){
            numberHowOften[1]++;
        }
        if(element[howOften]===window.oft2){
            numberHowOften[2]++;
        }
        if(element[howOften]===window.oft3){
            numberHowOften[3]++;
        }
        if(element[howOften]===window.oft4){
            numberHowOften[4]++;
        }
        if(element[howOften]===window.oft5){
            numberHowOften[5]++;
        }

        if(element[howOften]===window.lang0){
            numberHowLong[0]++;
        }
        if(element[howOften]===window.lang1){
            numberHowLong[1]++;
        }
        if(element[howOften]===window.lang2){
            numberHowLong[2]++;
        }
        if(element[howOften]===window.lang3){
            numberHowLong[3]++;
        }
        
        if(element[howOften]===window.ort0){
            numberWhere[0]++;
        }
        if(element[howOften]===window.ort1){
            numberWhere[1]++;
        }
        if(element[howOften]===window.ort2){
            numberWhere[2]++;
        }
        
    });
    console.log(numberHowOften);
}

function resetNumbers(){
    numberHowOften = [0,0,0,0,0,0];
    numberHowLong = [0,0,0,0];
    numberWhere = [0,0,0,0];
}
