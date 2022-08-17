function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
}

function writeSheet(e) {
    var ss = openSheet();
    ss.getRange("A1").setValue(e)
}

function openSheet() {
    var id = "1hSnXqpaT9qjTz5FWFWtez0TuGVQcSywFhHz8KtYiaYo";
    var ss = SpreadsheetApp.openById(id).getSheetByName("シート1");
    return ss;
}

function readSheet() {
    var ss = openSheet();
    var data = ss.getRange("A1").getValue();
    return data;
}
