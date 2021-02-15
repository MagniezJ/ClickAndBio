
const mongoose = require('mongoose');
const env = require('dotenv');
const result = env.config();
mongoose.Promise = global.Promise;

class Mongo {
  constructor(){
    this.init()
  }
  init(){
  mongoose.connect(process.env.MONGO_URI, { //connection a la bdd
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection
    .once('open', () => console.log("You're connected to mongodb !")) //quand bdd connecter faire:
    .on('error', (error) => { //sinon afficher warning+error
      console.warn('Warning', error);
    });
}
}
new Mongo()
/* console.log(dbb) */