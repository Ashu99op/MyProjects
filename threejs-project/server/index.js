import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './dalle.routes.js'


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))

app.use("/api/v1/dalle",dalleRoutes)

app.get('/',(req,res)=> {
    res.status(200).json({message:"Oiii Levi"})
})

app.listen(5000,()=> console.log('Server is  Running.......'))