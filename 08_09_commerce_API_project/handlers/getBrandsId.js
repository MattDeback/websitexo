const PG = require("pg");
const client = new PG.Client();


function getBrandsId (request, result) {

  client.connect();
  //result.send("hello Martin");


  client.query(
    "SELECT * FROM brands where id=$1::uuid",
    [request.params.id],
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

module.exports = getBrandsId;
