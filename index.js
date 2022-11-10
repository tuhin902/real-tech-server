const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

//middle wares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Real tech server is runnign')
});

app.listen(port, () => {
    console.log(`Real tech server running on ${port}`);
});