const express = require('express');
require('dotenv').config();
const apiClient = require('./api/apiGPT');



const app = express();
const PORT = 3000;

app.get('/perfilar', async (req, res) => {
  const message = req.query.message;
  const profile = req.query.profile; 
  if (!message) {
    return res.status(400).send("Se requiere el parámetro message.");
  }
  if (!profile) {
    return res.status(400).send("Se requiere el parámetro profile.");
  }
  
  const response = await apiClient.getRespuestaSegunPerfil(message,profile);
  res.send(response.choices[0].message.content);
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
