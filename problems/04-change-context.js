function changeContext(func, obj) {
  let newFunc = func.bind(obj)
  return newFunc()
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
