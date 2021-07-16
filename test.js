const test = require('ava');

test("airbrake is an object", async (t)=>{
  const {airbrake} = require('./index.js');
  t.truthy(airbrake);
});

test("logAndNotify", async (t)=>{
  const {logAndNotify} = require('./index.js');
  t.truthy(logAndNotify(new Error()));
});
