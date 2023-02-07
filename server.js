const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8082 })

var shutdown = function () {
  console.log('Received kill signal, shutting down gracefully.');

  wss.close(function () {
    console.log('Closed out remaining connections.');
    process.exit();
  });

  setTimeout(function () {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 10 * 1000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

wss.on('connection', ws => {
  ws.on('message', message => {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  })
})
