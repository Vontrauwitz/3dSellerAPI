const express = require('express');
const router = express.Router();

router.get("/products", (req, res) => {
  const data = "hola mundo"
  res.send({ data })
})

//bla bla bla


module.exports = router
