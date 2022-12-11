const Swal = require("sweetalert2");
const handleErrorMsg = (message, status) => {
  try {
    switch (status) {
      case 401 || 402:
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${message} `,
          showConfirmButton: false,
          class: "sucess_swal",
          timer: 5000,
        });
        break;

      default:
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  handleErrorMsg,
};
