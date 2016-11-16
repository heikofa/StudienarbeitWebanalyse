/**
 * Created by Heiko on 16.11.2016.
 */
var filterArray = new Array;

var numberHowOften = [0,0,0,0,0,0];
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
}
