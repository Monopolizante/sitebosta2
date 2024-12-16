import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 3 - Make the styling show up.
//Hint 1: CSS files are static files!
//Hint 2: The header and footer are partials.
//Hint 3: Add the CSS link in header.ejs


//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.get("/", (req, res) => {
  const randomMovie = "Gerador de sugestões de filmes";
  const d = new Date();
  var year = d.getFullYear();
  res.render("index.ejs" , 
    {randomMovie , year})
});

app.post("/submit", (req, res) => {
  res.render("index.ejs")
  const d = new Date();
  var year = d.getFullYear();
  const randomMovie = movie[Math.floor(Math.random()* movie.length)];
  console.log(randomMovie)
  res.render("index.ejs" , 
    {randomMovie , year ,})
  //Step 2 - Make the generate name functionality work
  //Hint: When the "Generate Name" button in index.ejs is clicked, it should hit up this route.
  //Then:
  //1. You should randomly pick an adjective from the const "adj" and a noun from const "noun",
  //scroll down to see the two arrays.
  //2. Send the index.ejs as a response and add the adjective and noun to the res.render
  //3. Test to make sure that the random words display in the h1 element in index.ejs
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const movie = [
  "La La Land",
  "Star Wars: Episode III | Revenge of the Sith",
  "JoJo Rabbit",
  "Sound Of Metal",
  "Isle of Dogs",
  "Game Night",
  "War Dogs",
  "Gone Girl",
  "NightCrawler",
  "Neighbors",
  "The Secret Life of Walter Mitty",
  "Fantastic Mr. Foxy",
  "Jarhead",
  "The Machinist",
  "American Beauty",
  "The Truman Show",
  "Sev7en",
  "Pulp Fiction",
  "Leon The Professional",
  "GoodFellas",
  "Scarface",
  "The Shining",
  "The Godfather",
  "The Godfather 2",
  "Scream",
  "Taxi Driver",
  "Fight Club",
  "Kill Bill: Vol. 1",
  "Bill & Ted's Excellent Adventure ",
  "Legally Blonde",
  "The Nice Guys",
  "Everything Everywhere All at Once",
  "Monkey Man",
  "Good Will Hunting",
  "The Terminator",
  "Do the Right Thing",
  "Donnie Darko",
  "[REC]",
  "The Rocky Horror Picture Show",
  "Trainspotting",
  "Whiplash",
  "Django Unchained",
  "Basketball Diaries",
  "Estômago",
  "Ainda estou aqui",
  "Central do Brasil",
  "O silêncio dos inocentes",
  "O Iluminado",
  "Psicose",
  "Era uma vez em Hollywood",
  "O Lobo atrás da porta",
  "Reflexões de um liquidificador",
  "As virgens suicidas",
  "O Farol",
  "Midsommar",
  "Pearl",
  "A Bruxa",
  "A Garota da Casa ao Lado",
];