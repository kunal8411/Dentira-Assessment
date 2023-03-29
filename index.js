const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const productSearch = require("./routes/product-search");
const amazonRoute = require("./routes/amazon");
const chromaRoute = require("./routes/chroma");
const flipcartROute = require("./routes/flipcart");
const digitalRoute = require("./routes/digital");

mongoose
  .connect("mongodb://localhost:27017/dentira")
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((error) => {
    console.log("found this error->", error);
  });

app.use(express.json());
app.use("/api", productSearch);
app.use("/api/amazon", amazonRoute);
app.use("/api/chroma", chromaRoute);
app.use("/api/flipcart", flipcartROute);
app.use("/api/digital", digitalRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server started on port 5000");
});
