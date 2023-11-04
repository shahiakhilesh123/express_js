const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.find().toArray();
    resp.send(result);
})

app.post('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.insertOne(
        {name: req.body.name, role_no: req.body.role_no, address: req.body.address}
    ).catch(error => { throw error})
    if(result.acknowledged){
        resp.send({msg: "Inserted Successfully"});
    }
})

app.put('/:name', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.updateOne({name: req.params.name}, {$set:{role_no: "12"}}) 
    if(result.acknowledged){
        resp.send({msg: "Updated Successfully"});
    }
})
app.delete('/:id', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    if(result.acknowledged){
        resp.send({msg: "Deleted Successfully"});
    }
})
app.listen(5000)