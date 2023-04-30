const express = require('express');
const monk = require('monk');
const cors = require('cors');


const server = express();

server.use(express.json());
server.use(cors());

const db = monk('mongodb://localhost:27017/Car-rental-DataBase')

db.then(()=>{console.log("this is connected")})

const usersauthdatas = db.get("usersauthdatas");

server.get('/login',async(req,res)=>{
        try{
            const users = await usersauthdatas.find({});
            res.status(200).json(users)
        }
        catch(err){
            res.status(409).json({error:err.message})
        }
})

server.post('/signup',async(req,res)=>{
  const { name, email, password } = req.body;
  console.log(password)
  try {
    const existingUser = await usersauthdatas.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }
    const newUser = {
      name:name,
      email:email,
      password:password
    }
    const createdUser =  await usersauthdatas.insert(newUser);
      res.status(200).json(createdUser);
  }
  catch(err){
        res.status(500).json({err : err.message})
  }
})

server.listen(5000)