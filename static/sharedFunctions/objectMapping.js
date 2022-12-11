function objectMapping(incomming, outgoing) {
  const regex = /\${[a-zA-Z]+[\sS\]_[a-zA-Z]+}|\${[a-zA-Z]}/g;
  const replace1 = /\${/g;
  const replace2 = /}/g;
  let stringifiedOutgoing = JSON.stringify(outgoing);
  // console.log(stringifiedOutgoing);
  let outgoingMathched = stringifiedOutgoing.match(regex);
  let flattenedIncomming = flattenObj(incomming);
  // console.log("flattenedIncomming", flattenedIncomming);
  let mappedOutgoing = stringifiedOutgoing;
  if (outgoingMathched !== null && outgoingMathched.length > 0) {
    mappedOutgoing = outgoingMathched
      .map((matched) => {
        m1 = matched.replace(replace1, "");
        m2 = m1.replace(replace2, "");
        return (stringifiedOutgoing = stringifiedOutgoing.replace(
          matched,
          flattenedIncomming[m2]
        ));
      })
      .pop();
  }
  mappedOutgoing = JSON.parse(mappedOutgoing);
  // console.log("mappedOutgoing", mappedOutgoing);
  return mappedOutgoing;
}
const flattenObj = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[j] = temp[j];
      }
    }
    // else if (Array.isArray(ob[i]) === true) {
    //     const temp1 = flattenObj(ob[i]);
    //     for (const j in temp1) {
    //         result[j] = temp1[j];
    //     }
    // }
    else {
      result[i] = ob[i];
    }
  }
  return result;
};
const changeReqBodyKeys = (obj) => {
  try {
    let Tempvalue;
    let Tempkey;
    let names = [];
    // get all objects inside the object and then change name
    let entries = Object.entries(obj);
    // check if the value is object change the names
    let formattedKeys = [];
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < entries.length; i++) {
      const value = entries[i][1];
      const key = entries[i][0];
      if (value) {
        if (typeof value == "object") {
          arr = [...printList(value, key, Tempvalue, Tempkey, names)];
        } else {
          arr2.push({ [key]: value });
        }
      }
    }
    formattedKeys = [...arr, ...arr2];
    return formattedKeys;
  } catch (error) {
    throw new Error(error);
  }
};
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function printList(obj, root, value, key, names) {
  Object.entries(obj).map((el) => {
    key = el[0];
    value = el[1];
    root = root;
    if (key == 0) {
      key = "Array";
    }
    if (value) {
      if (typeof value !== "object") {
        names.push({ [`${root}${capitalize(key)}`]: value });
      } else {
        printList(value, `${root}${capitalize(key)}`, value, key, names);
      }
    }
  });
  return names;
}
module.exports = {
  objectMapping,
  changeReqBodyKeys,
};
