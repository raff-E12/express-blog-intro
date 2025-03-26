// Server Express e importazione delle immagini è poster in json.
// Primo server Express.

import express from "express"

const app = express();
const port = 3000;
const posts = [
    {
        src: "../imgs/ciambellone.jpeg",
        title: "Ciambellone",
        content: "Una bella Ciambella."
    },

    {
        src: "../imgs/cracker_barbabietola.jpeg",
        title: "Cracker alla Barbabietola",
        content: "Un Bel Dolce Cracker."
    },
    
    {
        src: "../imgs/pane_fritto_dolce.jpeg",
        title: "Pane Fritto Dolce",
        content: "Il Pane del Bel Mattino."
    },

    {
        src: "../imgs/pasta_barbabietola.jpeg",
        title: "Pasta Barbabietola",
        content: "Un MezzoGiorno con una Bella Pasta."
    },

    {
        src: "../imgs/torta_paesana.jpeg",
        title: "Torta Paesana",
        content: "Torta Di Paese, Con Il Ben Servito."
    }
];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.type("html").send("Server Del mio blog");
})

app.get("/bacheca", (req, res) =>{
    res.json(posts);
    let html = `
        <!DOCTYPE html>
        <html lang="it">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bacheca</title>
            <link rel="stylesheet" href="extra/style.css">
        </head>
        <body>
            <h1>Bacheca dei Post</h1>
    `;

    for (let i = 0; i < posts.length; i++) {
        html += `<div>
         <span>
         <img src="${posts[i].src}" alt="imgs">
         </span>
         <span>
         <h4>${posts[i].title}</h4>
         <p>${posts[i].content}</p>
         </span>
        </div>`;

        html += `</body></html>`;
    }

    res.status(201).type("html").send(html);
})

app.listen(port, () => { return console.log(">> Ecco il server avviato http://localhost:3000")})