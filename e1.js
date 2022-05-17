const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = 4000;


app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));