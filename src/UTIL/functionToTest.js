const axios = require('axios');

const functionToTest = {
   
    fetchUser: () => axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(res=> res.data)
    .catch(err=> "error")
   
    }



module.exports = functionToTest;