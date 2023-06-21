const express = require('express');
const helmet = require('helmet');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const router = require('./routes');
const serverError = require('./errors/servererror');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();

// const allowedCors = [
//   "https://nice-man.nomoredomains.rocks",
//   "http://nice-man.nomoredomains.rocks",
//   "localhost:3000",
//   "http://localhost:3000",
// ];

// app.use((req, res, next) => {
//   const { origin } = req.headers;
//   const { method } = req;
//   const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
//   const requestHeaders = req.headers["access-control-request-headers"];
//   res.header("Access-Control-Allow-Credentials", "true");
//   if (allowedCors.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   if (method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
//     res.header("Access-Control-Allow-Headers", requestHeaders);

//     return res.end();
//   }

//   next();
// });

app.use(cors());

// mongoose.connect('mongodb://localhost:27017/mestodb');
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(express.json());

app.use(limiter);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(serverError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
