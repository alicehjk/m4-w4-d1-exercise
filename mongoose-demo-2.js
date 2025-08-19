const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/m4w4d1');

  const CatSchema = new mongoose.Schema({ name: String });
  CatSchema.methods.speak = function() {
    return `Meow name is ${this.name}`;
  };

  const Cat = mongoose.model('Cat', CatSchema);
  const kitty = new Cat({ name: 'fluffy' });
  console.log(kitty.speak());

  await mongoose.connection.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
