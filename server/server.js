import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_DIST = path.resolve(__dirname, '../dist');
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
