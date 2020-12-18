// console.log('hello ');
// console.log(process.argv);

// for(let i=0;i<process.argv.length;i++){
//     console.log(i + ' ' + process.argv[i]);
// }

const request = require('request');
request.post({url:'http://localhost:3002/api/persons', form: {name:"rrr", number:123}}, function(err,httpResponse,body){ console.log( body) })
//request('http://localhost:3002/api/persons', function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});

// const request = require('request');
// request.post({url:'http://localhost:3002/api/persons', form: {name:'rawaa'}}, 
//    function(err,httpResponse,body){ 
//        console.log(body)
//     })
// postData = {
//     name:'pat'
// }
// postConfig = {
//     url:'http://localhost:3003/api/persons',
//     form: {
//         name:'pat'
//     }
// };

// req.post(postConfig,  (err,httpResponse,body) => {
//     console.log('JSON response from the server: ' + body); 
// })