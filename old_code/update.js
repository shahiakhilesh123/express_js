const dbConnect = require('./mongodb');

let update = async () => {
    let db = await dbConnect();
    /* this is for single update */
    //let result = await db.updateOne({})
    /* This is for multiple update */
    let result = await db.updateMany(
        {name : "some 1"}, {$set: {role_no : '26'}}
    );
    console.log(result);
}
update();