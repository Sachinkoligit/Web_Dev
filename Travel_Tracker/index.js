import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3001;
const db=new pg.Client({
  host:"localhost",
  database:"world",
  port:5432,
  password:"root",
  user:"postgres"
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let len;
let result;
let countries=[];
app.get("/", async (req, res) => {
  len=0;
  try{
    result=await db.query("Select country_code from visited_countries");
    result.rows.forEach((country)=>{
      countries.push(country.country_code);
      len++;
    })
    res.render("index.ejs",{countries:countries,total:len})
  }
  catch(error){
    console.log(error.message);
  }
});

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

app.post("/add",async (req,res)=>{
  var x=req.body.country;
  x=toTitleCase(x);
  console.log(x);
  let y=await db.query('SELECT COUNT(*) FROM country WHERE country_name = $1',[x]);

  try{
    var y2=await db.query('select country_code from country where country_name=$1',[x]);
    y2=y2.rows[0].country_code;
  }catch(error){
    res.render("index.ejs",{countries:countries,total:len,error:"Country not exist."})
  }
  
  var y1=await db.query('select count(*) from visited_countries where country_code=$1',[y2]);

  let z=Number(y.rows[0].count);

  let z1=Number(y1.rows[0].count);

  try{
    if(z>0&&z1==0){
      db.query('insert into visited_countries (country_code) values($1)',[y2]);
      res.redirect("/");
    }else{
      res.render("index.ejs",{countries:countries,total:len,error:"Country already exist."})
    }
  }catch(error){
    console.log("error.");
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
