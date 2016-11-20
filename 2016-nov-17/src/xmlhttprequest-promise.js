import XMLHttpRequestPromise from 'xhr-promise';

export default function entry(filename){
	return new XMLHttpRequestPromise().send({
    method: 'GET',
    url: filename
	});
}
