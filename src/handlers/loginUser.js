const app = require('../app');
const handler = require('../handler');

app.post('/users/login', async (req, res) => {
  res.status(200).send('User Logged In')
})

module.exports.handler = handler(app)