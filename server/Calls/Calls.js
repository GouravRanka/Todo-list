import usersignup from "../Schema/UserSchema.js";
const signupuser = async(req,res)=>
{
    try{
const data = req.body;
const exist = await usersignup.findOne({username:data.username})

if(exist)
{
  console.log("userr already exist")
  res.send("user already exist")
  
}
else{
console.log("request reached to backend with data",data)
const newuser = new usersignup(data)

await newuser.save();
res.status(201).send("data saved successfully")
}
    }
    catch(error)
    {
        console.log(error.message)
    
    }
}
export const loginuser = async (req,res)=>
{
const data = req.body;
const {username,password}= data
console.log(data);
try{
const newdata =await usersignup.findOne({username:username,password:password})
if(newdata)
{
    let response = res.status(201).json(`${username} exist `);
    console.log("user exist");
}
else
{
    res.status(401).send("user doesnot exist");
    console.log("user doesnt exist");
}
}
catch(error)
{
    console.log("error is ",error.message)
}
}
export default signupuser;