const fs = require('fs');

const s_port = 41234;
const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const getFile = (fileName) => {
  return fs.readFileSync(fileName, "utf8", (err, buff) => buff);
}

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on("message", (msg, rinfo) => {
  console.log(`server got a message from ${rinfo.address}:${rinfo.port}`);
  console.log(`HEX  : ${msg.toString('hex')}`);
  console.log(`ASCII: ${msg}`);

  try {
    const buff = getFile(msg);
    return server.send(buff, 0, buff.length, rinfo.port, rinfo.address, (err, bytes) => console.log("sent ACK."));
  } catch (err) {
    const ack = new Buffer(`${msg} not found`);
    return server.send(ack, 0, ack.length, rinfo.port, rinfo.address, (err, bytes) => console.log("sent ACK."));
  }
});

server.on("error", (err) => {
  console.log(`server error: \n ${err.stack}`);
  return server.close();
});

server.on("close", () => console.log("closed."));

server.bind(s_port);
