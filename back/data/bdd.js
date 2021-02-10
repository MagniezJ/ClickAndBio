//const env=require('dotenv').config(); //appel de dotenv
const mongodb=require('mongodb');
const env = require('dotenv');
const result = env.config();
if (result.error){console.log(result.error)  }
console.log(result.parsed)

let connectionString = process.env.MONGO_URI;

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
  if (err != undefined){
    console.log("Une erreur est arrivé!")
  }else{
    if (client != undefined){
        const db=client.db();
      console.log("Connexion à MongoDB établie !");
    } else{
        console.log('error:'+err)
    }
    
    
  }
  }
)

