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
       <P> <b>UML DIAGRAM</b>  <a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=CRUSUML.drawio#R5ZnZcpswFIafxjPthTvsy6UX0riTthnbbd3eyaCAUowcIWK7T19hBAbkjNdCJ7nxSAfpAP%2F%2FcSSNO%2Bpgsf5IwDL4jD0YdhTJW3fUYUdRLEtiv2lgkwU0zcgCPkFeFpJ3gQn6A3mQz%2FMT5MG4MpBiHFK0rAZdHEXQpZUYIASvqsMecFi96xL4UAhMXBCK0R%2FIowGPyoa9u3ALkR%2FwW1sKf785cH%2F7BCcRv1%2BEI5hdWYA8DX%2FHOAAeXpVCqtNRBwRjmrUW6wEMU1VzxbJ5Ny9cLR6ZwIgeM2GVyEr4S7MenywyW4wms8fRtKvxNM8gTLgW%2FGnpJhdnFSAKJ0vgpv0V87%2Bj9gO6CFlPZk0QLzNLHtAasnv1eUZIKFy%2F%2BKxyoQBjCuIFpGTDhvAJNteM42SovL%2FamVMwF5R9yYOAA%2BEXqXfKsAYX5xShFEGo3v1I0IplYsyyTv%2BAalcQSVWrKlmaJqgky3tUMrV%2FJZIqiJRMnHFHMUJ26%2F6csJZPi7cv6cY%2BjmXaTBZhz6WYsDGpNoh9ondgDsN7HCOKcMSGzDGleFEa0AuRn16guKYxTmiIIjgoioZ0HeFl1agJL%2BJp7tG9MOP6wuuC8IOx05s6LFtvOBQN%2BNr%2F5AymreKrGVV8TUVUsWF8DUHFsTMdj76nMt6MvlR0LMlmPCV4G8bEg6Tr4jAFuLfNRN51u%2BX4%2B614%2BYz%2FyA69Xk3k1u0wBTu%2B3Q8zqJ3haPqW3LBlo203LMGNoXPnpG68Xhs0vWqDLLX%2FVdiCDzeju2l1lX1tPhRrQ16cpLZtyMEo2TBxeuPB7VuywW79a9DFbbmoUOT10jMi67khiGPkVoXZHt%2FSk0tpfwg94cB4UCQCQ0DRc3XevjfmU%2B8xYhl3u0qzxrhd2y3GOCEu5LPKB71aIuFcUE9EAfEhFRIxkcCmNGyZDogFi4o3vsA1sYZd6JoH4mDbkU%2BwUJEyJQ5WW9HrEvD6Ht7z2IVIGHUnjTORMKwXNncHkLiW4YZYLa9pOFwjOiu1f5bawzWfse1sTvzK2RNuJT7i1HCQJV3qtMmSVkPAPJMlU5WriXS9WZbEjWhDJf8YGJRjC4veJgxafSGXzoRBqy9aesOF5eorCbOcbGblTlpNpA963t0VlG3v9IpymA2jXTbM2qIjn8mGrVYSmbbZKBvm1RedfesMJ6ORlebo4mK2CpBaA8g8EyC9vmTpDQN0xJ8jlwPU3EblaHysVvHRavhY5%2BKjV%2BuPrdpXwod1d%2F%2FbZcN3f4uqzl8%3D">UML DIAGRAM</a></p> </P>
       <P> <b>README.MD</b>  <a href="https://github.com/DONNWILZY/HNGTaskTwo/blob/master/README.md">https://github.com/DONNWILZY/hngTaskOne/blob/master/README.md</a></p> </P>

   </body>
   </html>
`;

res.send(htmlResponse);
});


const userRoute = require('./route/userRoute'); 
app.use('/api', userRoute);




// Database connection
mongoose.connect(process.env.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
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