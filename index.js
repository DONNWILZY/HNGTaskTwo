const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5001;

/////// DEFAULT ROUTE FOR DESSCIPTION
app.get('/', (req, res) => {
  const htmlResponse = `
   <html>
   <head><title>EFFIONG GODSWILL : HNG10 </title></head>
   <body>
       <h2>TASK TWO :</h2>
       <h3>NAME: EFFIONG GODSWILL O.</h3>
       <p>Slack Name: wilz</p>
      <p>Track:</p>
       <p>Github File URL: <a href="https://github.com/DONNWILZY/HNGTaskTwo/blob/master/index.js" target="_blank">/// https://github.com/DONNWILZY/HNGTaskTwo/blob/master/index.js</a></p>
       <p>Github Repo URL: <a href="https://github.com/DONNWILZY/HNGTaskTwo" target="_blank">/// https://github.com/DONNWILZY/HNGTaskTwo</a></p>
       <p></p>

       <h2> END POINTS</h2>
       <P> <b>CREATE USER:</b>  <a href="https://hngtasktwo.vercel.app/api" target="_blank">https://hngtasktwo.vercel.app/api</a></p> </P>
       <P> <b>UPDATE USER BY ID:</b>  <a href="https://hngtasktwo.vercel.app/:user_id" target="_blank">https://hngtasktwo.vercel.app/:user_id</a></p> </P>
       <P> <b>GET USER BY ID:</b>  <a href="https://hngtasktwo.vercel.app/:user_id" target="_blank">https://hngtasktwo.vercel.app/:user_id</a></p> </P>
       <P> <b>DELETE USER BY ID :</b>  <a href="https://hngtasktwo.vercel.app/api/:user_id" target="_blank">https://hngtasktwo.vercel.app/api/:user_id"</a></p> </P>
       <P> <b>GET ALL USERS:</b>  <a href="https://hngtasktwo.vercel.app/api" target="_blank">https://hngtasktwo.vercel.app/api</a></p> </P>
       <P> <b>UML DIAGRAM</b>  <a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=CRUSUML.drawio#R5Vldc9o4FP01zOw%2BZAfj70fAzpadtMsA2yZ9U2zFKLUtKssB%2ButXtuUPWaQQcOukfWGka%2BlKOuf46l4zUKfR7m8CNuv32IfhYDT0dwPVGYxGljVkv5lhXxg0zSgMAUF%2BYVJqwxJ9g9zI5wUp8mEiDKQYhxRtRKOH4xh6VLABQvBWHPaAQ3HVDQigZFh6IJStn5BP19yqGHb94B1EwZovbY34%2Be6B9yUgOI35ejGOYfEkAqUbfsZkDXy8bZhUd6BOCca0aEW7KQwzVEvEinnXzzyttkxgTE%2BZsE2VUfhZsx6%2FWuQ2mi1vH2erK427eQJhyrHgu6X7EpztGlG43AAv628Z%2FwN1sqZRyHoKa4JkU1DygHaQrTXhHiGhcPfsXpUKAaYpiCNIyZ4N4RNsjhmXk6Hy%2FrYmxxpy27rJS2kEXBBB5bpGhjU4OC8BaiQBNZ7PJKyYJ6ZZ1pkcQa0DkFRVRMnSNAklRTmAkqn9KJBUCaR06S4GIyNkS0%2FuCWsFtDp9Azf2cmyyZhqFY49iwsZk2CD2it6AexjOcYIowjEbco8pxVFjwDhEQfaA4hbGOKUhiuG0ChrDboBXVKMFvCxP8wDuFRndA69LwE8X7njlMm9jx5EJ%2BHfyjztd9SpfzRDla45kFH%2ByfA0JxYW7Wsw%2BZjBezz4IODZgM76mODdj4kNy5eEwE%2FA490T%2BuLpq2v%2FMwStnvCI69HY0UXqnw5To%2BG%2FuFKJ2ndnqd2LDVoy%2B2bAkNhz3xs3Y%2BHVp0HSRBmXY%2F1thSzxcz25W4i37q%2FFQ3Q1lcBr2TUMpjAYNS3e8mL77nWiwe38b9BPqFxj746xGZD0vBEmCPBEYHyTrrHDJOwkl%2BAtLGXN6HB8%2BgDSn00vJUzWoWAL6UlHZApJtA6fEg985QJm5UUACSI8WIDI1Dej1A8iXNgJDQNGTuOFDdPAV5hixo9SBsP0CWq1Utjgon9WsQtuOzJYjteWoAEJyxBgE%2B8awTTYg%2Bc6Gn0lnarEVHmvpVZheoEa5SHyxGvOPCbnShi9QmqyLCwlX2jzZZxIuValtRy8mXAgYXbAmF08XsiZElC6DhfE2goXVquws48xgoWiidsrk5%2FVoRy4ZL9QOEwXZ32adv2zVKA13ucHUzdLg7JrjnX2zN4cEsYNBckiOj2m0WfLNBXmO0KVAzTchUL38UFXqyjz3NisFWV2L%2BmsTqFxEv9bgZr0R7YgxyW7HpJO1o7YcKeaF2jktE7LNn5EJyVVqP7I7ria7TzUZ7ezIODMSGdbhfPeYmroi3JDr4S4JhztEbxvtu0a7vgqzTnkTdhmZTk279OGgTy1pLQmce6uZqiI60k%2B71Y5riXXrPzyL4fX%2Fyar7Pw%3D%3D">UML DIAGRAM</a></p> </P>
       <P> <b>README.MD</b>  <a href="https://github.com/DONNWILZY/HNGTaskTwo/blob/master/README.md">https://github.com/DONNWILZY/hngTaskOne/blob/master/README.md</a></p> </P>

   </body>
   </html>
`;

res.send(htmlResponse);
});


const userRoute = require('./route/userRoute'); 
app.use('/api', userRoute);




// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

/// db connection error
db.on('error', (error) => {
  console.error('Connection error:', error);
});
//// db connecrion status.Successful message
db.once('open', () => {
  console.log('Connection to MongoDB successful!');
});
//// db connecrion status.failure  message
db.once('close', () => {
  console.log('Connection to MongoDB disconnected.');
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  
  app.on('disconnect', () => {
    console.log('disconnected');
  });