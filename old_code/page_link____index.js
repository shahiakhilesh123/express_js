const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.get('',(_, resp)=>{
    // console.log(req.query.name);
    // resp.send('Hello this is home page');
    resp.render('home');
});
app.get('/about-us',(_, resp)=>{
    resp.render('aboutus');
    //resp.sendFile(`${publicPath}/about.html`);
});
app.get('/shop',(_, resp)=>{
    resp.render('shop');
    //resp.sendFile(`${publicPath}/about.html`);
});
app.get('/cart',(_, resp)=>{
    resp.render('cart');
    //resp.sendFile(`${publicPath}/about.html`);
});
app.get('/checkout',(_, resp)=>{
    resp.render('checkout');
    //resp.sendFile(`${publicPath}/about.html`);
});
app.get('/contact-us',(_, resp)=>{
    // const user = {
    //     name:'akhilesh',
    //     email:'shahiakhilesh75@gmail.com',
    //     subject:['hindi', 'english', 'math']
    // }
    // resp.render('profile', {user});
    resp.render('contact_us');
});
app.get('*',(_, resp)=>{
    /* 404 response */
    resp.send('404');
});

app.listen(5000)