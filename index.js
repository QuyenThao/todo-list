var axios = require('axios');
var url = 'http://localhost:8000/todos';
var url1 = 'http://localhost:8000/todos/1';
 axios.get(url)
.then(function(res) {
  	console.log(res.data);
})
.catch(function(err) {
    console.log(err + '');
});

axios.post(url, {
    id: 6,
    content: "Go home"
}).then(function(res) {
    console.log(res.data);
});

axios.delete(url1);