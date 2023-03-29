const router = require("express").Router();
const Digital = require("../models/reliance-digital");

// STORE PRODUCT
router.post("/add-product", async (req, res) => {
  const newProduct = new Digital(req.body);
  try {
    const savesProduct = await newProduct.save();
    res.status(200).json(savesProduct);

    res.send("Product added successfully");
  } catch (error) {
    console.log("error while adding the product", error);
  }
});

module.exports = router;
