export default function ajax(success){
	const ajax = new XMLHttpRequest();
	ajax.open('GET', 'data.json', true);
	ajax.addEventListener('load', (ev) => {
		success(ev.target.responseText);
	});
  ajax.send(null);
}
