// const { green, red } = require("chalk");
const { db } = require("./server/db");

const User = require('./server/db/user')
const Score = require('./server/db/score')

// // sample users
// const users = [{
//   firstName: 'Jeff',
//   lastName: 'Bozo',
//   username: 'jeffbozo',
//   password: 'jeffpass',
//   email: 'jeff@bozo.com',

// }, {
//   firstName: 'Larry',
//   lastName: 'Barry',
//   username: 'larrybarry',
//   password: 'larrypass',
//   email: 'larry@bozo.com',
// }, {
//   firstName: 'greg',
//   lastName: 'gregson',
//   username: 'greggregson',
//   password: 'gregpass',
//   email: 'greg@bozo.com',
// }, {
//   firstName: 'Bob',
//   lastName: 'Bobson',
//   username: 'bobbobson',
//   password: 'bobpass',
//   email: 'bob@bozo.com',
// }]

// // sample score
// const scores = [{
//   gameName: 'rocket league',
//   scoreNumber: 5
// }, {
//   gameName: 'Arma 3',
//   scoreNumber: 23
// }]

// const seed = async () => {
//   try {
//     await db.sync({ force:true });
//     await Promise.all(users.map(user => {
//       return User.create(user);
//     }));

//     await Promise.all(scores.map(score => {
//       return Score.create(score)
//     }));
//   } catch(e) {
//     console.log(e);
//   }
// }

// module.exports = seed;

// if (require.main === module) {
//   seed()
//     .then(() => {
//       console.log(("Seeding success!"));
//       db.close();
//     })
//     .catch(err => {
//       console.error(("Oh noes! Something went wrong!"));
//       console.error(err);
//       db.close();
//     });
// }

async function seed() {
  await db.sync({force: true})
  console.log('db synced!');

  const users = await Promise.all([
    User.create({username: 'jeffmyboi', password: '123'}),
    User.create({username: 'bobmyboi', password: 'bobpass'})
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed()
  } catch(err) {
    console.log(err);
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

module.exports = seed;

