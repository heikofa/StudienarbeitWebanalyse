function arrayOfObjectsToExcelString(array, question) {

    var TAB = "\t";
    var mainString = question+"\n";
    array.forEach(function (object) {
        var objectString = object.caption + TAB +
            object.absolute + TAB +
            object.relative + "\n";
        mainString += objectString;
    });
    return mainString;
}