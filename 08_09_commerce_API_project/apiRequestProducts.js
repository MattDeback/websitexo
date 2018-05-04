const request = require("request");
const { Pool } = require ("pg");
const pool = new Pool();


function getProducts() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET",

    },

    function(error, response, result) {
      if (error) {
        console.log(error)
      } else {
        const text = JSON.parse(result);
        //console.log(text[0]);
        // text.map(function(element){
        //   return loadData(element);
        // })
        text.map(element => loadData(element));
        // text.map(loadData);
      }
    }
  );
}




function loadData(objectToInsert) {

  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [objectToInsert.id, objectToInsert.decathlon_id, objectToInsert.title, objectToInsert.description, objectToInsert.brand_id, objectToInsert.min_price, objectToInsert.max_price, objectToInsert.crossed_price, objectToInsert.percent_reduction, objectToInsert.image_path, objectToInsert.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        //console.log("ok data added");
      }
    }
  );

}


getProducts();
