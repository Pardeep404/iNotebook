const express = require('express');
var cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const port = 4000;

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/inotebook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// ====Available Routes=====>
app.use(express.json());

// ====Available Routes=====>
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


// =========>
app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
});
