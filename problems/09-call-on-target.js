function callOnTarget(func, obj1, obj2) {
  // Your code here
  let newFunc = func.bind(obj1);
  return newFunc(obj2);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
