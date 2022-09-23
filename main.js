function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

/**
 * Write one row of data to a table.
 */
const connectionName = 'esm-gcp-study:us-central1:modern-study'; //Instance_connection_name
const userName = 'esm'; //user_name
const password = 'esm'; //'user_password'
const databaseName = 'web_counter_takmita'; //database_name
 
const url = 'jdbc:google:mysql://' + connectionName + '/' + databaseName;
 
function updateOneRecord(e) {
  const connection = Jdbc.getCloudSqlConnection(url, userName, password);
 
  const statement = connection.prepareStatement('UPDATE web_counter_takmita SET counter=?');
  statement.setString(1, e);
  statement.executeUpdate();

  statement.close();
  connection.close();
}

function openSheet() {
  const id = "1hSnXqpaT9qjTz5FWFWtez0TuGVQcSywFhHz8KtYiaYo";
  const ss = SpreadsheetApp.openById(id).getSheetByName("シート1");
  return ss;
}

function readSheet() {
  const ss = openSheet();
  const data = ss.getRange("A1").getValue();
  return data;
}
