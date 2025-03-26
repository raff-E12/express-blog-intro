// Creazione del Server Richiesto per il blog

import express from "express"
import path  from "path"
import { fileURLToPath } from "url";

console.log(">> Express in Esecuzione..")

const server = express();
const port = 3000;
const file_url = fileURLToPath(import.meta.url); // Restituzione dell'url del file attuale rispettando il percorso in locale.
const __dirname = path.dirname(file_url); // Restituisce la cartella corrente con il file ricercato.

server.use(express.static("public"));

server.get("/", (req, res) => {
    // console.log(__dirname);
    // console.log(file_url);
    console.log(">> File Trovato...")
    let source = path.join(__dirname, "index.html");
    return res.status(201).type("html").sendFile(source);
})

server.listen(port, () =>{ return console.log(">> Ecco il server avviato http://localhost:3000") })