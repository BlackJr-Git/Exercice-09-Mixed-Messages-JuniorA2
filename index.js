const greetings = ["Salut", "Bonjour", "Hello", "Coucou"];
const question = ["ça va", "tu vas bien", "en forme"];
const wish = ["Passe une bonne journée", "Au revoir", "A demain"];

// let randomGreetting = Math.floor(Math.random() * greetings.length);
// let randomQuestion = Math.floor(Math.random() * question.length);
// let randomWish = Math.floor(Math.random() * wish.length);

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomMessage() {
  const array = [greetings, question, wish];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i][randomIndex(array[i])]);
  }
}

randomMessage();

// console.log(wish[randomIndex(wish)]);
// console.log();

// console.log(
//   `${greetings[randomGreetting]} ! ${question[randomQuestion]} ? Super ! ${wish[randomWish]} `
// );
