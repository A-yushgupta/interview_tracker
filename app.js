const express = require('express');
const mongoose = require('mongoose');

const app = express();
const dburll="mongodb+srv://ayush:ayush123@cluster0.ws2x4.mongodb.net/node-tits?retryWrites=true&w=majority";
// const dburl="mongodb+srv://nv_13:n@vjot13@cluster0.zeljj.mongodb.net/bloging";
app.set('view engine','ejs');
//  app.use(morgan('dev'));
app.listen(3000);
app.use(express.static('publik'));

mongoose.connect(dburll,{ useNewUrlParser:true,useUnifiedTopology: true})
.then((result)=> console.log('connected to Db'))
.catch((err)=>console.log(err));
 
 //for taking any file from that folderwhich is mentioned in public without path here we are adding the css in header 
 

app.get('/',(req,res)=>{
  
    const blogs = [
        {title: 'Discover', snippet:'haa bhai tmhara hi discovery hai'},
        // {title: 'lust', snippet:'hawas dekh rhe ho launde ki padne k liye'},
        {title: 'Depressed?', snippet:' hua kya hai.........ab tosch bol de '}
    ];
    //without ejs
    //res.sendFile('./views/index.html',{root:__dirname});

    //with ejs
    res.render('index',{ title: 'HOME', blogs});
});
app.get('/about',(req,res)=>{
  //  res.sendFile('./views/about.html',{root:__dirname});
  res.render('about', {title: 'ABOUT'})
});

app.get('/createBlog',(req,res)=>{
    res.render('createBlog', { title: 'Blog'});
})


//redirect
// app.get('/about-mere',(req,res)=>{
//     res.redirect('/about',{root:__dirname});
// });

//error wala
// if reaches this line means uper wala koi nhi h desired
app.use((req,res)=>{
   // res.sendFile('/views/err.html',{root:__dirname});
   res.render('404');
});