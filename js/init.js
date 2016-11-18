function createCheckbox(answerID, questionID){
    var div = document.createElement("div");
    div.className="checkbox";
    var label = document.createElement("label");
    var input= document.createElement("input");
    input.type = "checkbox";
    input.id = answerID;
    input.setAttribute("onChange","toggleCheckbox(this)");
    div.appendChild(label);
    label.appendChild(input);
    label.innerHTML=label.innerHTML+window[answerID];
    document.getElementById(questionID).appendChild(div);
}

function createCheckboxes(questionID){
    var answers=arrayOfPossibleAnswersOf(questionID);
    for(var index=0;index<answers.length;index++ ){
        createCheckbox(questionID+index, questionID);
    }
}

function createCheckboxContainer(questionID) {
    var div = document.createElement("div");
    var title = document.createElement("h5");
    title.innerHTML=window[questionID];
    div.className = "checkboxcontainer";
    div.id = questionID;
    document.getElementById("checkboxes").appendChild(div);
    div.appendChild(title);
    createCheckboxes(questionID);
}

function initCheckboxes(){
    categories.forEach(function(element){
        createCheckboxContainer(element);
    });
}