import sjax from './sjax.js';
// import entry from './ajax.js';
// import entry from './fetch.js';
// import xhrp from './xmlhttprequest-promise.js';
// import entry from './synchronous-generator.js';
// import entry from './synchronous-generator2.js';
// import entry from './asynchronous-generator.js';
// import entry from './asynchronous-generator2.js';
// import entry from './async-keyword.js';

const container = document.getElementById('container');


container.textContent = sjax('data.json');








































// XMLHttpRequestPromise
// xhrp('data.json')
// 	.then((response) => {
// 		container.textContent = JSON.stringify(response.responseText);
// 	})
















// XMLHttpRequestPromise Duo
// const promise1 = xhrp('data.json');
// const promise2 = xhrp('data2.json');
//
// Promise.all([promise1, promise2])
// 	.then((responses) => {
// 		const [response1, response2] = responses;
// 		container.textContent = JSON.stringify(response1.responseText) + JSON.stringify(response2.responseText);
// 	})




















// Synchronous Generator
// const counterGenerator = entry();
// container.textContent += counterGenerator.next().value;
// container.textContent += counterGenerator.next().value;
// container.textContent += counterGenerator.next().value;
// container.textContent += counterGenerator.next().value;















// Synchronous Generator 2
//const counterGenerator = entry();
// container.textContent += counterGenerator.next(2).value;
// container.textContent += counterGenerator.next('this is fine').value;
// container.textContent += counterGenerator.next('everything is going to be fine').value;
// container.textContent += counterGenerator.next('trump?').value;
















// Asynchronous Generator
// entry(['data.json', 'data2.json'], (responses) => {
//	container.textContent = responses.join('')
// });
















// Async Keyword
// entry(['data.json', 'data2.json']).then(values => {
// 	container.textContent = values.join('');
// });




























// (async function(){
//	const values = await Promise.resolve(entry(['data.json', 'data2.json']));
//	container.textContent = values.join('');
// }())
