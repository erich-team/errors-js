const Airbrake = require('@airbrake/node');

const airbrake = new Airbrake.Notifier({
  projectId: process.env.AIRBRAKE_PROJECT_ID,
  projectKey: process.env.AIRBRAKE_PROJECT_KEY,
  environment: process.env.ENV
});

airbrake.addFilter((notice) => {
  const {context: {environment: env}} = notice;
  return env == 'test' ? null : notice;
});

const logAndNotify = (error)=>{
  console.error(error);
  airbrake.notify(error);
  return error;
}

exports.airbrake = airbrake;
exports.logAndNotify = logAndNotify;
