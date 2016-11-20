export default function entry(){
	return fetch('data.json');
}

// const responsePromise = entry();
// responsePromise
// 	.then((response) => {
// 		return response.text();
// 	})
// 	.then((text) => {
// 		container.textContent = text;
// 	});
