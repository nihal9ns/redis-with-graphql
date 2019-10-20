const redis = require('redis');
const client = redis.createClient({ url: 'redis://localhost:6379' });

client.on('error', function(err) {
  console.log('Error ' + err);
});

client.set('visits', 1, function(err) {
  if (err) {
    throw err;
  } else {
    client.get('visits', function(err, value) {
      if (err) {
        throw err;
      } else {
        console.log(value);
      }
    });
  }
});
