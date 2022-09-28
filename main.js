function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

const CONECTION_NAME = 'esm-gcp-study:us-central1:modern-study'; //Instance_connection_name
const DATABASE_NAME = 'web_counter_takmita'; //database_name  
const URL = 'jdbc:google:mysql://' + CONECTION_NAME + '/' + DATABASE_NAME;

const USER_NAME = 'esm'; //user_name
const PASSWORD = 'esm'; //user_password

/**
 * Write one row of data to a table.
 */
function updateOneRecord(updateCountr) {
  const connection = Jdbc.getCloudSqlConnection(URL, USER_NAME, PASSWORD);  
  const statement = connection.prepareStatement('UPDATE web_counter_takmita SET counter=?');
  
  statement.setString(1, updateCountr);
  statement.executeUpdate();
  
  statement.close();
  connection.close();
}

/**
 * read all row of data to a table.
 */
function readFromTable() {
  const connection = Jdbc.getCloudSqlConnection(URL, USER_NAME, PASSWORD);
  const statement = connection.createStatement();
  const results = statement.executeQuery('SELECT * FROM web_counter_takmita'); 
  
  // テーブルに1件のみレコードがある前提
  while (results.next()) {
    result = results.getInt('counter');
  }

  results.close();
  statement.close();
  connection.close();
  return result;
}
