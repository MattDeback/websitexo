const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const getCategories = require("./handlers/getCategories");
const getCategoriesId = require("./handlers/getCategoriesId");
const getBrands = require("./handlers/getBrands");
const getProducts = require("./handlers/getProducts");
const getBrandsId = require ("./handlers/getBrandsId");

app.get("/", function (request, result) {
  result.send("hello Mart");
});


app.get("/categories", getCategories);
app.get("/categories/:id", getCategoriesId);
app.get("/brands", getBrands);
app.get("/products", getProducts);
app.get("/brands/:id", getBrandsId);



app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
