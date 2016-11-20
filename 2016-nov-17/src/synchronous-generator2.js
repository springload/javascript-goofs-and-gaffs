export default function* entry(){
  let theArg;
  let counter = 0;
  while(counter < 3){
    theArg = yield counter++;
	}
	yield theArg;
}
