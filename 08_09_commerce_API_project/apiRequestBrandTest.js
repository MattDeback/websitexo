onst request = require("request");
const { Pool } = require ("pg");
const pool = new Pool();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



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


app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
