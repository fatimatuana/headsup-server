var express = require('express');
var router = express.Router();

const { getAllForCategory, createNewCategory, getAllCategories, setGameStatus, getGameStatus } = require("../db/dbInterface");


router.get('/categories', async function(req, res, next) {
  res.send(await getAllCategories());
});

router.get('/words/:id', async function(req, res, next) {
  console.log(req.params.id)
  res.send(await getAllForCategory(req.params.id));
});

router.post('/categories', async function(req, res, next) {
  if( req.body.name!=("" ||" ") && req.body.words.length > 0 ){
    await createNewCategory(req.body.name, req.body.words)
    res.send("ok");
  }
  res.send("nok");

});


router.post('/game', async function(req, res, next) {
  res.send(setGameStatus(req.body));
});

router.get('/game', async function(req, res, next) {
  res.send(getGameStatus());
});
module.exports = router;
