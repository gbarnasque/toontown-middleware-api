const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const PORT = process.env.port || 3000;

async function getInvasions() {
    return axios.get('https://www.toontownrewritten.com/api/invasions');
}

app.use(cors());
app.get('/invasions', async (req,res) => {
    try {
        const resp = await getInvasions(); 
        res.status(200).json(resp.data);
    } catch(e) {
        console.log(e.stack);
        res.status(500).send({error: e.message});
    }
});

app.listen(PORT, () => {
    console.log('Server RUNNING');
});
