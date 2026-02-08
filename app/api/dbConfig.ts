import mongoose from "mongoose";


export function DbConfig() {
    try {
        mongoose.connect(process.env.MONGOOSE_CONNECTION_URI!)
        const connection=mongoose.connections
        connection[0].on("connected",()=>{
            console.log("mongo db connected ")
        })
        connection[0].on("error",()=>{
            console.log("mongo db error ")
        })
    } catch (error) {
        
console.log(error)
    }
}