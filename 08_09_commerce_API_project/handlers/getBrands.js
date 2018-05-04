const PG = require("pg");
const client = new PG.Client();


function getBrands (request, result) {

  client.connect();
  //result.send("hello Martin");


  client.query(
    "SELECT * FROM brands",
    [],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
      } else {
        return result.json(resultQuery.rows) ;
      }
      client.end();
    }
  );
}


module.exports = getBrands;
