const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/postses')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log('success', data);
	})
	.catch(function (error) {
		console.log('error', error);
	});


// const xhr = new XMLHttpRequest()

console.log(typeof XMLHttpRequest)
console.log(typeof global.fetch)