const {response} = require('express');


const userGet = (req, res = response) => {
    res.json({user: 'user get - controller'})
  
}

const userPost = (req, res = response) => {

    const body = req.body;

    console.log(body);
    res.json(
        {
        user: 'user post - controller',
        body
    })
  
}

const userDelete = (req, res = response) => {
    res.json({user: 'user delete - controller'})
  
}

const userPut = (req, res = response) => {
    res.json({user: 'user put - controller'})
  
}

module.exports = {
    userGet,
    userDelete,
    userPut,
    userPost,

}