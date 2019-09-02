const express = require('express');
const path = require('path');
const fs = require('fs');
const async  = require('express-async-await')
const fetch = require('node-fetch')
const app = express();
const readJson = (path, cb) => {
    fs.readFile(require.resolve(path), (err, data) => {
      if (err)
        cb(err)
      else
        console.log('json data: ', data);
        cb(null, JSON.parse(data))
    })
  }
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', async function(req, res) {
  cb = function(err, data) {
    if(err) {
      return res.json({response:'there is problem with the server right now.'});   
    } 
    return res.json(data);
  }
  await readJson(path.join(__dirname, 'videos.json'), cb);
  
});
app.get('/api/:keyword', async function(req, res) {
 const keyword = req.params.keyword; 
 await fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b75da00e12d54774a2d362adddcc9bef&q=${keyword}`)
 .then( res => res.json())
 .then(json => {response = json})
 .catch(error => response = { message: 'error'} );
 return res.json(response);
});
const port = process.env.PORT || 5000;
app.listen(port);