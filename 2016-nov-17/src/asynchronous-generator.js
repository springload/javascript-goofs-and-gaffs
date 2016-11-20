import XMLHttpRequestPromise from 'xhr-promise';
import co from 'co';

export default function entry(filenames, success){

	co(function* () {
			 let responses = yield Promise.all(
				 filenames.map(filename => getFile(filename))
			 );
			 success(responses.map( response => JSON.stringify(response.responseText)));
	 });
}

function getFile(filename){
	return new XMLHttpRequestPromise().send({
    method: 'GET',
    url: filename
	});
}
