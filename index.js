const expressDep = require('express');
const app = expressDep();

app.get('/', (req, res) => {
	res.sendFile('index.html', {root:__dirname});
});

const server = app.listen(3000, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log("Now listening on http://%s:%s", host, port);
});
