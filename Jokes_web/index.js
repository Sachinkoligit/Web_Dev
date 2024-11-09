const express=require('express')
const app=express()

const bodyparser=require('body-parser')
const { default: axios } = require('axios')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",async (req,res)=>{
    try{
        const api="https://v2.jokeapi.dev/joke/";
        var x=req.body.choice1;
        var result=api;
        var data=['Programming','Misc','Dark','Pun','Spooky','Christmas']
        var data1=data[Math.floor(Math.random()*data.length)]
        if(x=='Any'){
            result=result+data1;
        }
        else{
            x=req.body.choice11;
            result=result+x;
        }
        var lang1=req.body.language;
        var ch2=req.body.choice2;
        var ch3=req.body.choice3;
        var ch4=req.body.choice4;
        var result1 = await axios.get(result,{
            params:{
                lang:lang1,
                blacklistFlags:ch2,
                type:ch3,
                amount:Number(ch4)
            }
        });
        res.render("index.ejs", { result1: result1.data });
    }
    catch(error){
        console.log(error)
        res.render("index.ejs", {error:error});
    }

});

app.listen(3000,()=>{
    console.log("server is running..");
})