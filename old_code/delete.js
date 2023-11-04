const dbConnect = require('./mongodb');

let deleted = async () => {
    let db = await dbConnect();
    /* this is for single delete */
    //let result = await db.deleteOne({name:"some 1"});
    let result = await db.deleteMany({name:"some 1"});
    console.log(result);
}

deleted();