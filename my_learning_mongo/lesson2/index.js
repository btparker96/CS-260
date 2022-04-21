const mongoose = require('mongoose'); //Adding dependency

mongoose.connect('mongodb://localhost:27017/test', { //Connecting to mongo database
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Cat = mongoose.model('Cat', { //Create a collection of cats
  name: String
});

const kitty = new Cat({ //Create a document for a cat
  name: 'Morris'
});

async function work() {
  await kitty.save(); //Save the cat in the database
  console.log('meow');
  let kitties = await Cat.find(); //Find all cats in the collection cats
  console.log(kitties);
}

work();