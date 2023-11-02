const express = require("express");
const connect = require("./config/db");
const jwt = require("jsonwebtoken");
const movie = require("./model/schema");
const auth = require("./middleware/jwt");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/check", auth, (req, res) =>{
 console.log(req.data);
 res.send("welcome to the home page");
})

app.post("/logup", (req, res) => {
  let user ={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
  }
  let token = jwt.sign({id:user.id},"nnn")
  res.send(token)
})


app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await movie.find({ email: email });
  if (user.length > 0) {
    if (user.password == password) {
      res,send("login successfullyyy");
    } else {
      res.send("login failed");
    }
  } else {
    res.send("not found");
  }
});

app.post("/signup", async (req, res) => {
  await movie.create(req.body);
  res.send("signup in successfully");
}); 
app.listen(8000, () => {
  console.log("listening on port 8000");
  connect();
});
