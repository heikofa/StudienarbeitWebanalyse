function arrayOfObjectsToExcelString(array) {

    var TAB = "\t";
    var mainString = "";
    array.forEach(function (object) {
        var objectString = object.caption + TAB +
            object.absolute + TAB +
            object.relative + "\n\r";
        mainString += objectString;
    });
    return mainString;
}