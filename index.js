const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('hi iam node from  man!!!')
})


const users = [
    { name: "rashed", id: 0, email: "ras@gmail.com" },
    { name: "bulbul", id: 1, email: "bulbul@gmail.com" },
    { name: "karim", id: 2, email: "karim@gmail.com" },
    { name: "rahim", id: 3, email: "rahim@gmail.com" },
]

//use query parameter
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})


//app.Method

app.post('/user', (req, res) => {
    const newMember = req.body;
    newMember.id = users.length;
    users.push(newMember);
    console.log('post hitted', req.body)
    // res.json(newMember)
    res.send(JSON.stringify(newMember))
})

//dynamic api
app.get('/user/:id', (req, res) => {
    const index = req.params.id;
    const id = index;
    const user = users[id]
    res.send(user);
})


app.listen(port, () => {
    console.log("listining", port);
})
