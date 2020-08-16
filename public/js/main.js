let lettersArray = [];
let numbersArray =[];


for (let i = 1; i < 9; i++) {
  document.getElementsByClassName('btn')[i].addEventListener('click', () => {
      const numbers = document.getElementsByClassName('btn')[i].value;
      const letters = document.getElementsByClassName('small')[i].innerHTML;
      lettersArray.push(letters)
      numbersArray.push(numbers)
      console.log(lettersArray);
    })
  }

const data = {
  lettersArray:lettersArray,
  numbersArray:numbersArray
}

async function send() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const res = await fetch('/', options);
  const result = await res.json()
  console.log(result);
  document.getElementById('result').innerHTML = "You are calling... " + result.result;
}
