// This works, yay!
import('./module.js').then((mod) => {
  console.log("2 times two is ", mod.timesTwo(2));
})

// This doesn't, nay! ;(
const token = "LOLLOL"
import('./module.js?token=' + token).then((mod) => {
  console.log("3 times two is ", mod.timesTwo(6));
})
