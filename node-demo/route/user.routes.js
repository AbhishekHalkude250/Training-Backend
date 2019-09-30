module.exports = (app) => {
const  user = require('../controller/con.cntroller');
    
app.post('/addname', user.create);

app.get('/addname/findall', user.findAll);

app.get('/addname/:_id', user.findone);

app.put('/addname/:_id', user.update);
}   