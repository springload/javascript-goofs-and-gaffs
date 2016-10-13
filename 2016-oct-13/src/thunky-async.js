export default function makeAjaxCall(url) {
  console.log("fetch", url);
  return function(dispatch) {
    return fetch(url).then(
      response => {
        return dispatch({type: 'SET_TEXT', text: url + "#" + response.status});
      },
      error => dispatch({type: 'SET_TEXT', text: 'it didn\'t work. the lesson is ruined.'}),
    );
  };
}
