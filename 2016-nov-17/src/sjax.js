export default function sjax(filename){
	const sjax = new XMLHttpRequest();
	sjax.open('GET', filename, false);
  sjax.send(null);
	return sjax.responseText;
}
