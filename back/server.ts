import * as http from "http";
import App from "./app/app";
/* import { APILogger } from "./logger/api.logger"; */
require('dotenv').config()

const port = process.env.PORT || 9998;


App.set("port", port);
const server = http.createServer(App);
server.listen(port);


server.on("listening", function(): void {
    console.log("you're connected at "+port)
 });

module.exports = App;