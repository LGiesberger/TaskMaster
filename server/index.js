const Express = require('express');
const cors = require('cors');
const router = require('./router');
const PORT = process.env.PORT || 3001;
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
