const dbConnect = require('./mongodb');

let insert = async () => {
    let db = await dbConnect();
    /*This is for single entry */
    //const result = await db.insertOne({});
    /*This is for multiple entry */
    const result = await db.insertMany(
        [{name :  "some 1",role_no : "24",address : "gkp"},
        {name :  "some 2",role_no : "24",address : "gkp"},
        {name :  "some 3",role_no : "24",address : "gkp"}]
    );
    if(result.acknowledged) {
        console.warn(result);
    }
}

insert();