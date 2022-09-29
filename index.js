const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./models');
const {comment} = require('./controllers');
console.log(comment, "comment");

let corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

(async () => {
  await db.sequelize.sync();
})();

app.get('/', (req, res) => {
  res.send("welcome")
})

app.post('/postComment', comment.createComment);
app.get('/getComments', comment.getComments);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});