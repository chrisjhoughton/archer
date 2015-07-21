var archer = require('./lib');




archer.get('https://us5.api.mailchimp.com/schema/3.0/Lists/Instance.json').spread(function (res, body) {

  console.log(res.statusCode, body);
});