const express = require('express');
require('./config');
const users =  require('./users');
const mongodb =  require('mongodb');

const app = express();
app.use(express.json());

app.post('/create', async (req, resp)=>{
    let data =  new users({name: req.body.name, role_no: req.body.role_no, address: req.body.address});
    let result = await data.save().catch(error => {throw error});
    if(result){
        resp.send('Data Inserted Successfully');
    }
});

app.get('/list', async (req, resp) => {
    let data = await users.find({name: "akhilesh"});
    resp.send(data);
});
app.get('/list/:name', async (req, resp) => {
    let data = await users.find({name: req.params.name});
    resp.send(data);
});
app.delete('/delete/:_id', async (req, resp) => {
    let data = await users.deleteOne(req.params);
    resp.send(data);
});

// app.put('/update/:id', async (req, resp) => {
//     let data = await users.updateOne(
//         {_id: new mongodb.ObjectId(req.params.id)},
//         {name:req.body.name, role_no: req.body.role_no, address: req.body.address}
//     );
//     resp.send(data);
// });
app.put('/update/:_id', async (req, resp) => {
    let data = await users.updateOne(
        req.params,
        {
           $set : req.body
        }
    );
    resp.send(data);
});

app.get('/search/:key', async (req, resp)=>{
    let data = await users.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    });
    resp.send(data);
});

app.listen(5000);