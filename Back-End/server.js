import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import userRouter from './Route/UserRoute.js';
import categoryRouter from './Route/CategoryRoute.js';
import ProductRouter from './Route/ProductRoute.js';



dotenv.config()
const app = express();

var corOptions = {
  origin: 'http://localhost:80'
}


//middleware
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


//middlewear function//

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//testing api
app.get("/",(req, res) =>{
  res.json({message:'hello from api'})
})


app.listen (process.env.PORT ,()=>{
    console.log("server listening on port",process.env.PORT);
})

//routes
app.use('/api/users',userRouter);
app.use('/api/categories',categoryRouter);
app.use('/api/Products',ProductRouter);


