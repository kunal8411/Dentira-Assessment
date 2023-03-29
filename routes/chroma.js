const router = require("express").Router();

const Chroma = require("../models/chroma");

// STORE PRODUCT
router.post("/add-product", async (req, res) => {
  const newProduct = new Chroma(req.body);
  try {
    const savesProduct = await newProduct.save();
    res.status(200).json(savesProduct);

    res.send("Product added successfully");
  } catch (error) {
    console.log("error while adding the product", error);
  }
});

module.exports = router;
