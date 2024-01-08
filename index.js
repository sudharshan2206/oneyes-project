const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static("public"))
connect.use(bodyparser.urlencoded({extended: true}))

let databaseconnection = database.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password: "Sudhar2206@",
    database: "oneyes"
})

//image display
connect.get('/imagedisplay', (request, response) => {
    let sql = 'select * from images'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)

        }

    })
})
// fetch single data
// single data fetch for dashboard
connect.get('/singleimage/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from images where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }

    })
})



// add image
connect.post('/addimage',(request,response)=>{
    let{sand,cement,bricks,stone,msand,psand,rod,image,price}=request.body
    let sql='insert into images(sand,cement,bricks,stone,msand,psand,rod,image,price) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[sand,cement,bricks,stone,msand,psand,rod,image,price],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})
  
//update user 
connect.put('/updateimage/:id', (request, response) => {
    let { id } = request.params
    let {sand,cement,bricks,stone,msand,psand,rod,image,price} = request.body
    let sql = 'update images set sand=?,cement=?,bricks=?,stone=?,msand=?,psand=?,rod=?,image=?,price=? where id=?'
    databaseconnection.query(sql, [sand,cement,bricks,stone,msand,psand,rod,image,price, id], (error, result) => {
        if (error) {
            response.send({ "status": "not_updated" })
            console.log(error)
        }
        else {
            response.send({ "status": "success", "id": id })
            console.log("ok")
        }
    })
})

  connect.listen(2222, () => {
    console.log(`Server is running on port number 2222`);
  });