// const person = {
//   name: 'Aaren',
//   age: 28,
//   location: {
//     city: 'Toronto',
//     temp: -4
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`${publisherName}`);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state = 'Toronto' ] = address;

console.log(`You are in ${city} ${state}.`);