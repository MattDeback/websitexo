const PG = require("pg");
const client = new PG.Client();

client.connect();

client.query(
  "SELECT * FROM my_table WHERE id = $1::text",
  ["727da8a1-2f97-4ae8-b2a7-866206e19516"],
  function(error, result) {
    if (error) {
      console.warn(error);
    } else {
      // do something with result
    }
    client.end();
  }
);
