const greetings = ["Salut", "Bonjour", "Hello", "Coucou"];
const question = ["ça va", "tu vas bien", "en forme"];
const wish = ["Passe une bonne journée", "Au revoir", "A demain"];

let randomGreetting = Math.floor(Math.random() * greetings.length);
let randomQuestion = Math.floor(Math.random() * question.length);
let randomWish = Math.floor(Math.random() * wish.length);

console.log(
  `${greetings[randomGreetting]} ! ${question[randomQuestion]} ? Super ! ${wish[randomWish]} `
);
