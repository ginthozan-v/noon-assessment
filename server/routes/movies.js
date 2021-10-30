const express = require("express");
const movieModel = require("../models/movieModel");
const router = express.Router();

router.get("/favorite", async (req, res) => {
  await movieModel
    .find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })
    .clone()
    .catch(function (err) {
      console.log("get err >>", err);
    });
});

router.post("/favorite", async (req, res) => {
  const body = req.body;

  await movieModel.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("err >>>", err);
    } else {
      res.status(201).send(data);
      console.log("completed success");
    }
  });
});

router.delete("/favorite/:id", (req, res) => {
  const ID = req.params.id;
  try {
    movieModel.remove({ movie_id: ID }, (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log("err >>>", err);
      } else {
        res.status(201).send(data);
        console.log("deleted success");
      }
    });
  } catch (err) {
    console.log("delete err >>>", err);
  }
});

module.exports = router;
