# UDP Server/Client


Install NodeJS

  - [Executable Installer](https://nodejs.org/en/)
  - [Package Managers](https://nodejs.org/en/download/package-manager)

# How to Run

Starting the Server
```sh
$ cd udp-server-example
$ node udpserver.js
```

Sending Message from Client
```sh
$ cd udp-server-example
$ node udpclient.js index.html
```


# Responses

When Server Receive Request
```sh
server got a message from 127.0.0.1:49908
HEX  : [File Name hex represation]
ASCII: [File Name]
sent ACK.
```

When Received Server Response
```sh
sent.
received ACK from: 127.0.0.1:41234
HEX  : [File content hex representation]
ASCII: [File content (html)]
closed.
```