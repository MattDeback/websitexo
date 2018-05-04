const request = require("request");
const { Pool } = require ("pg");
const pool = new Pool();



function loadData(objectToInsert) {
  pool.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1, $2, $3)",
    [objectToInsert.id, objectToInsert.decathlon_id, objectToInsert.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log("ok data added");
      }
    }
  );

}


function getCategories() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET",

    },
    function(error, response, result) {
      const text = JSON.parse(result);
      console.log(text[0]);

      text.map(element =>
        loadData(element)
      }

      );
    }
  );
}

getCategories();
