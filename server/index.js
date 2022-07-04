import express from 'express';
import bp from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const candidatesData = await fetch(
  'https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122'
);
const candidatesJson = await candidatesData.json();

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/candidates', (req, res) => {
  res.status(200);
  res.json(candidatesJson);
});
