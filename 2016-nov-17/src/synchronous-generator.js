export default function* entry(){
  let counter = 0;
  while(counter < 3){
    yield counter++;
	}
	yield "done"
}
