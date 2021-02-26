var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(start());
}).listen(8080);

function start() {

    require('dotenv').config();
    console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
    
    console.log('index.js is functioning');
    
    const client = require('twilio')();
    
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Ahoy world!',
        to: 'whatsapp:+16472986836'
        }).then(message => console.log(message.sid));
}

start();
