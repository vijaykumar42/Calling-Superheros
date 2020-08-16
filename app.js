const express = require("express");
const bodyParser = require("body-parser");
require('lodash.combinations');
let _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render('index.ejs')
});


app.post('/', (req, res) => {
  const data = req.body;
  const str = data.lettersArray.toString().replace(/,/g, "");
  const strArr = data.lettersArray.toString().replace(/,/g, "").split("");
  let leng = data.numbersArray.length;
  console.log(leng);

  const superHeros = ['SUPERMAN', 'IRONMAN', 'THOR', 'HULK', 'FLASH', 'ROBIN', 'BATMAN', 'HELLBOY', 'BLADE', 'ANTMAN'];

  let combinations = _(str).combinations(leng).map(v => _.join(v, '')).value();
  console.log(combinations);

  findCommonElement(superHeros, combinations)

  function findCommonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {

      for (let j = 0; j < array2.length; j++) {

        if (array1[i] === array2[j]) {
          console.log(array1[i] + "  " + array2[j]);
          const result = array2[j];
          res.json({
            result: result
          })
        }
      }
    }
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server is running')
})
