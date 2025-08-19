const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/m4w4d1');
  const FruitSchema = new mongoose.Schema({ name: String });
  const Fruit = mongoose.model('Fruit', FruitSchema);

  const doc = await Fruit.create({ name: 'apple' });
  console.log(doc.name);

  await mongoose.connection.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
