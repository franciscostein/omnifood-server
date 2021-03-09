const express = require('express');
const app = express();

const publicPath = `${__dirname}/public`;

// setting middleware
app.use(express.static(publicPath));  // serves resources from public folder

// route for any request
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.listen(3000);