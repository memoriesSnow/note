const util = require('util')

async function fn () {
  return 'hello'
}
const callbackFn = util.callbackify(fn)

callbackFn((err, evt) => {
  console.log(err);
  console.log(evt);
})
