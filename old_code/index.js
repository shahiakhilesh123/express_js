const dbConnect = require('./mongodb');
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();
//console.log(main);
/*promise method */
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });
 //getData()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());