import mongoose from 'mongoose'
const signupuserschema = mongoose.Schema({
 username : { unique:true,type : String , required:true},
 password : { type : String , required:true}
  });

  const usersignup = mongoose.model('myuser',signupuserschema);
  export default usersignup;