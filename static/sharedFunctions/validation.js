const validateInputs = (obj) => {
  /* to validate the inputs to be filled before the sumbit (business rules) :
      this function will take an object and will loop through the values and then check if the value is object there should be a checker if the object is empty if nothing is empty return true otherwise it will return false and update the messageErrors */
  try {
    let arrOfValues = Object.values(obj);
    let arrOfKeys = Object.keys(obj);
    let flag = true;
    let arrOfEmptyData = [];
    for (let i = 0; i < arrOfValues.length; i++) {
      let val = arrOfValues[i];
      if (!val) {
        flag = false;
        arrOfEmptyData.push(arrOfKeys[i]);
        // return false;
      } else if (typeof val === "object") {
        if (!Object.entries(val).length || !Object.values(val).length) {
          flag = false;
          arrOfEmptyData.push(arrOfKeys[i]);

          // return false;
        } else {
          // for (let i = 0; i <  Object.values(val).length; i++) {
          //   const element = array[i];

          // }
          Object.values(val).map((el) => {
            if (!el) {
              return !el && ((flag = false), arrOfEmptyData.push(arrOfKeys[i]));
            }
          });
        }
      }
    }
    arrOfEmptyData = uniqueElements(arrOfEmptyData);

    if (!flag) {
      return [false, updateMessageErrors(arrOfEmptyData)];
    }
    return [true, {}];
  } catch (error) {
    throw new Error(error);
  }
};
const deleteCanBeNullInputs = (obj, array) => {
  // this function takes an object and array of keys which can be null when validate Inputs  and returns obj after delete keys
  let objCopy = obj;
  array.map((el) => {
    return delete objCopy[el];
  });
  return objCopy;
};
const uniqueElements = (arr) => {
  // return [...new Set(arr)];
  const unique = [...new Map(arr.map((m) => [m, m])).values()];
  return unique;
};
const updateMessageErrors = (arrOfOfEmptyObjcts) => {
  let messageErrors = {};
  for (let i = 0; i < arrOfOfEmptyObjcts.length; i++) {
    messageErrors[
      arrOfOfEmptyObjcts[i]
    ] = `${arrOfOfEmptyObjcts[i]}  is required`;
  }
  return messageErrors;
};
module.exports = {
  deleteCanBeNullInputs,
  validateInputs,
};
