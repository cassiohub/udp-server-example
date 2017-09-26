const host = 'localhost';
const c_port = 41234;
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const send = (message, host, port) => {
  client.send(message, 0, message.length, port, host, (err, bytes) => console.log('sent.'));
};

const page = process.argv[2] ? process.argv[2] : null;
const message = (page) ? new Buffer(page) : new Buffer(process.argv[2]);

client.on('message', (msg, rinfo) => {
  console.log(`received ACK from: ${rinfo.address}:${rinfo.port}`);
  console.log(`HEX  : ${msg.toString('hex')}`);
  console.log(`ASCII: ${msg}`);
  return client.close();
});

client.on('err', (err) => {
  console.log(`client error: \n ${err.stack}`);
  return client.close();
});

client.on('close', () => {
  return console.log('closed.');
});


send(message, host, c_port);
