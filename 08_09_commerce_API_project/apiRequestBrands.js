const request = require("request");
const { Pool } = require ("pg");
const pool = new Pool();



function loadData(objectToInsert) {
  pool.query(
    "INSERT INTO brands (id, title) VALUES ($1, $2)",
    [objectToInsert.id, objectToInsert.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log("ok data added");
      }
    }
  );

}


function getBrands() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET",

    },
    function(error, response, result) {
      const text = JSON.parse(result);
      console.log(text[0]);

      text.map(element =>
        loadData(element)
      );
    }
  );
}

getBrands();
