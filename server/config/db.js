// import mongoose from 'mongoose'

//  const connectDb = async ()=>{
//     try{

//         mongoose.connection.on('connected',()=>{
//             console.log("database connected successfully")
//         })
//         await mongoose.connect(`${process.env.DATABASE_URI}/hotel-booking`)

//     }catch(e){
//         console.log(e)
//     }
//  }

//  export default connectDb

import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    // event listeners should be attached to mongoose.connection
    mongoose.connection.on('connected', () => {
      console.log("✅ Database connected successfully")
    })

    mongoose.connection.on('error', (err) => {
      console.log("❌ Database connection error:", err)
    })

    await mongoose.connect(`${process.env.DATABASE_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

  } catch (e) {
    console.log("⚠️ Error connecting to database:", e)
  }
}

export default connectDb
