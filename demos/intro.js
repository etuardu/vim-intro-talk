// Task:
// * Remove "async"
// * Change the arguments to "value"


async function someDemoFunction(x, y, z) {
  console.log(x, y, z)
}


/*
// Before:
async function someDemoFunction(x, y, z) {
  console.log(x, y, z)
}

// After:
function someDemoFunction(value) {
  console.log(value)
}
*/
