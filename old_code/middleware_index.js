const express =  require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router(); 
 
route.use(reqFilter);
/* App level */
//app.use(reqFilter);
app.get('/',(req, resp)=>{
    resp.send('this is home page');
});
/*single route */
app.get('/user', reqFilter, (req, resp)=>{
    resp.send('this is user page');
});
route.get('/contact', (req,resp)=>{
    resp.send('this is contact page');
});
 
app.use('/', route);
app.listen(5000);