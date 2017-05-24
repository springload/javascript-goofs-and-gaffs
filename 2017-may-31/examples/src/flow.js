// @flow

function length (x) {
  if (!x) return 0;
	return x.length;
}

const result = length(1);

const entireObj = {
  a: 1,
  b: 2,
  c: 3
};

// pick example