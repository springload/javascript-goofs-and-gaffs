import co from 'co';

export default function entry(filenames, success){
	co(function* () {
			 let responses = yield Promise.all(
				 filenames.map(filename => fetch(filename))
			 );
			 let values = yield Promise.all(
				 responses.map(response => response.text())
			 );
			 success(values);
	 });
}
