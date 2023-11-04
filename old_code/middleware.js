
module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please send age');
    } else if(req.query.age < 18) {
        resp.send('Age must be 18 or above');
    } else {
        next();
    }
}