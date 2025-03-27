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

const posts_index = [
    {
      title: "Ciambellone",
      slug: "ciambellone",
      content: "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
      image: "../imgs/ciambellone.jpeg",
      tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      title: "Cracker alla barbabietola",
      slug: "cracker-alla-barbabeitola",
      content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                Cracker di farro
                Cracker di lupini
                Cracker allo zafferano
                Cracker ai semi`,
      image: "../imgs/cracker_barbabietola.jpeg",
      tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      title: "Pasta barbabietola e gorgonzola",
      slug: "pasta-barbabietola-e-gorgonzola",
      content: `La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso, già proposto con la torta salata alla barbabietola! Per un pranzo veloce ma gustoso, per chi ama giocare con consistenze e colori naturali in cucina, questa pasta è perfetta! La dolcezza della barbabietola smorza il gusto deciso che caratterizza questo formaggio erborinato molto amato, un'abbinata vincente e molto gustosa. Provate un nuovo condimento per la vostra pasta e sperimentate altre sfiziose varianti:
              Pasta con barbabietola e pecorino
              Gnocchi di barbabietola
              Tagliatelle alla barbabietola con asparagi`,
      image: "../imgs/pane_fritto_dolce.jpeg",
      tags: ["Primi piatti", "Ricette vegetariane"],
    },
    {
      title: "Pane fritto dolce",
      slug: "pane-fritto-dolce",
      content: `Il pane fritto dolce è la versione più antica dell'odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. Facile e veloce da realizzare, il pane fritto dolce vi riporterà con la mente ai sapori dell'infanzia… gustatelo da solo o accompagnatelo con frutta fresca e yogurt per uno spuntino tanto goloso quanto genuino!`,
      image: "../imgs/pasta_barbabietola.jpeg",
      tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
    },
    {
      title: "Torta paesana",
      slug: "torta-paesana",
      content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E' un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E' infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l'uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l'aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!`,
      image: "../imgs/torta_paesana.jpeg",
      tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
    },
  ];
  

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.type("html").send("Server Del mio blog");
})

app.get("/posts/api", (req, res) => {
    res.json(posts_index);
})

app.get("/bacheca", (req, res) =>{
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
            <h1 class="head-title">Bacheca dei Post</h1>
    `;

    for (let i = 0; i < posts.length; i++) {
        html += `<div class="posts">
         <span class="imgs-posts">
         <img src="${posts[i].src}" alt="imgs">
         </span>
         <span class=""posts-text>
         <h4>${posts[i].title}</h4>
         <p>${posts[i].content}</p>
         </span>
        </div>`;
        html += `</body></html>`;
    }

    res.status(201).type("html").send(html);
})

app.get("/posts", (req, res) => {
    // res.send("Posters");
    let html = `<!DOCTYPE html>
    <html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Posters</title>
        <link rel="stylesheet" href="extra/style.css">
    </head>
    <body>
        <h1 class="head-title">Posts</h1>
    <div class="posters-box">
    ${(() => {
        let html_posts = "";
        for (let i = 0; i < posts_index.length; i++) {
            html_posts += `<div class="posters-show">
            <span class="imgs-posts">
            <img src="${posts_index[i].image}" alt="${posts_index[i].slug}">
            </span>
        <span class="text-posts">
        <h4>${posts_index[i].title}</h4>
        <p>${posts_index[i].content}</p>
            <div class="tags-posts">
            ${posts_index[i].tags.map((element) => {
                let par_create = `<p class="tags"> ${element} </p>`;
                return par_create;
            }).join("")}
            </div>
            </span>
        </div>`;
        }
        return html_posts;
    })()}
    </div>
    </body></html>
`;

res.status(201).type("html").send(html);
})

app.post("/posts", (req, res) => {
    const { body } = req;
    console.log(">> Post Aggiunto..")
    const new_posts = body;
    posts_index.push(new_posts);
    res.status(201).send("Oggetto Aggiunto.");
})

app.delete("/posts/:id", (req, res) =>{
    const { params: id } = req;
    const index_id = parseInt(String(id.id).slice(-1));
    posts_index.splice(index_id);
    return res.send("Oggetto Rimosso");
})

// app.patch("/posts/:id", (req, res) => {
//     const { body, params: { id } } = req;
//     const id_index = parseInt(id.slice(-1));
//     console.log(id_index)
//     for (let i = 0; i < posts_index.length; i++) {
//         console.log(posts_index[i] === id_index);
//     }
//     res.status(201).send("La lista con l'oggetto richiesto è stata modificata.")
// })

app.listen(port, () => { return console.log(">> Ecco il server avviato http://localhost:3000")})