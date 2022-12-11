const Swal = require("sweetalert2");
const handleSucessMsg = (status, message, action) => {
  try {
    switch (status) {
      case 201:
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${message} has been Created successfully`,
          showConfirmButton: false,
          class: "sucess_swal",
          timer: 1200,
        });
        break;
      case 200:
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${message} has been ${action} successfully`,
          showConfirmButton: false,
          class: "sucess_swal",
          timer: 1200,
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
  handleSucessMsg,
};
