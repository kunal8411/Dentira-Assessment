const router = require("express").Router();
const Amazon = require("../models/amazon");
const Flipcart = require("../models/flipcart");
const Digital = require("../models/reliance-digital");
const Chroma = require("../models/chroma");

// //GET ALL PRODUCTS
router.get("/search", async (req, res) => {
  try {
    const name = req.query.q;
    const substring = name;
    const regexPattern = new RegExp(substring, "i");
    const result = await Amazon.aggregate([
      {
        $match: {
          name: { $regex: regexPattern },
        },
      },
      {
        $lookup: {
          from: "flipcarts",
          let: { name: "$name" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $regexMatch: { input: "$name", regex: regexPattern },
                },
              },
            },
          ],
          as: "flipcart",
        },
      },
      {
        $lookup: {
          from: "chromas",
          let: { name: "$name" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $regexMatch: { input: "$name", regex: regexPattern },
                },
              },
            },
          ],
          as: "chroma",
        },
      },
      {
        $lookup: {
          from: "digitals",
          let: { name: "$name" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $regexMatch: { input: "$name", regex: regexPattern },
                },
              },
            },
          ],
          as: "digital",
        },
      },
    ]);
    return res.json({ data: result });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
