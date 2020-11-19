'use strict';

const app = require('@app');

app.use('@chewbank/ioa-config');
app.use('@chewbank/ioa-ormv');
app.use('@chewbank/ioa-koa');
app.use('./lib');
