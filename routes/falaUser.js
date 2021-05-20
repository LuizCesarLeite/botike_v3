const express = require('express');
const router = express.Router();
const axios = require('axios');
var config = require("config");

router.get('/', function (req, res, next) {
  console.log(req.headers);
  res.json({
    fruta: 'lichia'
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  axios
    .post(config.get("botUrl"),
      req.body
    )
    .then((dataBot) => {
      console.log(dataBot.data.responses);
      res.json({
        "responses": dataBot.data.responses
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    })

});

module.exports = router;