import mongoose from 'mongoose'
const url= 'mongodb+srv://gourav:gouravranka@reactflipkartclone.ykned.mongodb.net/loginsighupform?retryWrites=true'
const connection = async () =>
{
    try{
    await mongoose.connect(url,
        {
            useCreateIndex: true, 
   useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
        })
        console.log("data crrswted")
    }
    catch(error)
    {
        console.log("error is ",error.message)
    }
}
export default connection