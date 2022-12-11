const axios = require("axios").default;
const getEDTemplatesRecords = async (DTO) => {
  try {
    // console.log(DTO, "DTOOOOOOOOOOOOOOO");
    const { data } = await axios.post(
      "http://localhost:30354/edt/getEdTemplates",

      DTO
    );
    // const { data } = await window.$nuxt.$axios({
    //   path: "/performance/processMap/getProcessMaps",
    //   data: DTO,
    // });

    return data;
  } catch (error) {
    throw error;
  }
};
const createTemplate = async (DTO) => {
  try {
    console.log(DTO, "DTOOOOOOOOOOOOOOO");
    const { data, status } = await axios.post(
      "http://localhost:30354/edt/addEdTemplate",

      DTO
    );

    // const { data } = await window.$nuxt.$axios({
    //   path: "/performance/processMap/getProcessMaps",
    //   data: DTO,
    // });

    return [data, status];
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getEDTemplatesRecords,
  createTemplate,
};
