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
       <p>Github File URL: <a href="///" target="_blank">///</a></p>
       <p>Github Repo URL: <a href="///" target="_blank">///</a></p>
       <p></p>

       <h2> END POINTS</h2>
       <P> <b>CREATE USER:</b>  <a href="https://hng-task-one-two.vercel.app/api/data" target="_blank">https://hng-task-one-two.vercel.app/api/data</a></p> </P>
       <P> <b>GET USER BY ID:</b>  <a href="https://hng-task-one-two.vercel.app/api?slack_name=wilz&track=backend" target="_blank">https://hng-task-one-two.vercel.app/api?slack_name=wilz&track=backend</a></p> </P>
       <P> <b>DELETE USER BY ID </b>  <a href="https://github.com/DONNWILZY/hngTaskOne/blob/master/README.md">https://github.com/DONNWILZY/hngTaskOne/blob/master/README.md</a></p> </P>
       <P> <b>GET ALL USERS:</b>  <a href="https://hng-task-one-two.vercel.app/api/data" target="_blank">https://hng-task-one-two.vercel.app/api/data</a></p> </P>

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