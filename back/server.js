const http = require("http"); //appel du modul http
const port = process.env.PORT||5003; //definition du port 
const app = require("./app/app"); //appel de l'app
const server = http.createServer(app);//creation du serveur htpp avec fonction de l app


class Server{
    constructor(){
        this.start()
    }
    start(){
        server.listen(port,()=>{ // ecoute du port definit
        console.log("connection serveur sur "+port) //Affiche si connection ok
    })}
}

new Server;
