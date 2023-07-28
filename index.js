const greetings = ["Salut", "Bonjour", "Hello", "Coucou"];
const question = ["ça va", "tu vas bien", "en forme"];
const wish = ["Passe une bonne journée", "Au revoir", "A demain"];

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

console.log(
  `${greetings[randomIndex(greetings)]} ! ${
    question[randomIndex(question)]
  } ? Super ! ${wish[randomIndex(wish)]} `
);

// function randomMessage() {
//   const array = [greetings, question, wish];

//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i][randomIndex(array[i])]);
//   }
// }

// randomMessage();
