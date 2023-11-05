const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_database');
const userSchema = new mongoose.Schema({
        name:String
});
mongoose.set("strictQuery", false);
const savedata = async () => {
    let UsersModel = mongoose.model('users', userSchema);
    let data = new UsersModel({name:"akhilesh 2", role_no: "20"});
    let result = await data.save().catch(error => { throw error});
    console.log(result);
}
const updateData =  async () => {
    let UsersModel = mongoose.model('users', userSchema);
    let result = await UsersModel.updateOne(
        {name: "akhilesh 2"},
        {
            $set: {name: "akhilesh 3"}
        }
    ).catch(error => { throw error});
    console.log(result);
}
const deleteData = async () => {
    let UsersModel = mongoose.model('users', userSchema);
    let result = await UsersModel.deleteOne({name:"akhilesh 3"});
    console.log(result);
}

const showData = async () => {
    let UsersModel = mongoose.model('users', userSchema);
    let result = await UsersModel.find();
    console.log(result);
}
showData();
