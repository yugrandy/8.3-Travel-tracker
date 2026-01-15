import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"123456",
  port:5432
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(){
  const db = db.query("SELECT country_code FROM visited_countries")
  let countries = [];
  
  result.push.forEach((country) =>{
    countries.push{country.country_code}
  });
  return countries;
}

app.get("/", async (req, res) => {
 const countries = await checkVisited
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
