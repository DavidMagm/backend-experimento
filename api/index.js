const express = require('express');
const app = express();
const cors = require('cors')
const routerApi = require('./routes');
const { logError, errorHandler, boomErrorHandler } = require('./middleware/errorHandler');
const port = process.env.PORT ||  3000;
app.use(express.json())


const ipList = ['http://localhost:5500', 'http://127.0.0.1:5500']
const corsOptions = {
  origin: (origin, callback) => {
    if(ipList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
};
app.use(cors(corsOptions))
app.get('/api', (req, res) => {
  res.send('Hola server')
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta')
});

routerApi(app)

app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('hola' + port)
});
