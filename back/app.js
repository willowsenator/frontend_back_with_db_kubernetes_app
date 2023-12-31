const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const {Pool} = require("pg")

const connection = {
    user: "postgres",
    password: "123456",
    database: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
}

const pool = new Pool(connection)

const PORT = 6500
app.listen(PORT, async()=>{
    console.log("Listening in port ", PORT)
})

app.get("/", async(req, res)=>{
    res.send("<h1>NodeJS working...")
})

app.get("/employees", async(req, res)=>{
    const result = await pool.query("SELECT * FROM employees", [])
    res.send(result.rows)
})