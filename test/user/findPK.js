'use strict';

const test = require('jmr');
const typea = require('@chewbank/typea');
const axios = require('axios');

test('get', async t => {

   const result = await axios.get("/user/81");

   const schema = typea({ id: Number });

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});