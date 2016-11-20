import co from 'co';

export default async function(filenames, success){
	 let responses = await Promise.all(
		 filenames.map(filename => fetch(filename))
	 );
	 let values = await Promise.all(
		 responses.map(response => response.text())
	 );
	 console.log("values", values);
	 return values;
}
