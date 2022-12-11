// require("dotenv").config();

const uniqueObjects = (arr, compareBy) => {
  const uniqueIds = [];

  const unique = arr.filter((element) => {
    // console.log(element.entity.id, "element[compareBy]element[compareBy]");
    const isDuplicate = uniqueIds.includes(element[compareBy]);

    if (!isDuplicate) {
      uniqueIds.push(element[compareBy]);

      return true;
    }

    return false;
  });
  return unique;
};
const getEndPoint = () => {
  try {
    let endPoint = "";
    let enviroment = process.env.NODE_ENV;
    console.log(process.env.NODE_ENV, "process.env");
    switch (enviroment) {
      case "development":
        endPoint = "https://web.development.agentsoncloud.com";
        break;
      case "test":
        endPoint = "https://web.test.agentsoncloud.com";
        break;
      case "pre-production":
        endPoint = "https://web.preprod.agentsoncloud.com";
        break;
      case "production":
        endPoint = "https://web.agentsoncloud.com";
        break;

      default:
        endPoint = "http://172.26.16.1:41902";
        break;
    }
    return endPoint;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  uniqueObjects,
  getEndPoint,
};
