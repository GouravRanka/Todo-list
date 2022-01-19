import express from 'express'
import connection from './Database/Db.js';
import signupuser from './Calls/Calls.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { loginuser } from './Calls/Calls.js';


const app = express();
const port = 9000;
app.use(express());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.listen(port , ()=>
{
    console.log("server creatred",port)
})
app.get('/',()=>
{
    console.log("backenfd chalgya")
})
app.post('/signup',signupuser);
app.post('/login',loginuser);
connection();