const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'TEST-3059303028461564-092022-f2dda18bb6dff04b17c65d5fd6a3d2e1-807277607'
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.post("/pagar", (req, res) => {
  let preference = {
    "items": [
      {
        title: req.body.nome,
        unit_price: Number(req.body.preco),
        quantity: 1,
      }
    ],
  };

  mercadopago.preferences.create(preference).then(function(response) {
    res.json({ id: response.body.id });
  }).catch(function(error){
      console.log(error);
  });
})

app.listen(3001);