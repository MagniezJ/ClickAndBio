const mongoose = require('mongoose'); //appel de mongoose
 //appel des schema mongo db
const bcrypt=require('bcrypt'); //appel de bcrypt

class UserSchema{

    constructor(){
        this.initShema();
    }
    initShema(){
        const Schema = mongoose.Schema;
        const UserSchema = new Schema({ //creation du schéma user 
            email:String,
            Password: String,
            Nom: String,
            Prenom: String,
            Pseudo:String,
            photoprofil:String
        },{collection: "USER"}) //donnée un nom personnalisé
    
    UserSchema.pre('save',async function(next){ //middleware a faire avant chaque sauvegare
    try{ 
        const Salt=await bcrypt.genSalt(10); //cryptage par 10
        const Hash=await bcrypt.hash(this.Password,Salt); //crypter le mdp de l user
        this.Password=Hash; 
        next();
    }catch(error){ 
        next(error);
    };
}); 
    
const User = mongoose.model('user',UserSchema);
}

}


module.exports = new UserSchema(); 