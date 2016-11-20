# Math in JavaScript

Regular math in JavaScript and many other languages has tiny errors. `0.1 + 0.2` will result in `0.30000000000000004`.

So,

    > 0.1 + 0.2 === 0.3;
    false

Usually these errors don't matter but if you're handling money then you'll probably want accurate math which is called Decimal Math, or Decimal Arithmatic.

There are many libraries for this and they typically handle numbers as strings. So you use '0.1' rather than 0.1, and '0.2' rather than 0.2, etc.

You pass these strings to a library like [Big.js](https://github.com/MikeMcl/big.js/) like,
 
    > Big('0.1').add('0.2').toString();
    '0.3'

And you can use it to do comparisons too...

    > Big('0.1').add('0.2').eq('0.3');
    true

These are calls to `Big.js` that are processed from left-to-right (chained functions), but remember back in school there was [BEDMAS or BODMAS](https://en.wikipedia.org/wiki/Order_of_operations) which said you have to do division before addition, or something like that. But because `Big.js` is processed left-to-right you need to remember to do things in the correct order.

An alternative (which is probably slightly less efficient) is a thing called Math.js which has an `math.eval('0.1 + 0.2 / 0.5')` which will remember BODMAS for you.

------------------------------------

The techy reasoning behind these slight math inaccuracies is that it's faster for the CPU to do binary math. This approach was standardised in IEEE 754 which many popular languages use (JavaScript, Python).
