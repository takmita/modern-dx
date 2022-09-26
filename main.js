function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

/**
 * Write one row of data to a table.
 */

function updateOneRecord(updateCountr) {
  const CONECTION_NAME = 'esm-gcp-study:us-central1:modern-study'; //Instance_connection_name
  const USER_NAME = 'esm'; //user_name
  const PASSWORD = 'esm'; //'user_password'
  const DATABASE_NAME = 'web_counter_takmita'; //database_name
   
  const URL = 'jdbc:google:mysql://' + CONECTION_NAME + '/' + DATABASE_NAME;
  const connection = Jdbc.getCloudSqlConnection(URL, USER_NAME, PASSWORD);
 
  let statement = connection.prepareStatement('UPDATE web_counter_takmita SET counter=?');

  statement.setString(1, updateCountr);
  statement.executeUpdate();

  statement.close();
  connection.close();
}

function openSheet() {
  const ID = "1hSnXqpaT9qjTz5FWFWtez0TuGVQcSywFhHz8KtYiaYo";
  const ss = SpreadsheetApp.openById(ID).getSheetByName("シート1");
  return ss;
}

function readSheet() {
  const ss = openSheet();
  const data = ss.getRange("A1").getValue();
  return data;
}
