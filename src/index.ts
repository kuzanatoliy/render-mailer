const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req: any, res: any) => res.type('html').send('Hello world'));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
