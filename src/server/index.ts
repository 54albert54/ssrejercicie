import express , {Express , Request, Response } from "express"
import axios from "axios"
const app :Express = express()

import {config} from './config'
import { renderServerApp } from "./render"

// app.get('/',(req:Request,res:Response)=>{
//   res.send('hola mundo')
// })

app.use(express.static('dist'))

app.get('/galaxias',async (req:Request , res:Response) => {
  try {
      const { data } = await axios.get("https://images-api.nasa.gov/search?q=galaxies");

      const initialProps = {
        galaxies: data?.collection?.items
      }

      res.send(renderServerApp(req.url , initialProps))
  } catch (error) {
    throw new Error('an Error in a fetch data')
  }
  
})


app.get('*',(req:Request,res:Response)=>{
  res.send(renderServerApp(req.url))
})

app.listen(config.PORT, ()=>{
  console.log(`esto es desde el server ${config.PORT}`)
})
